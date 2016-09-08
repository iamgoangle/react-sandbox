import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// layout container
import MainApp from './containers/layout/MainApp'

// containers
import Home from './containers/pages/Home'
import Database from './containers/pages/Database'
import Rest from './containers/pages/Rest'

// export default () => {
// 	return (
// 		<Router history={browserHistory}>
// 			<Route path='/' component={MainApp}>
// 				<IndexRoute component={Home} />
// 				<Route path='home'
// 					component={Home}
// 					title="Home | My Sandbox" />
// 				<Route path='database'
// 					component={Database}
// 					title="Database | Pull real-time data from database" />
// 				<Route path='rest'
// 					component={Rest}
// 					title="REST APIs | Pull data from JSON REST APIS" />
// 			</Route>
// 		</Router>
// 	)
// }

class RouteEle extends Component {
	render () {
		return (
			<Router history={browserHistory}>
				<Route path='/' component={MainApp}>
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
}

export default RouteEle
