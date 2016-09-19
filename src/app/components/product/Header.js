import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'

import AppBar from 'material-ui/AppBar'

// Icons
import IconButton from 'material-ui/IconButton'
import ActionShoppingBasket from 'material-ui/svg-icons/action/shopping-basket'

import Avatar from 'material-ui/Avatar'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class Header extends Component {
    static propTypes: {
        title: PropType.string.isRequired
    }

    render () {
        return (
            <MuiThemeProvider>
                <AppBar
                    title={this.props.title}
                    iconElementLeft={
                        <IconButton>
                            <ActionShoppingBasket />
                        </IconButton>
                    }
                />
            </MuiThemeProvider>
        )
    }
}

export default Header
