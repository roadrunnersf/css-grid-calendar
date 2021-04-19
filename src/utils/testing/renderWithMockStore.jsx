import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const renderWithMockStore = (ui, options) => {
	const { mockStore, rtlOptions } = options

	return render(
		<Provider store={createStore(() => mockStore)}>{ui}</Provider>,
		rtlOptions
	)
}

export default renderWithMockStore
