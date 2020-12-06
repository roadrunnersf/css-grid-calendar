import React from 'react'
import styled from '@emotion/styled'

import DateLabel from 'CalendarPage/DateLabel'
import { dates, formats } from 'CalendarPage/config'

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
	return (
		<>
			<EmptyCell />
			{dates.map(date => (
				<DateLabel
					key={date.format(formats.standardDate)}
					date={date}
				/>
			))}
		</>
	)
}

export default HeadRow
