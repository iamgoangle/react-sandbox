import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'

// Button collection
import IconButton from 'material-ui/IconButton'
import FlatButton from 'material-ui/FlatButton'
import FontIcon from 'material-ui/FontIcon'
import RaisedButton from 'material-ui/RaisedButton'

// Menu
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'

// Icon collection
import ActionDelete from 'material-ui/svg-icons/action/delete'

// Color collection
import {fullWhite} from 'material-ui/styles/colors'

// Dialog
import Dialog from 'material-ui/Dialog'

import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table'

import TextField from 'material-ui/TextField'
import Toggle from 'material-ui/Toggle'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const styles = {
    propContainer: {
        width: 200,
        overflow: 'hidden',
        margin: '20px auto 0'
    },
    propToggleHeader: {
        margin: '20px auto 10px'
    },
    removeButton: {
        margin: 12
    }
}

class PageData extends Component {
    constructor(props, state) {
        super(props, state)
		this.table = {
			title: 'Displaying the employee status'
		}

        this.state = {
            fixedHeader: true,
            fixedFooter: true,
            stripedRows: false,
            showRowHover: true,
            selectable: false,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: true,
            showCheckboxes: false,
            height: '',
            open: false,
            removeIndex: 0
        }
    }

	// get property type from container components
	static propTypes: {
		todos: PropTypes.array.isRequired,
		onFetchDataJSON: PropTypes.func.isRequired,
        handleOnRemove: PropsTypes.func.isRequired
	}

	handleToggle (event, toggled) {
		this.setState({
			[event.target.name]: toggled,
		})
	}

	handleChange (event) {
		this.setState({
			height: event.target.value
		})
	}

    handleOnRemove = () => {
        const index = this.state.removeIndex
        if(this.props.handleOnRemove(index)) {
            this.handleClose()
        }
    }

    componentWillMount () {
		this.props.onFetchDataJSON()
    }

    handleOpen = (index) => {
        this.setState({removeIndex: index})

        this.setState({open: true})
    }

    handleClose = () => {
        this.setState({open: false})
    }

    render () {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleOnRemove}
            />,
        ]

        return (
			<MuiThemeProvider>
				<div>
                    {/* OPEN: Dialog */}
                    <Dialog
                        title="Are you sure you want to remove me from your life?"
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}>
                        The actions in this window were passed in as an array of React objects [todos] = {this.state.removeIndex}.
                    </Dialog>
                    {/* CLOSE: Dialog */}

					<Table
						height={this.state.height}
						fixedHeader={this.state.fixedHeader}
						fixedFooter={this.state.fixedFooter}
						selectable={this.state.selectable}
						multiSelectable={this.state.multiSelectable}>

						<TableHeader
							displaySelectAll={this.state.showCheckboxes}
							adjustForCheckbox={this.state.showCheckboxes}
							enableSelectAll={this.state.enableSelectAll}>
							<TableRow>
								<TableHeaderColumn colSpan="4" tooltip={this.table.title} style={{textAlign: 'left'}}>
									{this.table.title}
								</TableHeaderColumn>
							</TableRow>
							<TableRow>
								<TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
								<TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
								<TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
                                <TableHeaderColumn></TableHeaderColumn>
							</TableRow>
						</TableHeader>
						<TableBody
							displayRowCheckbox={this.state.showCheckboxes}
							deselectOnClickaway={this.state.deselectOnClickaway}
							showRowHover={this.state.showRowHover}
							stripedRows={this.state.stripedRows}>

							{this.props.todos.map( (row, index) => (
    							<TableRow key={index}>
    								<TableRowColumn>{index}</TableRowColumn>
    								<TableRowColumn>{row.name}</TableRowColumn>
    								<TableRowColumn>{row.status}</TableRowColumn>
                                    <TableRowColumn>
                                        <FlatButton
                                            backgroundColor="#e7304c"
                                            hoverColor="#53ed8f"
                                            icon={<ActionDelete color={fullWhite} />}
                                            style={styles.removeButton}
                                            onClick={() => this.handleOpen(index)} />
                                    </TableRowColumn>
    							</TableRow>
							))}
						</TableBody>
						<TableFooter
                            adjustForCheckbox={this.state.showCheckboxes}>
							<TableRow>
								<TableRowColumn>ID</TableRowColumn>
								<TableRowColumn>Name</TableRowColumn>
								<TableRowColumn>Status</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn colSpan="3" style={{textAlign: 'center'}}>
								Super Footer
								</TableRowColumn>
							</TableRow>
						</TableFooter>
					</Table>
				</div>
  	  		</MuiThemeProvider>
        )
    }
}

export default PageData
