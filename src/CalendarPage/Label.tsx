import React from 'react'
import styled from '@emotion/styled'
import { Dayjs } from 'dayjs'

import { cssGridTimeFormat, endRowLine } from 'CalendarPage/constants'

type CellProps = {
	start: string
	end: string
}

const Cell = styled.div<CellProps>`
	grid-column: label-start / label-end;
	grid-row: ${p => `${p.start} / ${p.end}`};
	height: 100%;
	width: 100%;
	background-color: mintcream;
	border: 1px solid mediumturquoise;
	display: flex;
	align-items: flex-start;
	font-size: 14px;
`

type LabelProps = { start: Dayjs }

const Label: React.FC<LabelProps> = ({ start }) => {
	const startRow = start.format(cssGridTimeFormat)
	const provisionalEnd = start.add(1, 'hour').format(cssGridTimeFormat)

	const endRow = provisionalEnd === '_00_00' ? endRowLine : provisionalEnd

	return (
		<Cell start={startRow} end={endRow}>
			{start.format('ha')}
		</Cell>
	)
}

export default Label
