import React, { Component } from 'react';
import Nav from '../shared/Nav'
import '../../assets/css/setting.css'
import { browserHistory } from 'react-router'

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
  clicked(e){
    browserHistory.push('/home')
  }
  render() {
    const button = (
        <button type="button" className="empty-button" onClick={ this.clicked.bind(this) }>
          <i className="fa fa-angle-left"></i>
        </button>);
    return (
      <div className="home-container" id="App">
        <Nav showUser={false} navText={'Ajustes'} className={'setting-text'} navLink={button} />
      </div>
    );
  }
}

export default Body;
