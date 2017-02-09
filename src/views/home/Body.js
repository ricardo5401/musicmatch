import React, { Component } from 'react';
import Nav from '../shared/Nav'
import '../../assets/css/home.css'

class Body extends Component {
  render() {
    return (
      <div className="App">
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
