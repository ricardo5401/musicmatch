import React, { Component } from 'react'
import Global from '../../assets/img/global.png'
import viral from '../../assets/img/viral.png'

class Recomended extends Component {
  render() {
    return (
      <div className="row padding-h10"> 
        <div className="col-md-6 col-xs-6">
          <img src={Global} alt="" className="full-width"/>
        </div>
        <div className="col-md-6 col-xs-6">
          <img src={viral} alt="" className="full-width"/>
        </div>   
      </div>
    );
  }
}

export default Recomended;
