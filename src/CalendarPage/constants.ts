import dayjs, { Dayjs } from 'dayjs'

export const cssGridTimeFormat = '_HH_mm'

const date = dayjs('2020-01-01')

export const config = {
	hours: 24,
	slotsPerHour: 1,
	labelsPerHour: 1,
	get hoursDifferenceBetweenSlots() {
		return 1 / this.slotsPerHour
	},
	get numberOfSlots() {
		return this.hours * this.slotsPerHour
	},
	get slotsArray(): Dayjs[] {
		return [...Array(config.numberOfSlots)].map((e, i) =>
			date.add(i * config.hoursDifferenceBetweenSlots, 'hour')
		)
	},
	get labelTimes() {
		return this.slotsArray.map(timeObj => {
			const formattedHour = timeObj.format(formats.cssGridTime)

			return `[${formattedHour}] 1fr`
		})
	},
}

export const endRowLine = 'END_LINE'

type Formats = { [format: string]: string }

export const formats: Formats = {
	cssGridTime: '_HH_mm',
	time: 'HH:mm',
}
