import React, { Component } from 'react'
import '../../assets/css/onboarding.css'
import Rock from '../../assets/img/categories/Rock.jpeg'
import Indie from '../../assets/img/categories/indie.png'
import Others from '../../assets/img/categories/Others.jpeg'
import Romantic from '../../assets/img/categories/romantic.png'
import Latino from '../../assets/img/categories/Latino.jpeg'
import Dance from '../../assets/img/categories/Dance.jpeg'
import Pop from '../../assets/img/pop.png'
import Hiphop from '../../assets/img/categories/HipHop.jpeg'
import Classic from '../../assets/img/categories/Clasica.jpeg'
import { browserHistory } from 'react-router'

class Body extends Component {

  constructor(props){
    super(props)
    this.state = {
      classic: false,
      hiphop: false,
      pop: false,
      others: false,
      rock: false,
      indie: false,
      dance: false,
      romantic: false,
      latino: false
    }
  }
  updateDimensions(){
    var app = document.getElementById('App')
    if(app !== undefined){ app.style.minHeight = window.innerHeight + "px" }
    var mini = document.getElementById('first')
    if(mini !== undefined){ 
      var height = mini.offsetHeight; 
      var big = document.getElementById('big')
      var big2 = document.getElementById('big2')
      var big3 = document.getElementById('big3')
      if(big !== undefined){ big.style.height = (height * 2) + 'px' }
      if(big2 !== undefined){ big2.style.height = (height * 2) + 'px' }
      if(big3 !== undefined){ big3.style.height = (height * 2) + 'px' }
    }
  }
  componentDidMount(){
    this.updateDimensions()
    window.addEventListener("resize", this.updateDimensions.bind(this))
    window.addEventListener("orientationchange", this.updateDimensions.bind(this))
  }
  goToHome(){
    browserHistory.push('/home')
  }
  toggleActive(e){
    var target = e.target;
    var state = this.getState(target.name)
    this.setState({ [target.name]: state })
    state ? target.classList.add('active') : target.classList.remove('active')
  }
  getState(name){
    switch(name){
      case 'classic': {
        return !this.state.classic
      }
      case 'hiphop':{
        return !this.state.hiphop
      }
      case 'pop':{
        return !this.state.pop
      }
      case 'others': {
        return !this.state.others
      }
      case 'rock':{
        return !this.state.rock
      }
      case 'indie':{
        return !this.state.indie
      }
      case 'dance': {
        return !this.state.dance
      }
      case 'latino':{
        return !this.state.latino
      }
      case 'romantic':{
        return !this.state.romantic
      }
      default: return false
    }
  }

  render() {
    return (
      <div id="App">
        <div className="onboarding-text">Bienvenido a MusicMatch
          <button type="button" className="btn border-button pull-right"
          onClick={this.goToHome.bind(this)}>Continuar</button>
        </div>
        <div className="onboarding-title">
          Selecciona las categorias musicales que mas te gustan
        </div>
        <div className="container-fluid">
          <br/>

          <div className="row">
            <div className="col-xs-4 no-padding-right">
              <div className="first" id="first">
                <img src={Classic} alt="" className="full-width" name={'classic'} 
                onClick={this.toggleActive.bind(this)} />
              </div>
              <div className="second">
                <img src={Hiphop} alt="" className="full-width" 
                name={'hiphop'} onClick={this.toggleActive.bind(this)} />
              </div>
            </div>
            <div className="col-xs-8">
              <img src={Pop} alt="" className="full-width" id="big" name={'pop'} 
                onClick={this.toggleActive.bind(this)} />
            </div>
          </div> 

          <div className="row padding-top">
            <div className="col-xs-8">
              <img src={Others} alt="" className="full-width" id="big2" name={'others'} 
                onClick={this.toggleActive.bind(this)} />
            </div>
            <div className="col-xs-4 no-padding-left">
              <div className="first" id="first">
                <img src={Indie} alt="" className="full-width" name={'indie'} 
                onClick={this.toggleActive.bind(this)} />
              </div>
              <div className="second">
                <img src={Rock} alt="" className="full-width" 
                name={'rock'} onClick={this.toggleActive.bind(this)} />
              </div>
            </div>
          </div> 
          <br />

          <div className="row">
            <div className="col-xs-4 no-padding-right">
              <div className="first" id="first">
                <img src={Dance} alt="" className="full-width" name={'dance'} 
                onClick={this.toggleActive.bind(this)} />
              </div>
              <div className="second">
                <img src={Latino} alt="" className="full-width" 
                name={'latino'} onClick={this.toggleActive.bind(this)} />
              </div>
            </div>
            <div className="col-xs-8">
              <img src={Romantic} alt="" className="full-width" id="big3" name={'romantic'} 
                onClick={this.toggleActive.bind(this)} />
            </div>
          </div> 

          <br />
        </div>
      </div>
    );
  }
}

export default Body;
