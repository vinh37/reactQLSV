import React, { Component } from 'react'

export default class InfoUserRow extends Component {
    render() {
        return (            
                <tbody> 
                    <tr>
                        <td >{this.props.id}</td>
                        <td>{this.props.name}</td>
                        <td>{this.props.phone}</td>
                        <td>{this.props.per}</td>
                        <td>
                        <button className="btn btn-group">
                            <div onClick={this.props.clickEdit} className="btn btn-info">
                            <i className="fa fa-edit    ">Sua</i>
                            </div>
                            <div onClick={this.props.clickXoa} className="btn btn-danger">
                            <i className="fa fa-trash" aria-hidden="true">Xoa</i>
                            </div>
                        </button>
                        </td>
                    </tr>
                </tbody>               
            
        )
    }
}
