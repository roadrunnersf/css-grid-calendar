import dayjs from 'dayjs'
import { createSelector } from 'reselect'

import { everyNFromArray } from 'CalendarPage/utils'
import { endRowLine, formats } from 'CalendarPage/config'

export const selectCalendar = (state: State) => state.calendar

export const selectStartDate = (state: State) => selectCalendar(state).startDate

export const selectEvents = (state: State) => selectCalendar(state).events

export const selectNumberOfDaysToShow = (state: State) =>
	selectCalendar(state).numberOfDaysToShow

export const selectHoursPerDay = (state: State) =>
	selectCalendar(state).hoursPerDay

export const selectSlotsPerHour = (state: State) =>
	selectCalendar(state).slotsPerHour

export const selectTimeBlocksPerHour = (state: State) =>
	selectCalendar(state).timeBlocksPerHour

export const selectTimeLabelsPerHour = (state: State) =>
	selectCalendar(state).timeLabelsPerHour

export const selectDatesShown = createSelector(
	selectStartDate,
	selectNumberOfDaysToShow,

	(startDate, numberOfDaysToShow): string[] => {
		const datesShown = [dayjs(startDate).toISOString()]

		for (let i = 1; i < numberOfDaysToShow; i++) {
			datesShown.push(dayjs(startDate).add(i, 'day').toISOString())
		}

		return datesShown
	}
)

export const selectHoursDifferenceBetweenSlots = createSelector(
	selectSlotsPerHour,

	(slotsPerHour): number => 1 / slotsPerHour
)

export const selectNumberOfSlots = createSelector(
	selectSlotsPerHour,
	selectHoursPerDay,

	(slotsPerHour, hoursPerDay): number => slotsPerHour * hoursPerDay
)

export const selectSlotsArray = createSelector(
	selectNumberOfSlots,
	selectStartDate,
	selectHoursDifferenceBetweenSlots,

	(
		numberOfSlots: number,
		startDate: string,
		hoursDifferenceBetweenSlots: number
	): string[] =>
		[...Array(numberOfSlots)].map((e, i) =>
			dayjs(startDate)
				.add(i * hoursDifferenceBetweenSlots, 'hour')
				.toISOString()
		)
)

export const selectTimeBlocksArray = createSelector(
	selectSlotsPerHour,
	selectTimeBlocksPerHour,
	selectSlotsArray,

	(slotsPerHour, timeBlocksPerHour, slotsArray): string[] => {
		const every = slotsPerHour / timeBlocksPerHour

		const filteredSlots = everyNFromArray(slotsArray, every)

		return filteredSlots
	}
)

export const selectTimeLabelsArray = createSelector(
	selectSlotsPerHour,
	selectTimeLabelsPerHour,
	selectSlotsArray,

	(slotsPerHour, timeLabelsPerHour, slotsArray): string[] => {
		const every = slotsPerHour / timeLabelsPerHour

		const filteredSlots = everyNFromArray(slotsArray, every)

		return filteredSlots
	}
)

export const selectSlotTimes = createSelector(
	selectSlotsArray,

	(slotsArray): string[] =>
		slotsArray.map(timeObj => {
			const formattedHour = dayjs(timeObj).format(formats.cssGridTime)

			return `[${formattedHour}] 1fr`
		})
)

export const selectSlotGridTemplateRows = createSelector(
	selectSlotTimes,

	(slotTimes): string => {
		const joined = `${slotTimes.join(' ')} [${endRowLine}]`
		const removedFirstBracket = joined.substring(1)

		return removedFirstBracket
	}
)
