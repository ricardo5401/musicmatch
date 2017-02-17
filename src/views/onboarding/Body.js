import React, { Component } from 'react'
import '../../assets/css/onboarding.css'
import Categories from './Categories'
import { browserHistory } from 'react-router'

class Body extends Component {

  updateDimensions(){
    var app = document.getElementById('App')
    if(app !== undefined){ app.style.minHeight = window.innerHeight + "px" }
    var mini = document.getElementById('first')
  }
  componentDidMount(){
    this.updateDimensions()
    window.addEventListener("resize", this.updateDimensions.bind(this))
    window.addEventListener("orientationchange", this.updateDimensions.bind(this))
  }
  goToHome(){
    browserHistory.push('/home')
  }

  render() {
    return (
      <div id="App">
        <div className="onboarding-text">Bienvenido a MusicMatch
          <button type="button" className="btn border-button pull-right"
          onClick={this.goToHome.bind(this)} style={{ marginTop: '-5px' }}>Continuar</button>
        </div>
        <Categories />
      </div>
    );
  }
}

export default Body;
