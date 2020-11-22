import { Dayjs } from 'dayjs'
import gridColumnLinesFromDate from './gridColumnLinesFromDate'

const generateGridTemplateColumns = (dates: Dayjs[]): string => {
	const joined = dates
		.map(date => {
			const { startLine, endLine } = gridColumnLinesFromDate(date)

			return `${startLine} ] minmax(0, 1fr) [ ${endLine} `
		})
		.join('')

	return `[labels-start] 100px [labels-end ${joined}]`
}

export default generateGridTemplateColumns
