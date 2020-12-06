import React, { Fragment } from 'react'

import { config, dates, formats } from 'CalendarPage/config'
import TimeBlock from 'CalendarPage/TimeBlock'

const { timeBlocksArray } = config

const TimeBlocks: React.FC = () => {
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
