import React from 'react'
import styled from '@emotion/styled'
import { Dayjs } from 'dayjs'

import { formats, endRowLine, config } from 'CalendarPage/config'

type CellProps = {
	start: string
	end: string
}

const Cell = styled.div<CellProps>`
	grid-column: timeLabel-start / timeLabel-end;
	grid-row: ${p => `${p.start} / ${p.end}`};
	height: 100%;
	width: 100%;
	background-color: ${p => p.theme.secondary};
	border: 1px solid ${p => p.theme.tertiary};
	border-top: none;
	display: flex;
	align-items: flex-start;
	justify-content: flex-end;
	padding: 4px;
	font-size: 14px;
`

type TimeLabelProps = { start: Dayjs }

const TimeLabel: React.FC<TimeLabelProps> = ({ start }) => {
	const startRow = start.format(formats.cssGridTime)
	const provisionalEnd = start
		.add(1 / config.timeLabelsPerHour, 'hour')
		.format(formats.cssGridTime)

	const endRow = provisionalEnd === '_00_00' ? endRowLine : provisionalEnd

	return (
		<Cell start={startRow} end={endRow}>
			{start.format('ha')}
		</Cell>
	)
}

export default TimeLabel
