import React from 'react'
import { useSelector } from 'react-redux'
import styled from '@emotion/styled'

import DateLabel from 'CalendarPage/components/DateLabel'
import { selectDatesShown } from 'CalendarPage/store/selectors'

import { lines } from 'CalendarPage/config'

const EmptyCell = styled.div`
	grid-column: ${lines.cols.labels.start} / ${lines.cols.labels.end};
	grid-row: ${lines.rows.head.start} / ${lines.rows.head.end};
	height: 100%;
	width: 100%;
	background-color: ${p => p.theme.secondary};
	border: 1px solid ${p => p.theme.tertiary};
	border-top: none;
`

const HeadRow: React.FC = () => {
	const datesShown = useSelector(selectDatesShown)

	return (
		<>
			<EmptyCell />
			{datesShown.map(date => (
				<DateLabel key={date} date={date} />
			))}
		</>
	)
}

export default HeadRow
