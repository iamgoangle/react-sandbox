import React, { Component } from 'react'
import render from 'react-dom'
import { Link } from 'react-router'

class NavLink extends Component {
    render () {
        return (
            <Link {...this.props} activeClassName="active" />
        )
    }
}

export default NavLink
