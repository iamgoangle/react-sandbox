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

class Header extends Component {
	constructor () {
		super()
		injectTapEventPlugin()
	}
	render () {
		return (
			<MuiThemeProvider>
				<AppBar
					title="Title"
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
							anchorOrigin={{horizontal: 'right', vertical: 'top'}}
						>
							<MenuItem primaryText="Refresh" />
							<MenuItem primaryText="Help" />
							<MenuItem primaryText="Sign out" />
						</IconMenu>
					}
				/>
			</MuiThemeProvider>
		)
	}
}

export default Header
