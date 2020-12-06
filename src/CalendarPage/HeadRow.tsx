import React from 'react'
import { useSelector } from 'react-redux'
import styled from '@emotion/styled'

import DateLabel from 'CalendarPage/DateLabel'
import { selectDatesShown } from 'CalendarPage/store/selectors'

const EmptyCell = styled.div`
	grid-column: labels-start / labels-end;
	grid-row: headrow-start / headrow-end;
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
