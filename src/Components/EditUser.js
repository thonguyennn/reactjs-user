import React, { Component } from 'react';

class EditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.userEditObject.id,
            name: this.props.userEditObject.name,
            phone: this.props.userEditObject.phone,
            permission: this.props.userEditObject.permission,
            
        }
    }
    

    isChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value
        });
    }

    saveUserInfo = () => {
        var info = {}
        info.id = this.state.id
        info.name = this.state.name
        info.phone = this.state.phone
        info.permission = this.state.permission

        this.props.getUserEditInfo(info)
        this.props.changeEditUserStatus() // ẩn form

    }
    render() {
        return (
            <div className="col">
                <form mothod="post">
                    <div className="card border-primary mb-3 mt-2" >
                    <div className="card-header text-center">Sửa thông tin User</div>
                    <div className="card-body text-primary">
                    <div className="form-group">
                        <label htmlFor>Tên user</label>
                        <input onChange={(e) => this.isChange(e)}
                        defaultValue={this.props.userEditObject.name} type="text" name="name" className="form-control"  placeholder="Nhập tên user" />
                    </div>
                    <div className="form-group">
                        <label htmlFor>Số điện thoại</label>
                        <input onChange={(e) => this.isChange(e)}
                        defaultValue={this.props.userEditObject.phone} type="text" name="phone" className="form-control"  placeholder="Nhập số điện thoại" />
                    </div>
                    <div className="form-group">
                        <label htmlFor>Phân Quyền</label>
                        <select onChange={(e) => this.isChange(e)}
                        defaultValue={this.props.userEditObject.permission} className="custom-select" name="permission" required>
                        <option value>Chọn quyền mặc định</option>
                        <option value={1}>Admin</option>
                        <option value={2}>Moderator</option>
                        <option value={3}>User</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="button" className="btn btn-block btn-primary" 
                        value="Save"
                        onClick={() => this.saveUserInfo()}
                        />
                    </div>
                    </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditUser;