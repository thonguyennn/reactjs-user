import React, { Component } from 'react';

class TableDataRow extends Component {
    permissionShow = () => {
        if(this.props.per == 1) {
            return "Admin"
        } else if(this.props.per == 2) {
            return "Moderator"
        } else {
            return "User"
        }
    }

    editUserRow = () => {
        this.props.editProps2()
        this.props.changeEditUserStatus()
    }

    deleteBtn = (id) => {
        this.props.deleteBtn(id)
    }
    render() {
        return (
                <tr>
                    <td>{this.props.id+1}</td>
                    <td>{this.props.userName}</td>
                    <td>{this.props.phone}</td>
                    <td>{this.permissionShow()}</td>
                    <td>
                    <div className="btn-group">
                        <div className="btn btn-warning edit"
                        onClick={() => this.editUserRow()} 

                         > <i className="fa fa-edit " /> Sửa </div>
                        <div className="btn btn-danger delete"
                        onClick={(id) => this.deleteBtn(this.props.id)}
                        > <i className="fa fa-edit " /> Xóa </div>
                    </div>
                    </td>
                </tr>
        );
    }
}

export default TableDataRow;