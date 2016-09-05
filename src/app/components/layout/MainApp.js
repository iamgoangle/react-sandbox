/**
* @Author: Teerapong Singthong <iamgoangle>
* @Date:   Sep-04-2016
* @Email:  st.teerapong@gmail.com
* @Last modified by:   iamgoangle
* @Last modified time: Sep-04-2016
*/

import React, { Component } from 'react'
import { render } from 'react-dom'

import Header from './Header'

class MainApp extends Component {
    constructor () {
        super()
        this.title = "Home | My Sandbox"
        document.title = this.title
    }
    componentDidUpdate () {
        this.title = this.props.children.props.route.title
        document.title = this.title
    }

    render() {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        )
    }
}

export default MainApp
