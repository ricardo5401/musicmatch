import React, { Component } from 'react';
import Header from './Header'
import Nav from '../shared/Nav'
import '../../assets/css/login.css'
import { browserHistory } from 'react-router'

class Body extends Component {
  onClick(e){
    browserHistory.push('/onboarding')
  }
  onClickSplash(e){
    browserHistory.push('/splash')
  }
  render() {
    return (
      <div className="App">
        <Nav navLink={''} showUser={false} navText={'Login'} />
        <center>
          <div className="form-container">
            <button type="button" className="social-button" onClick={this.onClickSplash.bind(this)}>
              <i className="fa fa-facebook"></i>Ingresa con facebook
            </button>
            <div className="text-divider" >or</div>
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
        </center>
      </div>
    );
  }
}

export default Body;
