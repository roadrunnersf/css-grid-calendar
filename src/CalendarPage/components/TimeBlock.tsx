import React from 'react'
import { useSelector } from 'react-redux'
import styled from '@emotion/styled'
import dayjs from 'dayjs'

import { selectTimeBlocksPerHour } from 'CalendarPage/store/selectors'
import { formats, endRowLine } from 'CalendarPage/config'
import { gridColumnLinesFromDate } from 'CalendarPage/utils'

type CellProps = {
	start: string
	end: string
	date: string
}

const Cell = styled.div<CellProps>`
	grid-column: ${p => {
		const { startLine, endLine } = gridColumnLinesFromDate(p.date)

		return `${startLine} / ${endLine}`
	}};
	grid-row: ${p => `${p.start} / ${p.end}`};
	height: 100%;
	width: 100%;
	background-color: ${p => p.theme.background};
	border: 1px solid ${p => p.theme.tertiary};
	border-top: none;
	display: flex;
	align-items: flex-start;
	font-size: 14px;
`

type TimeBlockProps = { start: string; date: string }

const TimeBlock: React.FC<TimeBlockProps> = ({ start, date }) => {
	const timeBlocksPerHour = useSelector(selectTimeBlocksPerHour)

	const startRow = dayjs(start).format(formats.cssGridTime)
	const provisionalEnd = dayjs(start)
		.add(1 / timeBlocksPerHour, 'hour')
		.format(formats.cssGridTime)

	const endRow = provisionalEnd === '_00_00' ? endRowLine : provisionalEnd

	return <Cell date={date} start={startRow} end={endRow} />
}

export default TimeBlock
