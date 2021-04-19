import React from 'react'
import { useSelector } from 'react-redux'
import styled from '@emotion/styled'
import { Typography } from '@material-ui/core'

import Pagination from 'CalendarPage/components/Pagination'
import TimeLabel from 'CalendarPage/components/TimeLabel'
import TimeBlocks from 'CalendarPage/components/TimeBlocks'
import Event from 'CalendarPage/components/Event'
import HeadRow from 'CalendarPage/components/HeadRow'
import { generateGridTemplateColumns } from 'CalendarPage/utils'
import {
	selectTimeLabelsArray,
	selectSlotGridTemplateRows,
	selectDatesShown,
	selectEventsShown,
} from 'CalendarPage/store/selectors'
import { lines } from 'CalendarPage/config'

type ContainerProps = {
	datesShown: string[]
	slotGridTemplateRows: string
}

const Container = styled.div<ContainerProps>`
	display: grid;
	grid-template-columns: ${p => generateGridTemplateColumns(p.datesShown)};
	grid-template-rows: ${p =>
		`[${lines.rows.head.start}] auto [${lines.rows.head.end} ${p.slotGridTemplateRows}`};
	height: 750px;
	width: 1200px;
	background-color: ${p => p.theme.background};
	margin-bottom: 16px;
`

const CalendarPage: React.FC = () => {
	const timeLabelsArray = useSelector(selectTimeLabelsArray)
	const slotGridTemplateRows = useSelector(selectSlotGridTemplateRows)

	const datesShown = useSelector(selectDatesShown)

	const eventsShown = useSelector(selectEventsShown)

	return (
		<>
			<div>
				<Typography variant="h4" component="h1">
					CSS Grid Calendar
				</Typography>
			</div>
			<Pagination />
			<Container
				datesShown={datesShown}
				slotGridTemplateRows={slotGridTemplateRows}
			>
				<HeadRow />
				<TimeBlocks />
				{timeLabelsArray.map(date => (
					<TimeLabel key={date} start={date} />
				))}
				{eventsShown.map(event => (
					<Event key={event.id} event={event} />
				))}
			</Container>
		</>
	)
}

export default CalendarPage
