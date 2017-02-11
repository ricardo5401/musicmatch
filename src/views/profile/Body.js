import React, { Component } from 'react';
import Nav from '../shared/Nav'
import { getUser } from '../../config/staticUsers'
import Button from './Button'
import '../../assets/css/profile.css'

class Body extends Component {
  updateDimensions(){
    var app = document.getElementById('App')
    if(app !== undefined){ app.style.minHeight = window.innerHeight + "px" }
  }
  componentDidMount(){
    this.updateDimensions()
    window.addEventListener("resize", this.updateDimensions.bind(this))
    window.addEventListener("orientationchange", this.updateDimensions.bind(this))
  }
  render() {
    var user = getUser(0);
    console.log(user)
    return (
      <div className="profile-container" id="App">
        <Nav navText={'Perfil'}/>
        <div className="dummy-div"></div>
        <div className="full-width">
          <img src={user.picture} alt={user.name} className="full-width"/>
        </div>
        <div className="user-info">{ user.name + ", " + user.age }</div>
        <Button />
      </div>
    );
  }
}

export default Body;
