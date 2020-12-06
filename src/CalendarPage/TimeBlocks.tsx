import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

import { dates } from 'CalendarPage/config'
import TimeBlock from 'CalendarPage/TimeBlock'
import { selectTimeBlocksArray } from 'CalendarPage/store/selectors'

const TimeBlocks: React.FC = () => {
	const timeBlocksArray = useSelector(selectTimeBlocksArray)

	return (
		<>
			{dates.map(date => (
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
