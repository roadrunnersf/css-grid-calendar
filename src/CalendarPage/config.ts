import dayjs from 'dayjs'

export const endRowLine = 'END_LINE'

export const dates = [
	dayjs('2020-11-22'),
	dayjs('2020-11-23'),
	dayjs('2020-11-24'),
	dayjs('2020-11-25'),
	dayjs('2020-11-26'),
	dayjs('2020-11-27'),
	dayjs('2020-11-28'),
]

export const startDate = dates[0].startOf('day')

type Formats = { [format: string]: string }

export const formats: Formats = {
	cssGridTime: '_HH_mm',
	cssGridDate: '_YYYY_MM_DD',
	time: 'HH:mm',
	standardDate: 'YYYY-MM-DD',
	isoShort: 'YYYY-MM-DDTHH:mm:ss',
}
