/**
* @Author: Teerapong Singthong <iamgoangle>
* @Date:   Sep-04-2016
* @Email:  st.teerapong@gmail.com
* @Last modified by:   iamgoangle
* @Last modified time: Sep-04-2016
*/

import React, { Component } from 'react'
import { render } from 'react-dom'

class Banner extends Component {
	render () {
		return (
			<section className="hero-section static-bg" id="top">
				<div className="slider-caption">
					<div className="container">
						<div className="row">
							<h1><span>Teerapong Singthong</span></h1>
							<h5>The ReactJS + Sandbox</h5>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Banner
