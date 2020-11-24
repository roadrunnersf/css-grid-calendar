import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@emotion/react'

import CalendarPage from 'CalendarPage'
import GlobalStyle from 'GlobalStyle'
import PageContainer from 'PageContainer'
import { theme } from 'theme'
import store from 'store'

const App = () => (
	<Provider store={store}>
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
	</Provider>
)

export default App
