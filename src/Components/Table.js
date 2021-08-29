import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class Table extends Component {

    deleteBtn = (id) => {
        this.props.deleteUser(id)
    }
    mappingDataUser = () => this.props.dataUserProps.map((value, key) => (
        <TableDataRow 
        deleteBtn={(id) => this.deleteBtn(id)}
        changeEditUserStatus={() => this.props.changeEditUserStatus()}
        editProps2={(user) => this.props.editProps(value)}
        userName={value.name} 
        key={key} 
        id={key} 
        phone={value.phone} 
        per={value.permission}
        // id={value.id}
        />
    ))
    
    render() {
        return (
            <div className="col">
                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Điện thoại</th>
                        <th>Quyền</th>
                        <th>Hành động</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.mappingDataUser()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;