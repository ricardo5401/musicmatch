import React, { Component } from 'react'
import Global from '../../assets/img/global.png'
import viral from '../../assets/img/viral.png'
import { Link } from 'react-router'

class Recomended extends Component {
  render() {
    const style = {
      height: this.props.width + 'px' || '100%'
    }
    return (
      <div className="row padding-h10"> 
        <div className="col-md-6 col-xs-6">
          <Link to={{ pathname: "/profile", query: { ramdom:"true" } }}>
            <img src={Global} alt="" className="full-width card-img" style={style}/>
          </Link>
        </div>
        <div className="col-md-6 col-xs-6">
          <Link to={{ pathname: "/profile", query: { ramdom:"true" } }}>
            <img src={viral} alt="" className="full-width card-img" style={style}/>
          </Link>
        </div>   
      </div>
    );
  }
}

export default Recomended;
