import { generateGridTemplateColumns } from './'

describe('generateGridTemplateColumns', () => {
	it('works with one date', () => {
		const dates = ['2020-11-22']

		expect(generateGridTemplateColumns(dates)).toBe(
			'[labels-start] 100px [labels-end _2020_11_22_start ] minmax(0, 1fr) [ _2020_11_22_end ]'
		)
	})
	it('works with three dates', () => {
		const dates = ['2020-11-22', '2020-11-23', '2020-11-24']

		expect(generateGridTemplateColumns(dates)).toBe(
			'[labels-start] 100px [labels-end _2020_11_22_start ] minmax(0, 1fr) [ _2020_11_22_end _2020_11_23_start ] minmax(0, 1fr) [ _2020_11_23_end _2020_11_24_start ] minmax(0, 1fr) [ _2020_11_24_end ]'
		)
	})
})
