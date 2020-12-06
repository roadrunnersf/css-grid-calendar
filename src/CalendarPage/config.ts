import dayjs, { Dayjs } from 'dayjs'
import { everyNFromArray } from 'CalendarPage/utils'

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

type Config = {
	hoursPerDay: number
	slotsPerHour: 12
	timeBlocksPerHour: 0.25 | 0.5 | 1 | 2 | 4
	timeLabelsPerHour: 0.25 | 0.5 | 1
	hoursDifferenceBetweenSlots: number
	numberOfSlots: number
	slotsArray: Dayjs[]
	timeBlocksArray: Dayjs[]
	timeLabelsArray: Dayjs[]
	slotTimes: string[]
	slotGridTemplateRows: string
}

export const config: Config = {
	hoursPerDay: 24,
	slotsPerHour: 12,
	timeBlocksPerHour: 2,
	timeLabelsPerHour: 1,
	get hoursDifferenceBetweenSlots() {
		return 1 / this.slotsPerHour
	},
	get numberOfSlots() {
		return this.hoursPerDay * this.slotsPerHour
	},
	get slotsArray() {
		return [...Array(this.numberOfSlots)].map((e, i) =>
			startDate.add(i * this.hoursDifferenceBetweenSlots, 'hour')
		)
	},
	get timeBlocksArray() {
		const every = this.slotsPerHour / this.timeBlocksPerHour

		const filteredSlots = everyNFromArray(this.slotsArray, every)

		return filteredSlots
	},
	get timeLabelsArray() {
		const every = this.slotsPerHour / this.timeLabelsPerHour

		const filteredSlots = everyNFromArray(this.slotsArray, every)

		return filteredSlots
	},
	get slotTimes() {
		return this.slotsArray.map(timeObj => {
			const formattedHour = timeObj.format(formats.cssGridTime)

			return `[${formattedHour}] 1fr`
		})
	},
	get slotGridTemplateRows() {
		const joined = `${this.slotTimes.join(' ')} [${endRowLine}]`
		const removedFirstBracket = joined.substring(1)

		return removedFirstBracket
	},
}

type Formats = { [format: string]: string }

export const formats: Formats = {
	cssGridTime: '_HH_mm',
	cssGridDate: '_YYYY_MM_DD',
	time: 'HH:mm',
	standardDate: 'YYYY-MM-DD',
	isoShort: 'YYYY-MM-DDTHH:mm:ss',
}
