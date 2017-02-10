import React, { Component } from 'react';
import Nav from '../shared/Nav'
import '../../assets/css/home.css'

class Body extends Component {

  componentDidMount(){
    var app = document.getElementById('App')
    if(app !== undefined){ app.style.minHeight = window.innerHeight + "px" }
  }
  render() {
    return (
      <div className="home-container" id="App">
        <Nav />
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="message">Necesito diseño</div>
      </div>
    );
  }
}

export default Body;
