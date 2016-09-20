/**
* @Author: Teerapong Singthong <iamgoangle>
* @Date:   Sep-04-2016
* @Email:  st.teerapong@gmail.com
* @Last modified by:   iamgoangle
* @Last modified time: Sep-04-2016
*/

import React, { Component } from 'react'
import { render } from 'react-dom'

import Header from '../containers/layout/Header'
import Footer from '../containers/layout/Footer'

// Redux
import { Provider } from 'react-redux'
import store from '../store'

import '../sass/styles.scss'

class App extends Component {
	constructor (props) {
		super(props)
		this.title = "Home | My Sandbox"
		document.title = this.title
	}

	componentDidUpdate () {
		this.title = this.props.children.props.route.title
		document.title = this.title
	}

	render() {
		return (
			<div>
				<Header />
					{this.props.children}
				<Footer />
			</div>
		)
	}
}

export default App
