import {
	selectCalendar,
	selectStartDate,
	selectHoursPerDay,
	selectSlotsPerHour,
	selectTimeBlocksPerHour,
	selectTimeLabelsPerHour,
	selectSlotsArray,
	selectTimeBlocksArray,
	selectTimeLabelsArray,
	selectSlotTimes,
	selectSlotGridTemplateRows,
} from './selectors'

describe('CalendarPage Selectors', () => {
	const state: State = {
		calendar: {
			hoursPerDay: 24,
			slotsPerHour: 12,
			timeBlocksPerHour: 2,
			timeLabelsPerHour: 1,

			startDate: '2020-11-22',
		},
	}

	it('selectCalendar', () => {
		expect(selectCalendar(state)).toBe(state.calendar)
	})
	it('selectStartDate', () => {
		expect(selectStartDate(state)).toBe(selectCalendar(state).startDate)
	})
	it('selectHoursPerDay', () => {
		expect(selectHoursPerDay(state)).toBe(selectCalendar(state).hoursPerDay)
	})
	it('selectSlotsPerHour', () => {
		expect(selectSlotsPerHour(state)).toBe(
			selectCalendar(state).slotsPerHour
		)
	})
	it('selectTimeBlocksPerHour', () => {
		expect(selectTimeBlocksPerHour(state)).toBe(
			selectCalendar(state).timeBlocksPerHour
		)
	})
	it('selectTimeLabelsPerHour', () => {
		expect(selectTimeLabelsPerHour(state)).toBe(
			selectCalendar(state).timeLabelsPerHour
		)
	})
})
