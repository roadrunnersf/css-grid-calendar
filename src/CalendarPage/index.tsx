import React from 'react'
import styled from '@emotion/styled'
import dayjs, { Dayjs } from 'dayjs'

import TimeLabel from 'CalendarPage/TimeLabel'
import TimeBlock from 'CalendarPage/TimeBlock'
import Event from 'CalendarPage/Event'
import { formats, config, cssGridTimeFormat } from 'CalendarPage/constants'

const { timeBlocksArray, timeLabelsArray, timeLabelGridTemplateRows } = config

const Container = styled.div`
	display: grid;
	grid-template-columns: [timeLabel-start] 100px [timeLabel-end cell-start] 1fr [cell-end];
	grid-template-rows: ${timeLabelGridTemplateRows};
	height: 800px;
	width: 500px;
	background-color: aliceblue;
	border: 1px solid black;
	border-radius: 4px;
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
		start: dayjs('2020-01-01 00:52'),
		end: dayjs('2020-01-01 03:00'),
		title: 'Sleeping',
	},
	{
		start: dayjs('2020-01-01 08:15'),
		end: dayjs('2020-01-01 17:45'),
		title: 'Working',
	},
	{
		start: dayjs('2020-01-01 23:00'),
		end: dayjs('2020-01-01 23:59'),
		title: 'Working',
	},
]

const CalendarPage: React.FC = () => (
	<>
		<div>
			<h1>CSS Grid Calendar</h1>
		</div>
		<Container>
			{timeBlocksArray.map(dayObj => (
				<TimeBlock
					key={dayObj.format(cssGridTimeFormat)}
					start={dayObj}
				/>
			))}
			{timeLabelsArray.map(dayObj => (
				<TimeLabel
					key={dayObj.format(cssGridTimeFormat)}
					start={dayObj}
				/>
			))}
			{events.map(event => (
				<Event
					key={event.start.format(formats.cssGridTime)}
					event={event}
				/>
			))}
		</Container>
	</>
)

export default CalendarPage
