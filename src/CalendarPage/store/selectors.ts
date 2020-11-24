import dayjs from 'dayjs'
import { createSelector } from 'reselect'

import { everyNFromArray } from 'CalendarPage/utils'

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

	slotsPerHour => 1 / slotsPerHour
)
export const selectNumberOfSlots = createSelector(
	selectSlotsPerHour,
	selectHoursPerDay,

	(slotsPerHour, hoursPerDay) => hoursPerDay * slotsPerHour
)

export const selectSlotsArray = createSelector(
	selectTimeBlocksPerHour,
	selectStartDate,
	selectHoursDifferenceBetweenSlots,

	(numberOfSlots, startDate, hoursDifferenceBetweenSlots) =>
		[...Array(numberOfSlots)].map((e, i) =>
			dayjs(startDate).add(i * hoursDifferenceBetweenSlots, 'hour')
		)
)

export const selectTimeBlocksArray = createSelector(
	selectSlotsPerHour,
	selectTimeBlocksPerHour,
	selectSlotsArray,

	(slotsPerHour, timeBlocksPerHour, slotsArray) => {
		const every = slotsPerHour / timeBlocksPerHour

		const filteredSlots = everyNFromArray(slotsArray, every)

		return filteredSlots
	}
)

export const selectTimeLabelsArray = createSelector(
	selectSlotsPerHour,
	selectTimeLabelsPerHour,
	selectSlotsArray,

	(slotsPerHour, timeLabelsPerHour, slotsArray) => {
		const every = slotsPerHour / timeLabelsPerHour

		const filteredSlots = everyNFromArray(slotsArray, every)

		return filteredSlots
	}
)
