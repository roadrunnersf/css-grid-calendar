import { createSlice } from '@reduxjs/toolkit'

export type CalendarState = {
	hoursPerDay: number
	slotsPerHour: 12
	timeBlocksPerHour: 0.25 | 0.5 | 1 | 2 | 4
	timeLabelsPerHour: 0.25 | 0.5 | 1

	startDate: string
}

const initialState: CalendarState = {
	hoursPerDay: 24,
	slotsPerHour: 12,
	timeBlocksPerHour: 2,
	timeLabelsPerHour: 1,

	startDate: '2020-11-22',
}

const calendarSlice = createSlice({
	name: 'calendar',
	initialState,
	reducers: {},
})

export const { reducer: calendarReducer } = calendarSlice

export default calendarSlice
