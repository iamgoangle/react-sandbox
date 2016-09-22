import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'

import "./product.scss"

class ItemDetail extends Component {
	constructor (props, context) {
		super(props, context)
	}

	static propTypes: {
		title: PropTypes.string.isRequired,
		desc: PropTypes.string.isRequired,
		sku: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
		concurrency: PropTypes.string.isRequired,
		thumbnail: PropTypes.string.isRequired
	}

	render () {
		return (
			<div className="col-md-3 itemBox">
				<div>
					<div className="row">
						<div className="col-md-9">
							{this.props.title}
						</div>
						<div className="col-md-3 itemPrice">
							{this.props.concurrency}{this.props.price}
						</div>
					</div>
					<div className="row itemDetail">
						<div className="col-md-6 itemThumbnail">
							<img src={this.props.thumbnail} />
						</div>
						<div className="col-md-6 itemDescription">
							{this.props.desc}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ItemDetail
