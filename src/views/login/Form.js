import React, { Component } from 'react'
import logo from '../../assets/img/logoMusic.png'
import '../../assets/css/login.css'
import { browserHistory } from 'react-router'

class Form extends Component {
  onClick(e){
    browserHistory.push('/onboarding')
  }
  render() {
    return (
      <div className="App">
        <center>
          <div><img src={logo} alt="" className="login-logo"/></div>
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
        </center>
      </div>
    );
  }
}

export default Form;
