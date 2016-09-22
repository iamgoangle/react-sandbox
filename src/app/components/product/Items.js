import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'

import ItemDetail from './ItemDetail'

const styles = {
    row: {
        margin: '5px'
    }
}

class Items extends Component {
    constructor (state) {
        super(state)

        this.state = {}
        this.state.products = [{
            id: 0,
            title: 'Beer AOI',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            sku: 'BEER-001',
            price: '500',
            concurrency: '$',
            thumbnail: 'dist/assets/images/products/bottle-2.png'
        }, {
            id: 1,
            title: 'Coffee',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            sku: 'COFF-001',
            price: '100',
            concurrency: '$',
            thumbnail: 'dist/assets/images/products/coffee.png'
        }, {
            id: 2,
            title: 'Wine soceity',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            sku: 'WINE-001',
            price: '9,000',
            concurrency: '$',
            thumbnail: 'dist/assets/images/products/wine.png'
        }]
    }
    render () {
        return (
            <div className="row itemRow">
                {this.state.products.map( (product, index) => (
                    <ItemDetail
                        key={index}
                        title={product.title}
                        desc={product.desc}
                        sku={product.sku}
                        price={product.price}
                        concurrency={product.concurrency}
                        thumbnail={product.thumbnail}>
                    </ItemDetail>
                ))}
            </div>
        )
    }
}

export default Items
