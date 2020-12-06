import React from 'react'
import styled from '@emotion/styled'
import { Typography } from '@material-ui/core'
import dayjs from 'dayjs'

import { formats, endRowLine } from 'CalendarPage/config'
import {
	gridColumnLinesFromDate,
	roundDateToNMinutes,
} from 'CalendarPage/utils'

type CellProps = {
	startCol: string
	endCol: string
	startRow: string
	endRow: string
}

const Cell = styled.div<CellProps>`
	grid-column: ${p => `${p.startCol} / ${p.endCol}`};
	grid-row: ${p => `${p.startRow} / ${p.endRow}`};
	height: 100%;
	width: 100%;
	background-color: ${p => p.theme.primary};
	color: ${p => p.theme.text};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	opacity: 0.85;
`

type EventProps = {
	event: {
		start: string
		end: string
		title: string
	}
}

const Event: React.FC<EventProps> = ({ event: { start, end, title } }) => {
	const startRow = dayjs(roundDateToNMinutes(start)).format(
		formats.cssGridTime
	)
	const provisionalEnd = dayjs(roundDateToNMinutes(end)).format(
		formats.cssGridTime
	)

	const endRow = provisionalEnd === '_00_00' ? endRowLine : provisionalEnd

	const { startCol, endCol } = gridColumnLinesFromDate(start)

	const timeDisplayed = `${dayjs(start).format(formats.time)} - ${dayjs(
		end
	).format(formats.time)}`

	return (
		<Cell
			startCol={startCol}
			endCol={endCol}
			startRow={startRow}
			endRow={endRow}
		>
			<Typography>{title}</Typography>
			<Typography>{timeDisplayed}</Typography>
		</Cell>
	)
}

export default Event
