import dayjs, { Dayjs } from 'dayjs'

const roundDateToNMinutes = (date: Dayjs, roundToMinutes: number = 5) => {
	const msInNMinutes = roundToMinutes * 60 * 1000

	const timeStamp = dayjs(date).valueOf()

	const roundedTimeStamp = Math.round(timeStamp / msInNMinutes) * msInNMinutes

	return dayjs(roundedTimeStamp)
}

export default roundDateToNMinutes
