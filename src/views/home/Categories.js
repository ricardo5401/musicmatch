import React, { Component } from 'react'
import Trending from '../../assets/img/trending.png'
import Hiphop from '../../assets/img/hiphop.png'
import Classic from '../../assets/img/clasic.png'
import Dance from '../../assets/img/dance.png'
import Romantic from '../../assets/img/romantic.png'
import Pop from '../../assets/img/pop.png'
import Indie from '../../assets/img/indie.png'
import Rock from '../../assets/img/rock.png'
import Party from '../../assets/img/party.png'
import Latin from '../../assets/img/latin.png'

class Around extends Component {
  render() {
    const style = {
      height: this.props.width + 'px' || '100%'
    }
    return (
      <div>
        <div className="row padding-h10"> 
          <div className="col-md-6 col-xs-6">
            <img src={Trending} alt="" className="full-width card-img" style={style}/>
          </div>
          <div className="col-md-6 col-xs-6">
            <img src={Hiphop} alt="" className="full-width card-img" style={style}/>
          </div>  
        </div>
        <br />
        <div className="row padding-h10">
          <div className="col-md-6 col-xs-6">
            <img src={Classic} alt="" className="full-width card-img" style={style}/>
          </div>
          <div className="col-md-6 col-xs-6">
            <img src={Dance} alt="" className="full-width card-img" style={style}/>
          </div> 
        </div>
        <br />
        <div className="row padding-h10">
          <div className="col-md-6 col-xs-6">
            <img src={Romantic} alt="" className="full-width card-img" style={style}/>
          </div>
          <div className="col-md-6 col-xs-6">
            <img src={Pop} alt="" className="full-width card-img" style={style}/>
          </div> 
        </div>
        <br />
        <div className="row padding-h10">
          <div className="col-md-6 col-xs-6">
            <img src={Indie} alt="" className="full-width card-img" style={style}/>
          </div>
          <div className="col-md-6 col-xs-6">
            <img src={Rock} alt="" className="full-width card-img" style={style}/>
          </div> 
        </div>
        <br />
        <div className="row padding-h10">
          <div className="col-md-6 col-xs-6">
            <img src={Party} alt="" className="full-width card-img" style={style}/>
          </div>
          <div className="col-md-6 col-xs-6">
            <img src={Latin} alt="" className="full-width card-img" style={style}/>
          </div> 
        </div>
        <br />
      </div>
    );
  }
}

export default Around;
