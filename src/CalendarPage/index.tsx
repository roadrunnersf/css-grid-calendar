import React from 'react'
import { useSelector } from 'react-redux'
import styled from '@emotion/styled'
import dayjs, { Dayjs } from 'dayjs'

import TimeLabel from 'CalendarPage/TimeLabel'
import TimeBlocks from 'CalendarPage/TimeBlocks'
import Event from 'CalendarPage/Event'
import HeadRow from 'CalendarPage/HeadRow'
import { formats, cssGridTimeFormat, dates } from 'CalendarPage/config'
import { generateGridTemplateColumns } from 'CalendarPage/utils'
import {
	selectTimeLabelsArray,
	selectSlotGridTemplateRows,
} from './store/selectors'

type ContainerProps = {
	slotGridTemplateRows: string
}

const Container = styled.div<ContainerProps>`
	display: grid;
	grid-template-columns: ${generateGridTemplateColumns(dates)};
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
	start: Dayjs
	end: Dayjs
	title: string
}
type EventsList = EventObj[]

const events: EventsList = [
	{
		start: dayjs('2020-11-22 00:52'),
		end: dayjs('2020-11-22 03:00'),
		title: 'Sleeping',
	},
	{
		start: dayjs('2020-11-22 08:15'),
		end: dayjs('2020-11-22 17:45'),
		title: 'Working',
	},
	{
		start: dayjs('2020-11-25 09:00'),
		end: dayjs('2020-11-25 17:00'),
		title: 'Working',
	},
	{
		start: dayjs('2020-11-26 09:00'),
		end: dayjs('2020-11-25 17:00'),
		title: 'Working',
	},
	{
		start: dayjs('2020-11-27 09:00'),
		end: dayjs('2020-11-25 17:00'),
		title: 'Working',
	},
]

const CalendarPage: React.FC = () => {
	const timeLabelsArray = useSelector(selectTimeLabelsArray)
	const slotGridTemplateRows = useSelector(selectSlotGridTemplateRows)

	return (
		<>
			<div>
				<h1>CSS Grid Calendar</h1>
			</div>
			<Container slotGridTemplateRows={slotGridTemplateRows}>
				<HeadRow />
				<TimeBlocks />
				{timeLabelsArray.map(dayObj => (
					<TimeLabel
						key={dayObj.format(cssGridTimeFormat)}
						start={dayObj}
					/>
				))}
				{events.map(event => (
					<Event
						key={event.start.format(formats.isoShort)}
						event={event}
					/>
				))}
			</Container>
		</>
	)
}

export default CalendarPage
