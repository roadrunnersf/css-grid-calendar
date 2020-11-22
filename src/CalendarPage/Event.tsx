import React from 'react'
import styled from '@emotion/styled'
import { Dayjs } from 'dayjs'

import { formats, endRowLine } from 'CalendarPage/config'
import { roundDateToNMinutes } from './utils'

type CellProps = {
	start: string
	end: string
}

const Cell = styled.div<CellProps>`
	grid-column: cell-start / cell-end;
	grid-row: ${p => `${p.start} / ${p.end}`};
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
		<Cell start={startRow} end={endRow}>
			{title}
			<br />
			{timeDisplayed}
		</Cell>
	)
}

export default Event
