import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'

import CalendarPage from 'CalendarPage'
import GlobalStyle from 'GlobalStyle'
import PageContainer from 'PageContainer'
import { theme } from 'theme'

const App = () => (
	<ThemeProvider theme={theme}>
		<Router>
			<GlobalStyle />
			<PageContainer>
				<Switch>
					<Route path="/">
						<CalendarPage />
					</Route>
				</Switch>
			</PageContainer>
		</Router>
	</ThemeProvider>
)

export default App
