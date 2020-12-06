import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs'

import { mockEvents } from './mockEvents'

type Event = {
	id: number | string
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

	startDate: dayjs().startOf('week').toISOString(),
	numberOfDaysToShow: 7,
	events: mockEvents,
}

const calendarSlice = createSlice({
	name: 'calendar',
	initialState,
	reducers: {
		paginateBack(state) {
			state.startDate = dayjs(state.startDate)
				.subtract(state.numberOfDaysToShow, 'day')
				.toISOString()
		},
		paginateForward(state) {
			state.startDate = dayjs(state.startDate)
				.add(state.numberOfDaysToShow, 'day')
				.toISOString()
		},
		paginateToToday(state) {
			state.startDate = dayjs().startOf('week').toISOString()
		},
	},
})

export const {
	reducer: calendarReducer,
	actions: { paginateBack, paginateForward, paginateToToday },
} = calendarSlice

export default calendarSlice
