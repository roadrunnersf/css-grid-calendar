import React from 'react'
import { Global, css } from '@emotion/react'

const GlobalStyle: React.FC = () => (
	<Global
		styles={css`
			body {
				margin: 0px;
				padding: 0px;
				font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
				font-size: 14px;

				line-height: 1.4;
			}
			button,
			div,
			p,
			textarea,
			input {
				box-sizing: border-box;
				color: inherit;
				font: inherit;
				font-size: inherit;
				font-stretch: normal;
				border: none;
				box-shadow: none;
				margin: 0px;
				:focus {
					outline: 0;
				}
			}

			textarea {
				cursor: auto;
			}
		`}
	/>
)
export default GlobalStyle
