import { configureStore } from '@reduxjs/toolkit'
import {
	calendarReducer,
	CalendarState,
} from 'CalendarPage/store/calendarSlice'

declare global {
	type State = {
		calendar: CalendarState
	}
}

const store = configureStore({
	reducer: {
		calendar: calendarReducer,
	},
})

export default store
