import React, { Component } from 'react';
import Nav from '../shared/Nav'
import { getUser } from '../../config/staticUsers'
import { getList } from '../../config/staticPlayList'
import Button from './Button'
import PlayList from './PlayList'
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
    var index = Math.floor(Math.random() * 5);
    var user = getUser(index);
    var playList = getList(index);
    var mappedList = playList.map((play, i) => <PlayList key={i} play={play}/>)
    return (
      <div className="profile-container" id="App">
        <Nav navText={'Perfil'}/>
        <div className="dummy-div"></div>
        <div className="full-width">
          <img src={user.picture} alt={user.name} className="full-width"/>
        </div>
        <div className="user-info center-text">{ user.name + ", " + user.age }</div>
        <Button />
        <br/>
        <div className="user-info">Lista de reproducción</div>
        { mappedList }
      </div>
    );
  }
}

export default Body;
