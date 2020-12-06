import dayjs from 'dayjs'

const roundDateToNMinutes = (
	date: string,
	roundToMinutes: number = 5
): string => {
	const msInNMinutes = roundToMinutes * 60 * 1000

	const timeStamp = dayjs(date).valueOf()

	const roundedTimeStamp = Math.round(timeStamp / msInNMinutes) * msInNMinutes

	return dayjs(roundedTimeStamp).toISOString()
}

export default roundDateToNMinutes
