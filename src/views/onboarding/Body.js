import React, { Component } from 'react'
import '../../assets/css/onboarding.css'
import Trending from '../../assets/img/categories/trending.png'
import Hiphop from '../../assets/img/categories/HipHop.jpeg'
import Classic from '../../assets/img/categories/Clasica.jpeg'
import { browserHistory } from 'react-router'

class Body extends Component {

  updateDimensions(){
    var app = document.getElementById('App')
    if(app !== undefined){ app.style.minHeight = window.innerHeight + "px" }
    var mini = document.getElementById('first')
    if(mini !== undefined){ 
      var height = mini.offsetHeight; 
      var big = document.getElementById('big')
      if(big !== undefined){ big.style.height = (height * 2) + 'px' }
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
    var active = target.dataset.active;
    target.dataset.active = !target.dataset.active
    active ? target.classList.remove('active') : target.classList.add('active')
    console.log(target)
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
                <img src={Classic} alt="" className="full-width" data-active={false} 
                onClick={this.toggleActive.bind(this)} />
              </div>
              <div className="second">
                <img src={Hiphop} alt="" className="full-width" data-active={false} 
                onClick={this.toggleActive.bind(this)} />
              </div>
            </div>
            <div className="col-xs-8">
              <img src={Trending} alt="" className="full-width" id="big" data-active={false} 
                onClick={this.toggleActive.bind(this)} />
            </div>
          </div>          
        </div>
      </div>
    );
  }
}

export default Body;
