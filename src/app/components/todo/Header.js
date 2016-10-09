import React, { Component } from 'react'
import { render } from 'react-dom'

// AppBar
import AppBar from 'material-ui/AppBar'

// Button collection
import IconButton from 'material-ui/IconButton'
import FlatButton from 'material-ui/FlatButton'
import FontIcon from 'material-ui/FontIcon'

// Menu
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'

// Icon collection
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import ActionFace from 'material-ui/svg-icons/action/face'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import ActionAndroid from 'material-ui/svg-icons/action/android'

import AddSingleTodoModal from './AddSingleTodoModal'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

class Header extends Component {
	constructor (props, context) {
		super(props, context)

		// ES5 style, bind certain keyword this
		// this.handleRefreshClick = this.handleRefreshClick.bind(this)
		// this.handleAddSingle = this.handleAddSingle.bind(this)

		this.state = {
			openModal: false
		}
	}

	static propTypes: {
		onRefreshClick: PropTypes.func.isRequired,
		onAddSingleTodo: PropTypes.func.isRequired,
		onFetchDataJSON: PropTypes.func.isRequired,
		title: PropTypes.string.isRequired
	}

	// handleAddSingle = () => {
	// 	const generateNewTodo = Math.random().toString(36).substring(7)
	// 	const _newTodo = {name: generateNewTodo, status: 'Unemployed'}
	// 	this.props.onAddSingleTodo(_newTodo)
	// }

	handleOpenModal = (status) => {
		this.setState({openModal: status})
	}

	handlePullFromJSON = () => {
		this.props.onFetchDataJSON()
	}

	render () {
		return (
			<MuiThemeProvider>
				<div>
					<AddSingleTodoModal
						handleOpenModal={this.handleOpenModal}
						openModal={this.state.openModal}>
					</AddSingleTodoModal>

					<AppBar
						title={this.props.title}
						iconElementLeft={
							<IconButton>
								<ActionFace />
							</IconButton>
						}
						iconElementRight={
							<IconMenu
								iconButtonElement={
									<IconButton>
										<MoreVertIcon />
									</IconButton>
								}
								targetOrigin={{horizontal: 'right', vertical: 'top'}}
								anchorOrigin={{horizontal: 'right', vertical: 'top'}}>

								<MenuItem
									primaryText="Add single record"
									onClick={() => this.handleOpenModal(true)} />
								<MenuItem
									primaryText="Pull data from JSON"
									onClick={() => this.handlePullFromJSON()} />
							</IconMenu>
						}>
					</AppBar>
				</div>
			</MuiThemeProvider>
		)
	}
}

export default Header
