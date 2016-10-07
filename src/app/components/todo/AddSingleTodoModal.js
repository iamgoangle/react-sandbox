import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'

import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

const customContentStyle = {
  width: '100%',
}

class AddSingleTodoModal extends Component {
	constructor () {
		super()
		this.state = {
			open: false
		}
	}

	static propTypes: {
		openSingleTodoModal: PropTypes.bool.isRequired
	}

	handleOpen = () => {
		this.setState({open: true});
	}

	handleClose = () => {
		this.setState({open: false});
	}

	render () {
		const actions = [
				<FlatButton
					label = "Cancel"
					primary = {true}
					onTouchTap = {this.handleClose}
				/>,
				<FlatButton
					label = "Submit"
					primary = {true}
					disabled = {true}
					onTouchTap = {this.handleClose}
				/>
			]
		return (
			<div>
				<Dialog
					title = "Add new todo"
					actions = {actions}
					modal = {true}
					open = {this.props.openSingleTodoModal}
					contentStyle = {customContentStyle}>
					<div className="rows">
						<div className="col-md-12">
							<div className="col-md-8">
								<div>
									<div className="col-md-5">
										<span>Name</span>
									</div>
									<div className="col-md-7">
										<input type="text" name="name" placeholder="entered you name" />
									</div>
								</div>
							</div>
							<div className="col-md-4">

							</div>
						</div>
					</div>
				</Dialog>
			</div>
		)
	}
}

export default AddSingleTodoModal
