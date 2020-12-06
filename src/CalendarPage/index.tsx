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

type EventObj = {
	start: string
	end: string
	title: string
}
type EventsList = EventObj[]

const events: EventsList = [
	{
		start: '2020-11-22 00:52',
		end: '2020-11-22 03:00',
		title: 'Sleeping',
	},
	{
		start: '2020-11-22 08:15',
		end: '2020-11-22 17:45',
		title: 'Working',
	},
	{
		start: '2020-11-25 09:00',
		end: '2020-11-25 17:00',
		title: 'Working',
	},
	{
		start: '2020-11-26 09:00',
		end: '2020-11-26 17:00',
		title: 'Working',
	},
	{
		start: '2020-11-27 09:00',
		end: '2020-11-27 17:00',
		title: 'Working',
	},
	// {
	// 	start: '2022-11-27 09:00',
	// 	end: '2020-11-25 17:00',
	// 	title: 'Working',
	// },
]

const CalendarPage: React.FC = () => {
	const timeLabelsArray = useSelector(selectTimeLabelsArray)
	const slotGridTemplateRows = useSelector(selectSlotGridTemplateRows)

	const datesShown = useSelector(selectDatesShown)

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
