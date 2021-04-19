import React from 'react'
import dayjs from 'dayjs'
import { screen } from '@testing-library/react'

import TimeLabel from './TimeLabel'
import { renderWithMockStore } from 'utils/testing'

it('works', () => {
	const mockStore = {
		calendar: {
			timeLabelsPerHour: 1,
		},
	}

	renderWithMockStore(
		<TimeLabel start={dayjs('2021-01-01T13:00:00').toISOString()} />,
		{ mockStore }
	)

	expect(screen.getByText('1pm')).toBeInTheDocument()
})
