import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import styled from '@emotion/styled'
import dayjs from 'dayjs'

import {
	selectTimeBlocksArray,
	selectDatesShown,
	selectEndDate,
	selectTimeBlocksPerHour,
} from 'CalendarPage/store/selectors'
import { formats, lines } from 'CalendarPage/config'
import { gridColumnLinesFromDate } from 'CalendarPage/utils'

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
	border: 1px solid ${p => p.theme.tertiary};
	border-top: none;
	display: flex;
	align-items: flex-start;
	font-size: 14px;
`

const TimeBlocks: React.FC = () => {
	const timeBlocksArray = useSelector(selectTimeBlocksArray)
	const timeBlocksPerHour = useSelector(selectTimeBlocksPerHour)

	const datesShown = useSelector(selectDatesShown)

	const startCol = 'labels-end'

	const endDate = useSelector(selectEndDate)
	const underscoreDate = dayjs(endDate).format(formats.cssGridDate)
	const endCol = `${underscoreDate}_end`

	return (
		<>
			{timeBlocksArray.map(start => {
				const startRow = dayjs(start).format(formats.cssGridTime)
				const provisionalEnd = dayjs(start)
					.add(1 / timeBlocksPerHour, 'hour')
					.format(formats.cssGridTime)

				const endRow =
					provisionalEnd === '_00_00'
						? lines.rows.end
						: provisionalEnd

				return (
					<Cell
						key={start}
						startCol={startCol}
						endCol={endCol}
						startRow={startRow}
						endRow={endRow}
					/>
				)
			})}
			{datesShown.map(date => {
				const { startCol, endCol } = gridColumnLinesFromDate(date)

				return (
					<Cell
						key={date}
						startCol={startCol}
						endCol={endCol}
						startRow={lines.rows.head.end}
						endRow={lines.rows.end}
					/>
				)
			})}
		</>
	)
}

export default TimeBlocks
