import dayjs from 'dayjs'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'

import { createSelector } from 'reselect'

import { everyNFromArray } from 'CalendarPage/utils'
import { formats, lines } from 'CalendarPage/config'
import { Events } from './calendarSlice'

dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)

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

export const selectEndDate = createSelector(
	selectStartDate,
	selectNumberOfDaysToShow,

	(startDate, numberOfDaysToShow): string =>
		dayjs(startDate)
			.add(numberOfDaysToShow - 1, 'day')
			.toISOString()
)
export const selectDoesCalendarIncludeToday = createSelector(
	selectStartDate,
	selectEndDate,

	(startDate, endDate): boolean => {
		const today = dayjs()

		return (
			today.isSameOrAfter(dayjs(startDate).startOf('day')) &&
			today.isSameOrBefore(dayjs(endDate).endOf('day'))
		)
	}
)

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
	selectHoursDifferenceBetweenSlots,

	(numberOfSlots: number, hoursDifferenceBetweenSlots: number): string[] => {
		const startOfStartDate = dayjs('2020-01-01').startOf('day')

		return [...Array(numberOfSlots)].map((e, i) =>
			startOfStartDate
				.add(i * hoursDifferenceBetweenSlots, 'hour')
				.toISOString()
		)
	}
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
		const joined = `${slotTimes.join(' ')} [${lines.rows.end}]`
		const removedFirstBracket = joined.substring(1)

		return removedFirstBracket
	}
)

export const selectEventsShown = createSelector(
	selectEvents,
	selectStartDate,
	selectEndDate,

	(events, startDate, endDate): Events => {
		const earliestStart = dayjs(startDate).startOf('day')
		const latestEnd = dayjs(endDate).endOf('day')

		return events.filter(
			event =>
				dayjs(event.start).isSameOrAfter(earliestStart) &&
				dayjs(event.end).isSameOrBefore(latestEnd)
		)
	}
)
