import React, { Component } from 'react'
export default class UserLogout extends Component {
 
 logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  }
 
  render() {
    return (
      <button style={{width:'30%',fontSize:'80%'}} onClick={this.logout}>Logout</button>
    )
  }
}