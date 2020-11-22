import dayjs, { Dayjs } from 'dayjs'
import { everyNFromArray } from './utils'

export const cssGridTimeFormat: string = '_HH_mm'
export const cssGridDateFormat: string = '_YYYY_MM_DD'

export const standardDateFormat: string = 'YYYY-MM-DD'

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
	hours: number
	slotsPerHour: 12
	timeBlocksPerHour: 0.25 | 0.5 | 1 | 2 | 4
	timeLabelsPerHour: 0.25 | 0.5 | 1
	hoursDifferenceBetweenSlots: number
	numberOfSlots: number
	slotsArray: Dayjs[]
	timeBlocksArray: Dayjs[]
	timeLabelsArray: Dayjs[]
	slotTimes: string[]
	timeLabelGridTemplateRows: string
}

export const config: Config = {
	hours: 24,
	slotsPerHour: 12,
	timeBlocksPerHour: 2,
	timeLabelsPerHour: 1,
	get hoursDifferenceBetweenSlots() {
		return 1 / this.slotsPerHour
	},
	get numberOfSlots() {
		return this.hours * this.slotsPerHour
	},
	get slotsArray() {
		return [...Array(config.numberOfSlots)].map((e, i) =>
			startDate.add(i * config.hoursDifferenceBetweenSlots, 'hour')
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
	get timeLabelGridTemplateRows() {
		const joined = `${this.slotTimes.join(' ')} [${endRowLine}]`
		const removedFirstBracket = joined.substring(1)

		return removedFirstBracket
	},
}

type Formats = { [format: string]: string }

export const formats: Formats = {
	cssGridTime: '_HH_mm',
	time: 'HH:mm',
}
