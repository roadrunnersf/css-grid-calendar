import React from 'react'
import styled from '@emotion/styled/'
import dayjs from 'dayjs'

import { useDispatch, useSelector } from 'react-redux'
import {
	paginateBack,
	paginateForward,
	paginateToToday,
} from 'CalendarPage/store/calendarSlice'
import { selectStartDate, selectEndDate } from 'CalendarPage/store/selectors'
import { formats } from 'CalendarPage/config'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 8px;
`
const Paginate = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 16px;
`

const ukFormatDate = (date: string) => dayjs(date).format(formats.ukDate)

const Pagination: React.FC = () => {
	const dispatch = useDispatch()

	const startDate = useSelector(selectStartDate)
	const endDate = useSelector(selectEndDate)

	return (
		<Container>
			<button
				onClick={() => {
					dispatch(paginateToToday())
				}}
				style={{
					marginBottom: 8,
				}}
			>
				today
			</button>

			<Paginate>
				<button
					onClick={() => {
						dispatch(paginateBack())
					}}
				>
					back
				</button>
				<p>{`${ukFormatDate(startDate)} - ${ukFormatDate(endDate)}`}</p>
				<button
					onClick={() => {
						dispatch(paginateForward())
					}}
				>
					forward
				</button>
			</Paginate>
		</Container>
	)
}

export default Pagination
