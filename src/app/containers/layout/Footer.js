/**
* @Author: Teerapong Singthong <iamgoangle>
* @Date:   Sep-04-2016
* @Email:  st.teerapong@gmail.com
* @Last modified by:   iamgoangle
* @Last modified time: Sep-05-2016
*/

import React, { Component } from 'react'
import { render } from 'react-dom'

class Footer extends Component {
	render () {
		return (
			<footer className="footer-section">
				<div className="container">
					<div className="row mt-30 mb-30">
						<div className="col-md-12 text-center">
							<div className="copyright-info">
								<a href="http://themebite.com"><span>
									<i className="fa fa-code"></i></span> with <span>
									<i className="fa fa-heart"></i>
									</span> By <span>ThemeBite</span>
								</a>
							</div>

							<div className="social-icons mt-30">
								<a href="https://www.facebook.com/themebite/"><i className="fa fa-facebook"></i></a>
								<a href="https://twitter.com/themebite/"><i className="fa fa-twitter"></i></a>
								<a href="https://plus.google.com/themebite/"><i className="fa fa-google-plus"></i></a>
								<a href="https://github.com/themebite/"><i className="fa fa-github"></i></a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		)
	}
}

export default Footer
