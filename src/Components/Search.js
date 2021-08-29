import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue: "",
            userObj: {}
        }
    }
    getUserEditInfo = (info) => {   
        this.setState({
            userObj: info
        });
        this.props.getUserEditInfoApp(info)
    }
    isShowEditForm = () => {
        if(this.props.editUserStatus === true) {
            return <EditUser 
            getUserEditInfo = {(info) => this.getUserEditInfo(info)}
            changeEditUserStatus={() => this.props.changeEditUserStatus()}
            userEditObject={this.props.userEditObject}
            />
        } 
    }
    displayBtn = () => {
        if(this.props.displayForm === true) {
            return <div className="btn btn-block btn-outline-secondary" onClick={() => this.props.ketNoi()} >Đóng lại</div>
        } else {
            return <div className="btn btn-block btn-outline-info" onClick={() => this.props.ketNoi()} >Thêm mới user</div>
        }
    }
    isChanged = (e) => {
        console.log(e.target.value)
        this.setState({
            tempValue: e.target.value
        });
    }
    render() {
        return (
                <div className="col-12">
                    <div className="row">
                        {this.isShowEditForm()}
                    </div>
                    <div className="form-group">
                        <div className="btn-group">
                            <input type="text" className="form-control" onChange={(e) => this.isChanged(e)} placeholder="Nhập từ khóa" style={{width: '500px'}} />
                            <div className="btn btn-info" 
                            onClick={(data) => this.props.checkConnectProps(this.state.tempValue)}
                            > Tìm kiếm </div>
                        </div>
                    </div>
                    {this.displayBtn()}
                    <div className="col-12">
                        <hr />
                    </div> 
                </div>
        );
    }
}

export default Search;