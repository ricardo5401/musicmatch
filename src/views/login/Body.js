import React, { Component } from 'react';
import Header from './Header'
import '../../assets/css/login.css'
import { browserHistory } from 'react-router'

class Body extends Component {
  onClick(e){
    browserHistory.push('/home')
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="form-container">
          <button type="button" className="social-button" onClick={this.onClick.bind(this)}>
            <i className="fa fa-facebook"></i>Ingresa con facebook
          </button>
          <div className="text-divider" >or</div>
          <div className="input-group">
            <span className="input-group-addon dark">
                <i className="fa fa-user gray"></i>
            </span>
            <input type="text" className="form-control dark" placeholder="Usuario o email"/>
          </div>
          <div className="input-group">
            <span className="input-group-addon dark">
                <i className="fa fa-lock gray"></i>
            </span>
            <input type="password" className="form-control dark" placeholder="Contraseña"/>
          </div>
          <button type="button" className="social-button green" 
            onClick={this.onClick.bind(this)}>Iniciar</button>
          <div className="text-divider" ><a href="#"  
          onClick={this.onClick.bind(this)}>¿Olvidaste tu contraseña?</a></div>
        </div>
      </div>
    );
  }
}

export default Body;
