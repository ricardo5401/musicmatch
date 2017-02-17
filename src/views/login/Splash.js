import React, { Component } from 'react';
import logo from '../../assets/img/logoMusic.png'
import google from '../../assets/img/google.png'
import spotify from '../../assets/img/spotify2.png'
import Header from './Header'
import Nav from '../shared/Nav'
import '../../assets/css/login.css'
import { browserHistory } from 'react-router'

class Body extends Component {
  constructor(props){
    super(props);
    this.state = {
      login: false
    }
  }
  onClick(e){
    browserHistory.push('/onboarding')
  }
  showForm(value){
    this.setState({
      login: true
    });
  }
  render() {
    const  social = (
          <div className="form-container percent-80">
            <button type="button" className="social-button" onClick={this.onClick.bind(this)}>
              <i className="fa fa-facebook"></i>Ingresa con facebook
            </button>
            <button type="button" className="social-btn google spotify">
              <img src={spotify} alt="google" />Ingresa con Spotify
            </button>
            <button type="button" className="social-btn google" onClick={this.showForm.bind(this)}>
              <img src={google} alt="google" />Ingresa con Google
            </button>
          </div>
      );
    const form = (
          <div className="form-container percent-80">
            <div className="input-group">
              <span className="input-group-addon transparent">
                  <i className="fa fa-user white"></i>
              </span>
              <input type="text" className="unborder-text white" placeholder="Usuario o email"/>
            </div>
            <br/>
            <div className="input-group">
              <span className="input-group-addon transparent">
                  <i className="fa fa-lock white"></i>
              </span>
              <input type="password" className="unborder-text white" placeholder="Contraseña"/>
            </div>
            <br/>
            <button type="button" className="social-button login" 
              onClick={this.onClick.bind(this)}>Iniciar</button>
            <div className="text-divider" ><a href="#"  
            onClick={this.onClick.bind(this)}>¿Olvidaste tu contraseña?</a></div>
          </div>
      );
    return (
      <div className="App">
        <center>
          <div><img src={logo} alt="" className="login-logo"/></div>
          { this.state.login ? form : social }
        </center>
      </div>
    );
  }
}

export default Body;
