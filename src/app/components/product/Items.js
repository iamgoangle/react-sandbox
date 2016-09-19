import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'

const styles = {
        row: {
            margin: '5px'
        },
        itemBox: {
            backgroundColor: '#e6e6e6'
        }
}

class Items extends Component {
    render () {
        return (
            <div className="row" style={styles.row}>
                <div className="col-md-3 img-rounded">
                    <div style={styles.itemBox}>
                        test
                    </div>
                </div>
                <div className="col-md-3 img-rounded">
                    <div style={styles.itemBox}>
                        test
                    </div>
                </div>
                <div className="col-md-3 img-rounded">
                    <div style={styles.itemBox}>
                        test
                    </div>
                </div>
                <div className="col-md-3 img-rounded">
                    <div style={styles.itemBox}>
                        test
                    </div>
                </div>
            </div>
        )
    }
}

export default Items
