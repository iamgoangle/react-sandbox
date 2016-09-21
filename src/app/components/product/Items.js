import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'

import ItemDetail from './ItemDetail'

const styles = {
        row: {
            margin: '5px'
        }
}

class Items extends Component {
    render () {
        return (
            <div className="row itemRow">
                <ItemDetail product=""></ItemDetail>
				<ItemDetail product=""></ItemDetail>
				<ItemDetail product=""></ItemDetail>
				<ItemDetail product=""></ItemDetail>
            </div>
        )
    }
}

export default Items
