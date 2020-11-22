import React from 'react'
import styled from '@emotion/styled'
import { Dayjs } from 'dayjs'

import { formats, endRowLine, config } from 'CalendarPage/config'
import { gridColumnLinesFromDate } from 'CalendarPage/utils'

type CellProps = {
	start: string
	end: string
	date: Dayjs
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

type TimeBlockProps = { start: Dayjs; date: Dayjs }

const TimeBlock: React.FC<TimeBlockProps> = ({ start, date }) => {
	const startRow = start.format(formats.cssGridTime)
	const provisionalEnd = start
		.add(1 / config.timeBlocksPerHour, 'hour')
		.format(formats.cssGridTime)

	const endRow = provisionalEnd === '_00_00' ? endRowLine : provisionalEnd

	return <Cell date={date} start={startRow} end={endRow} />
}

export default TimeBlock
