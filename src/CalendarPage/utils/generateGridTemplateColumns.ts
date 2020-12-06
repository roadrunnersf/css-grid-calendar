import gridColumnLinesFromDate from './gridColumnLinesFromDate'

const generateGridTemplateColumns = (dates: string[]): string => {
	const joined = dates
		.map(date => {
			const { startCol, endCol } = gridColumnLinesFromDate(date)

			return `${startCol} ] minmax(0, 1fr) [ ${endCol} `
		})
		.join('')

	return `[labels-start] 100px [labels-end ${joined}]`
}

export default generateGridTemplateColumns
