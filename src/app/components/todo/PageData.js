/**
 * @Author: Teerapong Singthong <iamgoangle>
 * @Date:   Sep-06-2016
 * @Email:  st.teerapong@gmail.com
 * @Last modified by:   iamgoangle
 * @Last modified time: Sep-06-2016
 */

import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'

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
        margin: '20px auto 0',
    },
    propToggleHeader: {
        margin: '20px auto 10px',
    }
}

const tableData = [{
    name: 'John Smith',
    status: 'Employed',
    selected: true,
}, {
    name: 'Randal White',
    status: 'Unemployed',
}, {
    name: 'Stephanie Sanders',
    status: 'Employed',
    selected: true,
}, {
    name: 'Steve Brown',
    status: 'Employed',
}, {
    name: 'Joyce Whitten',
    status: 'Employed',
}, {
    name: 'Samuel Roberts',
    status: 'Employed',
}, {
    name: 'Adam Moore',
    status: 'Employed',
}]

class PageData extends Component {
    constructor(props) {
        super(props)
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
            height: ''
        }
    }

	// get property type from container components
	static propTypes: {
		empDatas: PropTypes.array.isRequired,
		onPageLoad: PropTypes.func.isRequired
	}

	handleToggle (event, toggled) {
		this.setState({
			[event.target.name]: toggled,
		});
	}

	handleChange (event) {
		this.setState({
			height: event.target.value
		});
	}

    componentDidMount () {
        this.props.onPageLoad()
    }

    render() {
        console.log(this.props.empDatas.users)
        return (
			<MuiThemeProvider>
				<div>
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
								<TableHeaderColumn colSpan="3" tooltip={this.table.title} style={{textAlign: 'left'}}>
									{this.table.title}
								</TableHeaderColumn>
							</TableRow>
							<TableRow>
								<TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
								<TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
								<TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
							</TableRow>
						</TableHeader>
						<TableBody
							displayRowCheckbox={this.state.showCheckboxes}
							deselectOnClickaway={this.state.deselectOnClickaway}
							showRowHover={this.state.showRowHover}
							stripedRows={this.state.stripedRows}
							>
							{this.props.empDatas.users.map( (row, index) => (
							<TableRow key={index} selected={row.selected}>
								<TableRowColumn>{index}</TableRowColumn>
								<TableRowColumn>{row.name}</TableRowColumn>
								<TableRowColumn>{row.status}</TableRowColumn>
							</TableRow>
							))}
						</TableBody>
						<TableFooter
							adjustForCheckbox={this.state.showCheckboxes}
							>
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
