import React, { Component } from 'react'
import logo from './assets/img/logoMusic.png'
import { browserHistory } from 'react-router'

class App extends Component {
  componentDidMount(){
    var app = document.getElementById('App')
    if(app !== undefined){ app.style.minHeight = window.innerHeight + "px" }
    var container = document.getElementById('container')
    if(container !== undefined){ 
      container.classList.add('zoomIn')
      setTimeout( function(){ container.classList.remove('zoomIn') }, 700 ) 
    }
  }
  clicked(e){
    browserHistory.push('/login')
  }
  render() {
    return (
      <div className="App" id="App" onClick={this.clicked.bind(this)}>
        <div className="logo-container animated" id="container">
          <img src={logo} alt="" className="splash-logo"/>
          <div className="continue-text parpadea">press to continue</div>
        </div>
      </div>
    );
  }
}

export default App;
