type StartEndObj = {
	start: string
	end: string
}

type Lines = {
	rows: {
		end: string
		head: StartEndObj
	}
	cols: {
		labels: StartEndObj
	}
}

export const lines = {
	rows: {
		end: 'END_LINE',
		head: {
			start: 'headrow-start',
			end: 'headrow-end',
		},
	},
	cols: {
		labels: {
			start: 'labels-start',
			end: 'labels-end',
		},
	},
}

type Formats = {
	[format: string]: string
}

export const formats: Formats = {
	cssGridTime: '_HH_mm',
	cssGridDate: '_YYYY_MM_DD',
	time: 'HH:mm',
	standardDate: 'YYYY-MM-DD',
	isoShort: 'YYYY-MM-DDTHH:mm:ss',
	ukDate: 'DD/MM/YYYY',
}
