import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// layout: MainApp
import MainApp from './components/layout/MainApp'

// home : components
import Home from './components/home/Home'

// todo: Todo
import Todo from './components/todo/Todo'

export default () => {
	return (
		<Router history={browserHistory}>
			<Route path='/'
				component={MainApp}>
				<IndexRoute component={Home} />
				<Route path='home'
					component={Home} />
				<Route path='todo'
					component={Todo}
					title="Todo" />
			</Route>
		</Router>
	)
}
