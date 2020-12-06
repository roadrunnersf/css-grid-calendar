import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

import TimeBlock from 'CalendarPage/TimeBlock'
import {
	selectTimeBlocksArray,
	selectDatesShown,
} from 'CalendarPage/store/selectors'

const TimeBlocks: React.FC = () => {
	const timeBlocksArray = useSelector(selectTimeBlocksArray)
	const datesShown = useSelector(selectDatesShown)

	return (
		<>
			{datesShown.map(date => (
				<Fragment key={date}>
					{timeBlocksArray.map(timeOnDate => (
						<TimeBlock
							key={timeOnDate}
							start={timeOnDate}
							date={date}
						/>
					))}
				</Fragment>
			))}
		</>
	)
}

export default TimeBlocks
