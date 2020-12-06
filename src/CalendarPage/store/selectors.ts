import dayjs, { Dayjs } from 'dayjs'
import { createSelector } from 'reselect'

import { everyNFromArray } from 'CalendarPage/utils'
import { endRowLine, formats } from 'CalendarPage/config'

export const selectCalendar = (state: State) => state.calendar

export const selectStartDate = (state: State) => selectCalendar(state).startDate

export const selectHoursPerDay = (state: State) =>
	selectCalendar(state).hoursPerDay

export const selectSlotsPerHour = (state: State) =>
	selectCalendar(state).slotsPerHour

export const selectTimeBlocksPerHour = (state: State) =>
	selectCalendar(state).timeBlocksPerHour

export const selectTimeLabelsPerHour = (state: State) =>
	selectCalendar(state).timeLabelsPerHour

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
	): Dayjs[] =>
		[...Array(numberOfSlots)].map((e, i) =>
			dayjs(startDate).add(i * hoursDifferenceBetweenSlots, 'hour')
		)
)

export const selectTimeBlocksArray = createSelector(
	selectSlotsPerHour,
	selectTimeBlocksPerHour,
	selectSlotsArray,

	(slotsPerHour, timeBlocksPerHour, slotsArray): Dayjs[] => {
		const every = slotsPerHour / timeBlocksPerHour

		const filteredSlots = everyNFromArray(slotsArray, every)

		return filteredSlots
	}
)

export const selectTimeLabelsArray = createSelector(
	selectSlotsPerHour,
	selectTimeLabelsPerHour,
	selectSlotsArray,

	(slotsPerHour, timeLabelsPerHour, slotsArray): Dayjs[] => {
		const every = slotsPerHour / timeLabelsPerHour

		const filteredSlots = everyNFromArray(slotsArray, every)

		return filteredSlots
	}
)

export const selectSlotTimes = createSelector(
	selectSlotsArray,

	(slotsArray): string[] =>
		slotsArray.map(timeObj => {
			const formattedHour = timeObj.format(formats.cssGridTime)

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
