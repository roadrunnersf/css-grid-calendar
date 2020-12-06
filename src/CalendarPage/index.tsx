import React from 'react'
import { useSelector } from 'react-redux'
import styled from '@emotion/styled'

import TimeLabel from 'CalendarPage/TimeLabel'
import TimeBlocks from 'CalendarPage/TimeBlocks'
import Event from 'CalendarPage/Event'
import HeadRow from 'CalendarPage/HeadRow'
import { generateGridTemplateColumns } from 'CalendarPage/utils'
import {
	selectTimeLabelsArray,
	selectSlotGridTemplateRows,
	selectDatesShown,
	selectEvents,
} from 'CalendarPage/store/selectors'

type ContainerProps = {
	datesShown: string[]
	slotGridTemplateRows: string
}

const Container = styled.div<ContainerProps>`
	display: grid;
	grid-template-columns: ${p => generateGridTemplateColumns(p.datesShown)};
	grid-template-rows: ${p =>
		`[headrow-start] auto [headrow-end ${p.slotGridTemplateRows}`};
	height: 800px;
	width: 1200px;
	background-color: aliceblue;
	&:hover {
		background-color: azure;
	}
`

const CalendarPage: React.FC = () => {
	const timeLabelsArray = useSelector(selectTimeLabelsArray)
	const slotGridTemplateRows = useSelector(selectSlotGridTemplateRows)

	const datesShown = useSelector(selectDatesShown)

	const events = useSelector(selectEvents)

	return (
		<>
			<div>
				<h1>CSS Grid Calendar</h1>
			</div>
			<Container
				datesShown={datesShown}
				slotGridTemplateRows={slotGridTemplateRows}
			>
				<HeadRow />
				<TimeBlocks />
				{timeLabelsArray.map(date => (
					<TimeLabel key={date} start={date} />
				))}
				{events.map(event => (
					<Event key={event.start} event={event} />
				))}
			</Container>
		</>
	)
}

export default CalendarPage
