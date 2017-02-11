import React, { Component } from 'react'
import Rock from '../../assets/img/rock.png'
import Party from '../../assets/img/party.png'

class Around extends Component {
  render() {
    const style = {
      height: this.props.width + 'px' || '100%'
    }
    return (
      <div className="row padding-h10"> 
        <div className="col-md-6 col-xs-6">
          <img src={Rock} alt="" className="full-width card-img" style={style}/>
        </div>
        <div className="col-md-6 col-xs-6">
          <img src={Party} alt="" className="full-width card-img" style={style}/>
        </div>   
      </div>
    );
  }
}

export default Around;
