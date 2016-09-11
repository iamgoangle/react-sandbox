/**
* @Author: Teerapong Singthong <iamgoangle>
* @Date:   Sep-05-2016
* @Email:  st.teerapong@gmail.com
* @Last modified by:   iamgoangle
* @Last modified time: Sep-05-2016
*/

import React, { Component } from 'react'
import render from 'react-dom'

import Header from '../../components/todo/Header'
import PageData from '../../components/todo/PageData'

class Todo extends Component {
	constructor () {
		super()
		this.title = 'Learning getting the data from the database'
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

export default Todo
