import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// layout container
import App from './components/App'

// containers
import Home from './containers/pages/Home'
import Todo from './containers/pages/Todo'
import Rest from './containers/pages/Rest'

export default (
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Home} />
			<Route path='home'
				component={Home}
				title="Home | My Sandbox" />
			<Route path='todo'
				component={Todo}
				title="Todo | Pull real-time data from database" />
			<Route path='rest'
				component={Rest}
				title="REST APIs | Pull data from JSON REST APIS" />
		</Route>
	</Router>
)

// class RouteEle extends Component {
// 	render () {
// 		return (
// 			<Router history={browserHistory}>
// 				<Route path='/' component={App}>
// 					<IndexRoute component={Home} />
// 					<Route path='home'
// 						component={Home}
// 						title="Home | My Sandbox" />
// 					<Route path='todo'
// 						component={Todo}
// 						title="Todo | Pull real-time data from database" />
// 					<Route path='rest'
// 						component={Rest}
// 						title="REST APIs | Pull data from JSON REST APIS" />
// 				</Route>
// 			</Router>
// 		)
// 	}
// }
//
// export default RouteEle
