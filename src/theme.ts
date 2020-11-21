interface ThemeColorScheme {
	primary: string
	secondary: string
	text: string
	background: string
	tertiary: string
}

declare module '@emotion/react' {
	export interface Theme extends ThemeColorScheme {}
}

const seascape: ThemeColorScheme = {
	primary: 'rgb(43,93,104)',
	secondary: 'rgb(125,187,185)',
	text: 'rgb(242,242,242)',
	background: 'rgb(216,211,208)',
	tertiary: 'rgb(157,168,168)',
}

export const theme = seascape
