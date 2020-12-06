import dayjs from 'dayjs'

export const endRowLine = 'END_LINE'

export const dates = [
	'2020-11-22',
	'2020-11-23',
	'2020-11-24',
	'2020-11-25',
	'2020-11-26',
	'2020-11-27',
	'2020-11-28',
]

export const startDate = dayjs(dates[0]).startOf('day').toISOString()

type Formats = { [format: string]: string }

export const formats: Formats = {
	cssGridTime: '_HH_mm',
	cssGridDate: '_YYYY_MM_DD',
	time: 'HH:mm',
	standardDate: 'YYYY-MM-DD',
	isoShort: 'YYYY-MM-DDTHH:mm:ss',
}
