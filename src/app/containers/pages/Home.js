/**
* @Author: Teerapong Singthong <iamgoangle>
* @Date:   Sep-04-2016
* @Email:  st.teerapong@gmail.com
* @Last modified by:   iamgoangle
* @Last modified time: Sep-04-2016
*/

import React, { Component } from 'react'
import render from 'react-dom'

// components
import Banner from '../../components/banner/Banner'
import AboutUs from '../../components/home/AboutUs'

class Home extends Component {
	render () {
		return (
			<div className="clear">
				<Banner />
				<AboutUs />
			</div>
		)
	}
}

export default Home
