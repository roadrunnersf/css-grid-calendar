import React from 'react'
import styled from '@emotion/styled'
import { Dayjs } from 'dayjs'

import { formats, endRowLine } from 'CalendarPage/config'
import {
	gridColumnLinesFromDate,
	roundDateToNMinutes,
} from 'CalendarPage/utils'

type CellProps = {
	start: Dayjs
	startRow: string
	endRow: string
}

const Cell = styled.div<CellProps>`
	grid-column: ${p => {
		const { startLine, endLine } = gridColumnLinesFromDate(p.start)

		return `${startLine} / ${endLine}`
	}};
	grid-row: ${p => `${p.startRow} / ${p.endRow}`};
	height: 100%;
	width: 100%;
	background-color: ${p => p.theme.primary};
	color: ${p => p.theme.text};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	font-size: 14px;
	opacity: 0.85;
`

type EventProps = {
	event: {
		start: Dayjs
		end: Dayjs
		title: string
	}
}

const Event: React.FC<EventProps> = ({ event: { start, end, title } }) => {
	const startRow = roundDateToNMinutes(start).format(formats.cssGridTime)
	const provisionalEnd = roundDateToNMinutes(end).format(formats.cssGridTime)

	const endRow = provisionalEnd === '_00_00' ? endRowLine : provisionalEnd

	const timeDisplayed = `${start.format(formats.time)} - ${end.format(
		formats.time
	)}`

	return (
		<Cell start={start} startRow={startRow} endRow={endRow}>
			{title}
			<br />
			{timeDisplayed}
		</Cell>
	)
}

export default Event
