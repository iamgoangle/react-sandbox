import React, { Component, PropTypes } from 'react'
import render from 'react-dom'

import Header from '../../components/todo/Header'
import PageData from '../../components/todo/PageData'

import { connect } from 'react-redux'

/*
	Imports Redux action creator
*/
import {
	getAllTodo,
	addSingleTodo,
	removeTodo,
	fetchTodo
}
from '../../actions/todoAction'

import '../../components/todo/todo.scss'

/*
	component will subscribe to Redux store updates.
	Any time it updates, mapStateToProps will be called.
	Its result must be a plain object*,
	and it will be merged into the component’s props

	state in this case is store state, not a component state
*/
const mapStateToProps = (state) => {
	return {
		todos: state.todoState
	}
}

/*
	object is passed, each function inside it will be
	assumed to be a Redux action creator.

	An object with the same function names,
	but with every action creator wrapped into a
	dispatch call so they may be invoked directly,
	will be merged into the component’s props
*/
const mapDispatchToProps = (dispatch) => {
	return {
		// onPageLoad: () => {
		// 	dispatch(getAllTodo())
		// },
		// onTodoClick: () => {
		// 	dispatch(getAllTodo())
		// },
		onAddSingleTodo: (newTodo) => {
			dispatch(addSingleTodo(newTodo))
		},
		handleOnRemove: (todos) => {
			dispatch(removeTodo(todos))
			return true
		},
		handleOnFetchJson: () => {
			dispatch(fetchTodo())
		}
	}
}

class Todo extends Component {
	constructor (props, context) {
		super(props, context)
		this.title = "Example todo"
	}

	// Child contexts allow an element to specify a context that
	// applies to all of its children and grandchildren.

	// This is done through the childContextTypes
	// and getChildContext properties.

	// https://www.tildedave.com/2014/11/15/introduction-to-contexts-in-react-js.html
	static childContextTypes = {
		handleAddNewTodo: PropTypes.func.isRequired
	}

	getChildContext () {
		return {
			handleAddNewTodo: this.handleAddNewTodo
		}
	}

	handleAddNewTodo = () => {
		// TODO: dispatch to action for save new todo
		console.log('test')
	}

	// onRefreshClick = () => {
	// 	this.props.onPageLoad()
	// }

	onAddSingleTodo = (newTodo) => {
		this.props.onAddSingleTodo(newTodo)
	}

	onFetchDataJSON = () => {
		this.props.handleOnFetchJson()
	}

	render () {
		return (
			<div>
				<Header
					title = {this.title}
					onRefreshClick = {this.onRefreshClick}
					onAddSingleTodo = {this.onAddSingleTodo}
					onFetchDataJSON = {this.onFetchDataJSON} />

				<PageData
					todos = {this.props.todos}
					onFetchDataJSON = {this.onFetchDataJSON}
					handleOnRemove = {this.props.handleOnRemove} />
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
