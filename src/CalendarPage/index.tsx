import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import dayjs, { Dayjs } from 'dayjs'

import Label from 'CalendarPage/Label'
import TimeBlock from 'CalendarPage/TimeBlock'
import Event from 'CalendarPage/Event'
import { formats, config, endRowLine } from 'CalendarPage/constants'

const { slotsArray, labelTimes } = config

const gridTemplateRows = `${labelTimes.join(' ')} [${endRowLine}]`

const Container = styled.div`
	display: grid;
	grid-template-columns: [label-start] 100px [label-end cell-start] 1fr [cell-end];
	grid-template-rows: ${gridTemplateRows};
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
		start: dayjs('2020-01-01 01:00'),
		end: dayjs('2020-01-01 03:00'),
		title: 'Sleeping',
	},
	{
		start: dayjs('2020-01-01 08:00'),
		end: dayjs('2020-01-01 17:00'),
		title: 'Working',
	},
]

const CalendarPage: React.FC = () => (
	<>
		<div>
			<h1>CSS Grid Calendar</h1>
		</div>
		<Container>
			{slotsArray.map(dayObj => (
				<Fragment key={dayObj.format('ha')}>
					<Label start={dayObj} />
					<TimeBlock start={dayObj} />
				</Fragment>
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
