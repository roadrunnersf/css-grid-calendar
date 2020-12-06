import React from 'react'
import styled from '@emotion/styled'
import dayjs from 'dayjs'

import { P } from 'elements'
import { gridColumnLinesFromDate } from 'CalendarPage/utils'

type CellProps = {
	date: string
}

const Cell = styled.div<CellProps>`
	grid-column: ${p => {
		const { startLine, endLine } = gridColumnLinesFromDate(p.date)

		return `${startLine} / ${endLine}`
	}};
	grid-row: headrow-start / headrow-end;
	height: 100%;
	width: 100%;
	background-color: ${p => p.theme.secondary};
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
	return (
		<Cell date={date}>
			<P>{dayjs(date).format('dddd')}</P>
			<P large>{dayjs(date).format('D')}</P>
		</Cell>
	)
}

export default DateLabel
