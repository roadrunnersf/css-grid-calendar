import React from 'react'
import { useSelector } from 'react-redux'
import styled from '@emotion/styled'
import { Dayjs } from 'dayjs'

import { formats, endRowLine } from 'CalendarPage/config'
import { selectTimeLabelsPerHour } from './store/selectors'

type CellProps = {
	start: string
	end: string
}

const Cell = styled.div<CellProps>`
	grid-column: labels-start / labels-end;
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
	padding-right: 12px;
	font-size: 14px;
`

type TimeLabelProps = { start: Dayjs }

const TimeLabel: React.FC<TimeLabelProps> = ({ start }) => {
	const timeLabelsPerHour = useSelector(selectTimeLabelsPerHour)

	const startRow = start.format(formats.cssGridTime)
	const provisionalEnd = start
		.add(1 / timeLabelsPerHour, 'hour')
		.format(formats.cssGridTime)

	const endRow = provisionalEnd === '_00_00' ? endRowLine : provisionalEnd

	return (
		<Cell start={startRow} end={endRow}>
			{start.format('ha')}
		</Cell>
	)
}

export default TimeLabel
