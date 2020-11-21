import React from 'react'
import styled from '@emotion/styled'
import { cssGridTimeFormat, endRowLine } from 'CalendarPage/constants'

const Cell = styled.div`
	grid-column: cell-start / cell-end;
	grid-row: ${p => `${p.start} / ${p.end}`};
	height: 100%;
	width: 100%;
	background-color: oldlace;
	border: 1px solid moccasin;
	display: flex;
	align-items: flex-start;
	font-size: 14px;
`

const TimeBlock = ({ start }) => {
	const startRow = start.format(cssGridTimeFormat)
	const provisionalEnd = start.add(1, 'hour').format(cssGridTimeFormat)

	const endRow = provisionalEnd === '_00_00' ? endRowLine : provisionalEnd

	return <Cell start={startRow} end={endRow} />
}

export default TimeBlock
