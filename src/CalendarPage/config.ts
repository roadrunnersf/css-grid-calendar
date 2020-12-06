export const endRowLine = 'END_LINE'

type Formats = { [format: string]: string }

export const formats: Formats = {
	cssGridTime: '_HH_mm',
	cssGridDate: '_YYYY_MM_DD',
	time: 'HH:mm',
	standardDate: 'YYYY-MM-DD',
	isoShort: 'YYYY-MM-DDTHH:mm:ss',
}
