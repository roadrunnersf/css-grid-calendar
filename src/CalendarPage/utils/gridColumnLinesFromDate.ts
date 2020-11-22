import { Dayjs } from 'dayjs'
import { cssGridDateFormat } from 'CalendarPage/config'

type GridColumnLines = {
	startLine: string
	endLine: string
}

const gridColumnLinesFromDate = (date: Dayjs): GridColumnLines => {
	const underscoreDate = date.format(cssGridDateFormat)

	return {
		startLine: `${underscoreDate}_start`,
		endLine: `${underscoreDate}_end`,
	}
}

export default gridColumnLinesFromDate
