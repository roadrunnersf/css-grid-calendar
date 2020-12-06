import dayjs from 'dayjs'
import { formats } from 'CalendarPage/config'

type GridColumnLines = {
	startLine: string
	endLine: string
}

const gridColumnLinesFromDate = (date: string): GridColumnLines => {
	const underscoreDate = dayjs(date).format(formats.cssGridDate)

	return {
		startLine: `${underscoreDate}_start`,
		endLine: `${underscoreDate}_end`,
	}
}

export default gridColumnLinesFromDate
