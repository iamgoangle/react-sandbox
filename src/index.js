/**
* @Author: Teerapong Singthong <iamgoangle>
* @Date:   Sep-03-2016
* @Email:  st.teerapong@gmail.com
* @Last modified by:   iamgoangle
* @Last modified time: Sep-03-2016
*/

import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import routes from './app/routes'

render(routes(), document.getElementById('app'))
