/**
* @Author: Teerapong Singthong <iamgoangle>
* @Date:   Sep-03-2016
* @Email:  st.teerapong@gmail.com
* @Last modified by:   iamgoangle
* @Last modified time: Sep-03-2016
*/

import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import { AppContainer } from 'react-hot-loader'

import RouteEle from './app/routes'

const rootElement = document.getElementById('app')

render(
	<AppContainer>
		<RouteEle />
	</AppContainer>,
	rootElement
)

// if (module.hot) {
// 	module.hot.accept('./containers/Root', () => {
// 		const NextRootApp = require('./app/routes').default
// 		render(
// 			<AppContainer>
// 				<NextRootApp />
// 			</AppContainer>,
// 			rootEl
// 		);
// 	});
// }
