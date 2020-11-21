import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import dayjs from 'dayjs'

import Label from 'CalendarPage/Label'
import {
	cssGridTimeFormat,
	dayConsts,
	endRowLine,
} from 'CalendarPage/constants'
import TimeBlock from './TimeBlock'

const date = dayjs('2020-01-01')

const timesArray = [...Array(dayConsts.hours)].map((e, i) =>
	date.add(i, 'hours')
)

const timesForGrid = timesArray.map(timeObj => {
	const formattedHour = timeObj.format(cssGridTimeFormat)

	return `[${formattedHour}] 1fr`
})

const gridTemplateRows = `${timesForGrid.join(' ')} [${endRowLine}]`

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

const TestShift = styled.div`
	grid-column: cell-start / cell-end;
	grid-row: _07_00 / _23_00;
	height: 100%;
	width: 100%;
	background-color: lightcoral;
	opacity: 0.5;
`

const CalendarPage = () => (
	<>
		<div>
			<h1>CSS Grid Calendar</h1>
		</div>
		<Container>
			{/* <Label start={date.add(1, 'hours')} end={date.add(2, 'hours')} /> */}
			{timesArray.map(dayObj => (
				<Fragment key={dayObj.format('ha')}>
					<Label start={dayObj} />
					<TimeBlock start={dayObj} />
				</Fragment>
			))}
			<TestShift />
		</Container>
	</>
)

export default CalendarPage
