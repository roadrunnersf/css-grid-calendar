import React from 'react'
import dayjs from 'dayjs'
import { render, screen } from '@testing-library/react'

import Event from './Event'

it('works', () => {
	render(
		<Event
			event={{
				start: dayjs('2021-01-01T13:00:00').toISOString(),
				end: dayjs('2021-01-01T15:00:00').toISOString(),
				title: 'At the park',
			}}
		/>
	)

	expect(screen.getByText('At the park')).toBeInTheDocument()
	expect(screen.getByText('13:00 - 15:00')).toBeInTheDocument()
})
