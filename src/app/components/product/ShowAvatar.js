import React, { Component } from 'react'
import render from 'react-dom'

import Avatar from 'material-ui/Avatar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const style = {
    margin: 20
}

const textAvatarStyle = {
    margin: '20px'
}

class ShowAvatar extends Component {
	render () {
		return (
            <div className="row">
                <div className="col-md-1">
                    <MuiThemeProvider>
                        <Avatar
                            src="dist/assets/images/users/6595022.jpg"
                            size={50}
                            style={style} />
                    </MuiThemeProvider>
                </div>
                <div className="col-md-4" style={textAvatarStyle}>
                    <span>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industrys standard dummy text ever since the 1500...
                    </span>
                </div>
                <div className="col-md-4"></div>
            </div>
		)
	}
}

export default ShowAvatar
