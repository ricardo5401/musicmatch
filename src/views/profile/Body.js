import React, { Component } from 'react';
import Nav from '../shared/Nav'
import { getUser } from '../../config/staticUsers'
import { getList } from '../../config/staticPlayList'
import Button from './Button'
import PlayList from './PlayList'
import '../../assets/css/profile.css'

class Body extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: Math.floor(Math.random() * 5),
      playList: Math.floor(Math.random() * 5),
      className: ''
    }
  }
  updateDimensions(){
    var app = document.getElementById('App')
    if(app !== undefined){ app.style.minHeight = window.innerHeight + "px" }
  }
  componentDidMount(){
    this.updateDimensions()
    window.addEventListener("resize", this.updateDimensions.bind(this))
    window.addEventListener("orientationchange", this.updateDimensions.bind(this))
  }
  getIndex(number){
    var index = number + 1;
    return index < 5 ? index : 0
  }
  nextProfile(e){
    this.setState({ user: this.getIndex(this.state.user),
          playList: this.getIndex(this.state.playList),
          className: 'rotateInDownRight' })
    setTimeout(function(){
      this.setState({ className: '' })
    }.bind(this), 600)
  }
  render() {
    console.log(this.state)
    var user = getUser(this.state.user);
    var playList = getList(this.state.playList);
    var mappedList = playList.map((play, i) => <PlayList key={i} play={play}/>)
    return (
      <div className="profile-container" id="App">
        <Nav navText={'Perfil'}/>
        <div className="dummy-div"></div>
        <div className={"custom-animate animated " + this.state.className}>       
          <div className="full-width">
            <img src={user.picture} alt={user.name} className="full-width"/>
          </div>
          <div className="user-info center-text">{ user.name + ", " + user.age }</div>
          <Button nextProfile={this.nextProfile.bind(this)} />
          <br/>
          <div className="user-info">Lista de reproducción</div>
          { mappedList }
        </div>
      </div>
    );
  }
}

export default Body;
