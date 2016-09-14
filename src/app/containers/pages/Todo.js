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
	addSingleTodo
}
from '../../actions/todoAction'

/*
	component will subscribe to Redux store updates.
	Any time it updates, mapStateToProps will be called.
	Its result must be a plain object*,
	and it will be merged into the component’s props
*/
const mapStateToProps = (state) => {
	return {
		empDatas: state.todoState
	}
}

/*
	object is passed, each function inside it will be assumed to be a Redux action creator.
	An object with the same function names,
	but with every action creator wrapped into a dispatch call so they may be invoked directly,
	will be merged into the component’s props
*/
const mapDispatchToProps = (dispatch) => {
	return {
		onPageLoad: () => {
			dispatch(getAllTodo())
		},
		onTodoClick: () => {
			dispatch(getAllTodo())
		},
		onAddSingleTodo: () => {
			dispatch(addSingleTodo())
		}
	}
}

class Todo extends Component {
	constructor (props, context) {
		super(props, context)
	}

	onRefreshClick = () => {
		this.props.onPageLoad()
	}

	onAddSingleTodo = () => {
		this.props.onAddSingleTodo()
	}

	render () {
		return (
			<div>
				<Header
					title={this.title}
					onRefreshClick={this.onRefreshClick}
					onAddSingleTodo={this.onAddSingleTodo} />

				<PageData
					empDatas={this.props.empDatas}
					onPageLoad={this.props.onPageLoad} />
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
