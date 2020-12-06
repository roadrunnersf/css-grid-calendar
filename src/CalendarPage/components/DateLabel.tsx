import React from 'react'
import styled from '@emotion/styled'
import dayjs from 'dayjs'
import { Typography } from '@material-ui/core'

import { gridColumnLinesFromDate } from 'CalendarPage/utils'

type CellProps = {
	date: string
	isToday: boolean
}

const Cell = styled.div<CellProps>`
	grid-column: ${p => {
		const { startLine, endLine } = gridColumnLinesFromDate(p.date)

		return `${startLine} / ${endLine}`
	}};
	grid-row: headrow-start / headrow-end;
	height: 100%;
	width: 100%;
	background-color: ${p => (p.isToday ? p.theme.primary : p.theme.secondary)};
	color: ${p => (p.isToday ? 'white' : 'inherit')};
	border: 1px solid ${p => p.theme.tertiary};
	border-top: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
`
type DateLabelProps = { date: string }

const DateLabel: React.FC<DateLabelProps> = ({ date }) => {
	const dateObj = dayjs(date)

	const isToday = dateObj.isSame(dayjs(), 'day')

	return (
		<Cell date={date} isToday={isToday}>
			<Typography variant="body1" component="span">
				{dateObj.format('dddd')}
			</Typography>
			<Typography variant="h5" component="span">
				{dateObj.format('D') === '1'
					? `${dateObj.format('D')} ${dateObj.format('MMM')}`
					: dateObj.format('D')}
			</Typography>
		</Cell>
	)
}

export default DateLabel
