import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// layout: MainApp
import MainApp from './components/layout/MainApp'

// home : components
import Home from './components/home/Home'

// pages: Database
import Database from './components/pages/Database'
import Rest from './components/pages/Rest'

export default () => {
	return (
		<Router history={browserHistory}>
			<Route path='/'
				component={MainApp}>
				<IndexRoute component={Home} />
				<Route path='home'
					component={Home}
					title="Home | My Sandbox" />
				<Route path='database'
					component={Database}
					title="Database | Pull real-time data from database" />
				<Route path='rest'
					component={Rest}
					title="REST APIs | Pull data from JSON REST APIS" />
			</Route>
		</Router>
	)
}
