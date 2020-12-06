import { createSlice } from '@reduxjs/toolkit'
import { mockEvents } from './mockEvents'

type Event = {
	start: string
	end: string
	title: string
}
export type Events = Event[]

export type CalendarState = {
	hoursPerDay: number
	slotsPerHour: 12
	timeBlocksPerHour: 0.25 | 0.5 | 1 | 2 | 4
	timeLabelsPerHour: 0.25 | 0.5 | 1

	startDate: string
	numberOfDaysToShow: number
	events: Events
}

const initialState: CalendarState = {
	hoursPerDay: 24,
	slotsPerHour: 12,
	timeBlocksPerHour: 2,
	timeLabelsPerHour: 1,

	startDate: '2020-11-22',
	numberOfDaysToShow: 7,
	events: mockEvents,
}

const calendarSlice = createSlice({
	name: 'calendar',
	initialState,
	reducers: {},
})

export const { reducer: calendarReducer } = calendarSlice

export default calendarSlice
