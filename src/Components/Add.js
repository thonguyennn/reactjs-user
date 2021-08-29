import React, { Component } from 'react';

class Add extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            phone: "",
            permission: ''
        }
    }
    

    isChanged = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        });

        var item = {}
        item.id = this.state.id
        item.name = this.state.name
        item.phone = this.state.phone
        item.permission = this.state.permission

    }

    checkStatus = () => {
        if(this.props.displayForm === true){
            return (
                <div className="col">
                    <form mothod="post">
                    <div className="card border-primary mb-3 mt-2" style={{maxWidth: '18rem'}}>
                    <div className="card-header text-center">Thêm mới user</div>
                    <div className="card-body text-primary">
                    <div className="form-group">
                        <label htmlFor>Tên user</label>
                        <input type="text" name="name" onChange={(e) => this.isChanged(e)} className="form-control"  placeholder="Nhập tên user" />
                    </div>
                    <div className="form-group">
                        <label htmlFor>Số điện thoại</label>
                        <input type="text" name="phone" onChange={(e) => this.isChanged(e)} className="form-control"  placeholder="Nhập số điện thoại" />
                    </div>
                    <div className="form-group">
                        <label htmlFor>Phân Quyền</label>
                        <select className="custom-select" name="permission" onChange={(e) => this.isChanged(e)} required>
                        <option value>Chọn quyền mặc định</option>
                        <option value={1}>Admin</option>
                        <option value={2}>Moderator</option>
                        <option value={3}>User</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="reset" className="btn btn-block btn-primary" 
                        onClick={(name, phone, permission) => this.props.addUser(this.state.name, this.state.phone, this.state.permission)} 
                        value="Thêm mới"
                        />
                    </div>
                    </div>
                    </div>
                    </form>
                </div>
            )
        }
    }
    
    changeBtn = () => {
        this.setState({
            status: !this.state.status
        });
    } 
    render() {
        return <div>
             {this.checkStatus()} 
        </div>
    }
}

export default Add;