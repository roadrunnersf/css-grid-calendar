export const cssGridTimeFormat = '_HH_mm'

export const dayConsts = {
	hours: 24,
	slotsPerHour: 1,
	get increment() {
		return 1 / this.slotsPerHour
	},
}

export const endRowLine = 'END_LINE'
