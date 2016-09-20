/**
* @Author: Teerapong Singthong <iamgoangle>
* @Date:   Sep-04-2016
* @Email:  st.teerapong@gmail.com
* @Last modified by:   iamgoangle
* @Last modified time: Sep-04-2016
*/

import React, { Component } from 'react'
import { render } from 'react-dom'

import $ from 'jquery'
import { sticky } from 'jquery-sticky'
import NavLink from './NavLink'

/**
 * Active class menu
 * https://github.com/reactjs/react-router-tutorial/tree/master/lessons/05-active-links
 */

class Header extends Component {
	render () {
		return (
			<header className="header-area">
				<nav className="navbar navbar-custom tb-nav" role="navigation">
					<div className="container">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#tb-nav-collapse">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<a className="navbar-brand logo" href="/">
								<h2>
									I am<span> goangle</span>
								</h2>
							</a>
						</div>
						<div className="collapse navbar-collapse" id="tb-nav-collapse">
							<ul className="nav navbar-nav navbar-right">
								<li>
									<NavLink to="/home">Home</NavLink>
								</li>
								<li>
									<NavLink to="/todo">Todo</NavLink>
								</li>
								<li>
									<NavLink to="/product">Product</NavLink>
								</li>
								<li>
									<NavLink to="/easy-redux">Easy Redux</NavLink>
								</li>
								<li>
									<a className="page-scroll" href="#blog">Blog</a>
								</li>
								<li>
									<a className="page-scroll" href="#contact">Contact Us</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
		)
	}
}

export default Header
