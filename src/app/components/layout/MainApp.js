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
    render() {
        return (
            <div>
                <Header></Header>
                {this.props.children}
            </div>
        )
    }
}

export default MainApp
