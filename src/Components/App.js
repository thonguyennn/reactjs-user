import './../App.css';
import Add from './Add';
import Header from './Header';
import Search from './Search';
import Table from './Table';
import dataUser from './Data.json'
import { v4 as uuidv4 } from 'uuid';

import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayForm: true,
      data: [],
      searchText: "",
      editUserStatus: false,
      userEditObject: {}
    }
  }
  
  componentWillMount() {
    if(localStorage.getItem('userData') === null) {
      localStorage.setItem('userData', JSON.stringify(dataUser))
    } else {
      var temp = JSON.parse(localStorage.getItem('userData'))
      this.setState({
        data: temp
      });
    }
  }
  

  changeStatus = () => {
    this.setState({
      displayForm: !this.state.displayForm
    });
  }

  getTextSearch = (data) => {
    this.setState({
      searchText: data
    });
  }

  getNewUserData = (name, phone, permission) => {
    var item = {}
    item.id = uuidv4()
    item.name = name
    item.phone = phone
    item.permission = permission

    var items = this.state.data 
    items.push(item)

    this.setState({
      data: items
    });
    
    localStorage.setItem('userData', JSON.stringify(items))
    
  }

  editUser = (user) => {
    this.setState({
      userEditObject: user
    });
  }

  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  }

  getUserEditInfoApp = (info) => {
    this.state.data.forEach((value, key) => {
      if(value.id === info.id){
        value.name = info.name
        value.phone = info.phone
        value.permission = info.permission
      }
    })

    localStorage.setItem('userData', JSON.stringify(this.state.data))
  }

  deleteUser = (id) => {

    var tempData = this.state.data.filter(item => item.id != id+1)
    this.setState({
      data: tempData
    });

    localStorage.setItem('userData', JSON.stringify(tempData))
  }
  render() {

    // localStorage.setItem('userData',JSON.stringify(dataUser))

    var result = []
    this.state.data.forEach((item) => {
      if(item.name.indexOf(this.state.searchText) !== -1){
        result.push(item)
      }
    })
    return (
      <div>
         <div>
          <Header/>
          <div className="searchForm">
            <div className="container">
              <div className="row">
                <Search getUserEditInfoApp={(info) => this.getUserEditInfoApp(info)}
                checkConnectProps={(data) => this.getTextSearch(data)}
                ketNoi={() => this.changeStatus()} 
                displayForm={this.state.displayForm}
                editUserStatus={this.state.editUserStatus}
                changeEditUserStatus={() => this.changeEditUserStatus()}
                userEditObject={this.state.userEditObject}
                />
                <Table deleteUser={(id) => this.deleteUser(id)}
                editProps={(user) => this.editUser(user)}
                dataUserProps={result}
                changeEditUserStatus={() => this.changeEditUserStatus()}
                />
                <Add addUser={(name, phone, permission) => this.getNewUserData(name, phone, permission)} displayForm={this.state.displayForm}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
