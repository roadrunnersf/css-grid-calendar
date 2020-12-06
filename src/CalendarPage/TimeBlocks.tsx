import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

import { dates, formats } from 'CalendarPage/config'
import TimeBlock from 'CalendarPage/TimeBlock'
import { selectTimeBlocksArray } from 'CalendarPage/store/selectors'

const TimeBlocks: React.FC = () => {
	const timeBlocksArray = useSelector(selectTimeBlocksArray)

	return (
		<>
			{dates.map(date => (
				<Fragment key={date.format('YYYY-MM-DD')}>
					{timeBlocksArray.map(dayObj => (
						<TimeBlock
							key={dayObj.format(formats.cssGridTime)}
							start={dayObj}
							date={date}
						/>
					))}
				</Fragment>
			))}
		</>
	)
}

export default TimeBlocks
