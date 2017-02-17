import React, { Component } from 'react';
import logo from '../../assets/img/logoMusic.png'
import google from '../../assets/img/google.png'
import spotify from '../../assets/img/spotify_w.png'
import Header from './Header'
import Nav from '../shared/Nav'
import '../../assets/css/login.css'
import { browserHistory } from 'react-router'

class Body extends Component {
  onClick(e){
    var link = '/' + e.target.name;
    browserHistory.push(link)
  }
  render() {
    return (
      <div className="App">
        <center>
          <div><img src={logo} alt="" className="login-logo"/></div>
          <div className="form-container percent-80">
            <button type="button" className="social-button" name="onboarding" onClick={this.onClick.bind(this)}>
              <i className="fa fa-facebook"></i>Ingresa con facebook
            </button>
            <button type="button" className="social-btn google spotify"
               name="onboarding" onClick={this.onClick.bind(this)}>
              <img src={spotify} alt="google" />Ingresa con Spotify
            </button>
            <button type="button" className="social-btn google" 
              name="onboarding" onClick={this.onClick.bind(this)}>
              <img src={google} alt="google" />Ingresa con Google
            </button>
            <button type="button" className="social-btn google music" 
              name="auth" onClick={this.onClick.bind(this)}>
              <img src={logo} alt="google" />Ingresa con tu email
            </button>
          </div>
        </center>
      </div>
    );
  }
}

export default Body;
