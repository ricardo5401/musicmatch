import React, { Component } from 'react';
import Nav from '../shared/Nav'
import { getUser } from '../../config/staticUsers'
import { getList } from '../../config/staticPlayList'
import Button from './Button'
import PlayList from './PlayList'
import '../../assets/css/profile.css'
import { browserHistory } from 'react-router'

class Body extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: Math.floor(Math.random() * 5),
      playList: Math.floor(Math.random() * 5),
      className: '',
      chat: Math.floor(Math.random() * 5)
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
    var chat = this.state.chat
    this.setState({ chat: this.getIndex(chat) })
    if(chat === 0 || chat === 2){
      browserHistory.push('/chat/' + this.state.user)
    }else{
      this.effectEntrance('rotateInDownRight', 'rotateOutUpLeft') 
    }
  }
  cancelProfile(e){
    this.effectEntrance('rotateInDownRight','zoomOutLeft')
  }
  effectEntrance(entrance, exit){
    this.setState({ className: exit })
    setTimeout(function(){
      this.setState({ user: this.getIndex(this.state.user),
          playList: this.getIndex(this.state.playList),
          className: entrance })
    }.bind(this), 600)
    setTimeout(function(){
      this.setState({ className: '' })
    }.bind(this), 1200)
  }
  render() {
    console.log(this.state)
    var user = getUser(this.state.user);
    var playList = getList(this.state.playList);
    var mappedList = playList.map((play, i) => <PlayList key={i} play={play}/>)
    return (
      <div className="profile-container purple-container" id="App">
        <Nav navText={'Perfil'} purple={true}/>
        <div className="dummy-div"></div>
        <div className={"custom-animate animated " + this.state.className}>       
          <div className="full-width">
            <img src={user.picture} alt={user.name} className="full-width"/>
          </div>
          <div className="user-info center-text">{ user.name + ", " + user.age }</div>
          <Button nextProfile={this.nextProfile.bind(this)} cancelProfile={this.cancelProfile.bind(this)} />
          <br/>
          <div className="user-info">Lista de reproducción</div>
          { mappedList }
          <hr className="play-divider" />
        </div>
        <br />
      </div>
    );
  }
}

export default Body;
