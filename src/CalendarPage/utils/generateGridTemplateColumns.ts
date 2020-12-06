import gridColumnLinesFromDate from './gridColumnLinesFromDate'
import { lines } from 'CalendarPage/config'

const generateGridTemplateColumns = (dates: string[]): string => {
	const joined = dates
		.map(date => {
			const { startCol, endCol } = gridColumnLinesFromDate(date)

			return `${startCol} ] minmax(0, 1fr) [ ${endCol} `
		})
		.join('')

	return `[${lines.cols.labels.start}] 100px [${lines.cols.labels.end} ${joined}]`
}

export default generateGridTemplateColumns
