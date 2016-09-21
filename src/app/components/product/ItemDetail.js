import React, { Component } from 'react'
import { render } from 'react-dom'

import "./product.scss"

class ItemDetail extends Component {
	render () {
		return (
			<div className="col-md-3 img-rounded">
				<div className="itemBox">
					<div className="row">
						<div className="col-md-1">
						</div>
						<div className="col-md-7">
							Stay hungry, stay foolish...
						</div>
						<div className="col-md-3 itemPrice">
							$500
						</div>
						<div className="col-md-1">
						</div>
					</div>
					<div className="row itemDetail">
						<div className="col-md-1">
						</div>
						<div className="col-md-5">
							xxx
						</div>
						<div className="col-md-5">
							asdasdsadsad
						</div>
						<div className="col-md-1">
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ItemDetail
