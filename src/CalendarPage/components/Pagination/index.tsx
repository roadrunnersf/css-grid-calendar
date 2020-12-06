import React from 'react'
import styled from '@emotion/styled/'
import dayjs from 'dayjs'

import { Button, IconButton, Typography } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

import { useDispatch, useSelector } from 'react-redux'
import {
	paginateBack,
	paginateForward,
	paginateToToday,
} from 'CalendarPage/store/calendarSlice'
import {
	selectStartDate,
	selectEndDate,
	selectDoesCalendarIncludeToday,
} from 'CalendarPage/store/selectors'
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
	align-items: center;
	margin-bottom: 8px;
`

const DateText = styled(Typography)`
	margin-left: 8px;
	margin-right: 8px;
`

const ukFormatDate = (date: string) => dayjs(date).format(formats.ukDate)

const Pagination: React.FC = () => {
	const dispatch = useDispatch()

	const startDate = useSelector(selectStartDate)
	const endDate = useSelector(selectEndDate)

	const doesCalendarIncludeToday = useSelector(selectDoesCalendarIncludeToday)

	return (
		<Container>
			<Button
				variant="outlined"
				onClick={() => {
					dispatch(paginateToToday())
				}}
				disabled={doesCalendarIncludeToday}
				style={{
					marginTop: 8,
					marginBottom: 8,
				}}
			>
				Today
			</Button>

			<Paginate>
				<IconButton
					onClick={() => {
						dispatch(paginateBack())
					}}
					title="back"
				>
					<ArrowBackIcon />
				</IconButton>

				<DateText variant="body1">{`${ukFormatDate(
					startDate
				)} - ${ukFormatDate(endDate)}`}</DateText>

				<IconButton
					onClick={() => {
						dispatch(paginateForward())
					}}
					title="forward"
				>
					<ArrowForwardIcon />
				</IconButton>
			</Paginate>
		</Container>
	)
}

export default Pagination
