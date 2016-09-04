/**
* @Author: Teerapong Singthong <iamgoangle>
* @Date:   Sep-04-2016
* @Email:  st.teerapong@gmail.com
* @Last modified by:   iamgoangle
* @Last modified time: Sep-04-2016
*/

import React, { Component } from 'react'
import { render } from 'react-dom'

class AboutUs extends Component {
	render () {
		return (
			<section className="about-us" id="about">
				<div className="container-fluid">
					<div className="row">
						<div className="col-sm-6 col-xs-12 no-padding">
							<div className="about-us-left">
								<h2 className="section-title-left">About our design</h2>
								<p> Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod .</p>
							</div>
						</div>

						<div className="col-sm-6 col-xs-12 no-padding">
							<div className="about-us-right">
								<div className="media">
									<div className="media-left dotted">
										<i className="fa fa-lightbulb-o"></i>
									</div>

									<div className="media-body">
										<h3 className="media-heading">We Advice</h3>
										<p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. </p>
									</div>
								</div>

								<div className="media">
									<div className="media-left dotted">
										<i className="fa fa-pencil-square-o"></i>
									</div>
									<div className="media-body">
										<h3 className="media-heading">We Design</h3>
										<p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. </p>
									</div>
								</div>

								<div className="media">
									<div className="media-left">
										<i className="fa fa-code"></i>
									</div>
									<div className="media-body">
										<h3 className="media-heading">We develope</h3>
										<p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. </p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default AboutUs
