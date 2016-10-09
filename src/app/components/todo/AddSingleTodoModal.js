import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'

import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

const customContentStyle = {
  width: '100%',
}

class AddSingleTodoModal extends Component {
	static propTypes: {
		handleOpenModal: PropTypes.func.isRequired,
		openModal: PropsType.bool.isRequired
	}

	static contextTypes = {
		handleAddNewTodo: PropTypes.func.isRequired
	}

	constructor (props) {
		super(props)

		this.state = {}
		this.state.workerStatus = [{
			id: 1,
			status: 'Employed'
		}, {
			id: 2,
			status: 'Unemployed'
		}]
	}

	handleClose = () => {
		this.props.handleOpenModal(false)
	}

	handleSubmit = () => {
		this.context.handleAddNewTodo()
	}

	render () {
		const actions = [
			<FlatButton
				label = "Cancel"
				primary = {false}
				onTouchTap = {this.handleClose}
			/>,
			<FlatButton
				label = "Submit"
				primary = {true}
				disabled = {false}
				onTouchTap = {this.handleSubmit}
			/>
		]

		return (
			<div>
				<Dialog
					title = "Add new todo"
					actions = {actions}
					modal = {true}
					open = {this.props.openModal}
					contentStyle = {customContentStyle}>

					<div className="row">
						<div className="col-md-12">
							<div className="col-md-8">
								<div className="row field">
									<div className="col-md-3">
										<span>
											Name
										</span>
									</div>
									<div className="col-md-7">
										<input type="text"
											id="worker-name"
											name="name"
											placeholder="Enter employee name" />
									</div>
								</div>
								<div className="row field">
									<div className="col-md-3">
										<span>
											Status
										</span>
									</div>
									<div className="col-md-7">
										<select name="status" id="worker-status">
											{
												this.state.workerStatus.map( (status) =>
													(
														<option key={status.id}
															value={status.status}>
															{status.status}
														</option>
													)
												)
											}
										</select>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<img src="dist/assets/images/users/blank.png"
									alt="blank user"
									className="img-thumbnail"/>
							</div>
						</div>
					</div>

				</Dialog>
			</div>
		)
	}
}

export default AddSingleTodoModal
