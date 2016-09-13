import React, { Component, PropTypes } from 'react'
import render from 'react-dom'

import Header from '../../components/todo/Header'
import PageData from '../../components/todo/PageData'

// Redux
import { connect } from 'react-redux'
import store from '../../store'
import { getAllTodo } from '../../actions/todoAction'

// mapping the state is that contains in store to {this.props}
const mapStateToProps = (store) => {
	return {
		empDatas: store.todoState
	}
}

// dispatch an action will be called reducer mapping it to {this.props}
const mapDispatchToProps = (dispatch) => {
	return {
		onPageLoad: () => {
			dispatch(getAllTodo())
		},
		onTodoClick: () => {
			dispatch(getAllTodo())
		}
	}
}

class Todo extends Component {
	constructor (props) {
		super(props)
		this.title = 'Learning getting the data from the database'
	}

	static propTypes: {
        empDatas: PropTypes.array.isRequired,
		onPageLoad: PropTypes.func.isRequired
    }

	componentDidMount () {
		// this.props.onPageLoad()
	}

	render () {
		return (
			<div>
				<Header title={this.title} />
				<PageData empDatas={this.props.empDatas} onPageLoad={this.props.onPageLoad} />
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
