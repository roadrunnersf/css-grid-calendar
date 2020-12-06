import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@emotion/react'
import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles'

import CalendarPage from 'CalendarPage'
import GlobalStyle from 'GlobalStyle'
import PageContainer from 'PageContainer'
import { muiTheme, theme } from 'theme'
import store from 'store'

const App = () => (
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<MuiThemeProvider theme={muiTheme}>
				<StylesProvider injectFirst>
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
				</StylesProvider>
			</MuiThemeProvider>
		</ThemeProvider>
	</Provider>
)

export default App
