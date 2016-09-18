import React, { Component } from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

// import RouteEle from './app/router'
import router from './app/router'
const rootElement = document.getElementById('app')

import { Provider } from 'react-redux'
import store from './app/store'

render(
	<Provider store={store}>
		{router}
	</Provider>,
	rootElement
)
