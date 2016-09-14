import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'

class EasyRedux extends Component {
	componentDidMount () {
		/* reducer */
		const initialState = []
		const reducer = (state = initialState, action) => {
			switch (action.type) {
				case 'INC':
					return state + action.payload
				break

				case 'DEC':
					return state - action.decreasing
				break

				default:
					return state
				break;
			}
		}

		/* my-action.js */
		const clickINC = () => {
			return {
				type: 'INC',
				payload: 1
			}
		}

		const clickDEC = () => {
			return {
				type: 'DEC',
				decreasing: 1
			}
		}

		/* store.js */
		const store = createStore(reducer, 0)

		/* subscribe */
		store.subscribe(() => {
			console.log("store changed: " + store.getState())
		})

		/* handleClick*/
		store.dispatch(clickINC())	// 1
		store.dispatch(clickINC())	// 2
		store.dispatch(clickINC())	// 3

		this.props.dispatch(clickDEC())	// 2
	}

	render () {
		return (
			<h1>See result at the console</h1>
		)
	}
}

export default EasyRedux
