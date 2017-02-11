import React, { Component } from 'react'
import viral from '../../assets/img/viral_global.png'
import top from '../../assets/img/top.png'

class OverView extends Component {
  render() {
    return (
      <div className="row padding-h10"> 
        <div className="col-md-6 col-xs-6">
          <img src={viral} alt="" className="full-width"/>
        </div>
        <div className="col-md-6 col-xs-6">
          <img src={top} alt="" className="full-width"/>
        </div>   
      </div>
    );
  }
}

export default OverView;