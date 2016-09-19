import React, { Component } from 'react'
import render from 'react-dom'

import Header from '../../components/product/Header'
import Items from '../../components/product/Items'
import ShowAvatar from '../../components/product/ShowAvatar'

class Product extends Component {
	render () {
		return (
			<div>
				<Header
					title="Add item to cart">
				</Header>
				<ShowAvatar></ShowAvatar>
				<Items></Items>
			</div>
		)
	}
}

export default Product
