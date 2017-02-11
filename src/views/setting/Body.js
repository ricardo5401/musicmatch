import React, { Component } from 'react';
import Nav from '../shared/Nav'
import '../../assets/css/setting.css'
import Switch from './Switch'
import { browserHistory } from 'react-router'

class Body extends Component {
  updateDimensions(){
    var app = document.getElementById('App')
    if(app !== undefined){ app.style.minHeight = window.innerHeight + "px" }
  }
  componentDidMount(){
    this.updateDimensions()
    window.addEventListener("resize", this.updateDimensions.bind(this))
    window.addEventListener("orientationchange", this.updateDimensions.bind(this))
  }
  clicked(e){
    browserHistory.push('/home')
  }
  render() {
    const button = (
      <button type="button" className="empty-button" onClick={ this.clicked.bind(this) }>
        <i className="fa fa-angle-left"></i>
      </button>
    );

    return (
      <div className="home-container" id="App">
        <Nav showUser={false} navText={'Ajustes'} className={'setting-text'} navLink={button} />
        <div className="dummy-div"></div>
        <div className="text-divider left-divider pp">
          Ajustes de descubrimiento
        </div>
        <hr className="custom-hr"/>
        <div className="setting-content">
          <div className="content-text">Muéstrame</div>
          <div className="switch-text">            
            <div className="content-text subtitle inline">Hombres</div>
            <div className="switch-container"><Switch checked={false}/></div>
          </div>
          <div className="switch-text">            
            <div className="content-text subtitle inline">Mujeres</div>
            <div className="switch-container"><Switch checked={true}/></div>
          </div>
        </div>
        <div className="setting-content">
          <div className="content-text">Distancia de búsqueda</div>
          <div className="switch-text">            
            <div className="content-text subtitle inline">Radio de búsqueda en km</div>
            <div className="switch-container"><input type="text" className="custom-text-box" value="80"/></div>
          </div>
        </div>
        <div className="setting-content">
          <div className="content-text">Preferencias</div>
          <div className="switch-text">            
            <div className="content-text subtitle inline">Reproducir automaticamente el play list del perfil en el que estas</div>
            <div className="switch-container"><Switch checked={true}/></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
