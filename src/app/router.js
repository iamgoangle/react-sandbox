import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// layout container
import App from './components/App'

// containers
import Home from './containers/pages/Home'
import Todo from './containers/pages/Todo'
import Product from './containers/pages/Product'
import EasyRedux from './containers/pages/EasyRedux'

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
			<Route path='product'
				component={Product}
				title="Product | Add product to cart" />
			<Route path='easy-redux'
				component={EasyRedux}
				title="Easy Redux | To learning easy redux from simple file" />
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
