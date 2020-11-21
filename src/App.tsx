import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import CalendarPage from 'CalendarPage'
import GlobalStyle from 'GlobalStyle'
import PageContainer from 'PageContainer'

const App = () => (
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
)

export default App
