/**
* @Author: Teerapong Singthong <iamgoangle>
* @Date:   Sep-05-2016
* @Email:  st.teerapong@gmail.com
* @Last modified by:   iamgoangle
* @Last modified time: Sep-05-2016
*/

import React, { Component } from 'react'
import { render } from 'react-dom'

import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import NavigationClose from 'material-ui/svg-icons/navigation/close'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

class Header extends Component {
	constructor (props, context) {
		super(props, context)
	}

	static propTypes: {
		onRefreshClick: PropTypes.func.isRequired,
		onAddSingleTodo: PropTypes.func.isRequired
	}

	/* event handle */
	handleRefreshClick = () => {
		this.props.onRefreshClick()
	}

	handleAddSingle = () => {
		this.props.onAddSingleTodo()
	}

	handleAddMultiple () {
		console.log('add multiple record(s)')
	}

	render () {
		return (
			<MuiThemeProvider>
				<AppBar
					title={this.props.title}
					iconElementLeft={
						<IconButton>
							<NavigationClose />
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

							<MenuItem primaryText="Refresh" onClick={this.handleRefreshClick} />
							<MenuItem primaryText="Add single record" onClick={this.handleAddSingle} />
							<MenuItem primaryText="Add multiple record(s)" onClick={this.handleAddMultiple} />
						</IconMenu>
					}
				/>
			</MuiThemeProvider>
		)
	}
}

export default Header
