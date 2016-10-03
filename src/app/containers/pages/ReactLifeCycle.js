import React, { Component } from 'react'
import { render } from 'react-dom'
import { applyMiddleware, combineReducers, createStore } from 'redux'

/**
 *	This route is created for learning about React life cycle
 *	@author	Teerapong Singthong
 */

class ReactLifeCycle extends Component {
	/* ====================================================================== */
	/* =========================== Initialize =============================== */
	/* ====================================================================== */

	// ES6 syntax
	// Have variables that are common to all objects.
	// This is accomplished with the static modifier.
	// Every instance of the class shares a class variable
	// When any object change static memeber,
	// all static member in eachg instance will affect too
	static defaultProps = {
		message: "Golf hello world!!!"
	}

	// getInitialState method enables to set the initial state value,
	// that is accessible inside the component via this.state
	static getInitialState = {
		test: "Test blar blar!!!"
	}

	// componentWillMount is called before the render method is executed.
	// It is important to note that setting the state
	// in this phase will not trigger a re-rendering.
	componentWillMount () {
		console.log('3 - componentWillMount')
	}

	// render method returns the needed component markup,
	// which can be a single child component or null or false
	// (in case you don't want any rendering)
	render () {
		console.log('4 - render')
		return (
			<div>
				<h1>Please see the result in console.log()</h1>
				<span>{this.props.message}</span>
			</div>
		)
	}

	// As soon as the render method has been executed the componentDidMount
	// function is called.
	// The DOM can be accessed in this method,
	// enabling to define DOM manipulations or data fetching operations.
	componentDidMount () {
		console.log('5 - componentDidMount')
	}

	/* ====================================================================== */
	/* ========================= State change  ============================== */
	/* ====================================================================== */

	// always called before the render method and enables to define
	// if a re-rendering is needed or can be skipped.
	// Obviously this method is never called on initial rendering.
	// A boolean value must be returned.
	shouldComponentUpdate (nextProps, nextState) {
		console.log(nextProps)
		console.log(nextState)
	}

	shouldComponentWillUpdate (nextProps, nextState) {
		return true
	}

	componentDidUpdate (prevProps, prevState) {
		console.log('componentDidUpdate')
	}

	/* ====================================================================== */
	/* ========================= Props change  ============================== */
	/* ====================================================================== */

	componentWillReceiveProps (nextProps) {
		// this.setState ({})
	}
}

export default ReactLifeCycle
