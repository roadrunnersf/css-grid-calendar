import dayjs from 'dayjs'
import { formats } from 'CalendarPage/config'

type GridColumnLines = {
	startCol: string
	endCol: string
}

const gridColumnLinesFromDate = (date: string): GridColumnLines => {
	const underscoreDate = dayjs(date).format(formats.cssGridDate)

	return {
		startCol: `${underscoreDate}_start`,
		endCol: `${underscoreDate}_end`,
	}
}

export default gridColumnLinesFromDate
