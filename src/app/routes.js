import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// components
import MainApp from './components/layout/MainApp'

// Home : components
import Home from './components/home/Home'

export default () => {
	return (
		<Router history={browserHistory}>
			<Route path='/' component={MainApp}>
				<IndexRoute component={Home} />
			</Route>
		</Router>
	)
}
