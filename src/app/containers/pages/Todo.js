import React, { Component } from 'react'
import render from 'react-dom'

import Header from '../../components/todo/Header'
import PageData from '../../components/todo/PageData'

// Redux
import { connect } from 'react-redux'
import store from '../../store'
import { getAllTodo } from '../../actions/todoAction'

class Todo extends Component {
	constructor (props, context) {
		super(props, context)
		this.title = 'Learning getting the data from the database'
	}

	componentDidMount () {
		store.dispatch(getAllTodo())
		console.log(getAllTodo)
	}

	render () {
		return (
			<div>
				<Header title={this.title} />
				<PageData />
			</div>
		)
	}
}

const mapStateToProps = function(store) {
	return {
		empDatas: store.empDatas
	}
}

export default connect(mapStateToProps)(Todo)
// export default Todo
