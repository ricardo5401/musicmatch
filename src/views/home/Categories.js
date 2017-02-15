import React, { Component } from 'react'
import Trending from '../../assets/img/categories/trending.png'
import Hiphop from '../../assets/img/categories/HipHop.jpeg'
import Classic from '../../assets/img/categories/Clasica.jpeg'
import Dance from '../../assets/img/categories/Dance.jpeg'
import Romantic from '../../assets/img/romantic.png'
import Pop from '../../assets/img/pop.png'
import Indie from '../../assets/img/categories/indie.png'
import Rock from '../../assets/img/rock.png'
import Party from '../../assets/img/party.png'
import Latin from '../../assets/img/categories/Latino.jpeg'
import { Link } from 'react-router'

class Around extends Component {
  render() {
    const style = {
      height: this.props.width + 'px' || '100%'
    }
    return (
      <div>
        <div className="row padding-h10"> 
          <div className="col-md-6 col-xs-6">
            <Link to={{ pathname: "/profile", query: { ramdom:"true" } }}>
              <img src={Trending} alt="" className="full-width card-img" style={style}/>
            </Link>
          </div>
          <div className="col-md-6 col-xs-6">
            <Link to={{ pathname: "/profile", query: { ramdom:"true" } }}>
              <img src={Hiphop} alt="" className="full-width card-img" style={style}/>
            </Link>
          </div>  
        </div>
        <br />
        <div className="row padding-h10">
          <div className="col-md-6 col-xs-6">
            <Link to={{ pathname: "/profile", query: { ramdom:"true" } }}>
              <img src={Classic} alt="" className="full-width card-img" style={style}/>
            </Link>
          </div>
          <div className="col-md-6 col-xs-6">
            <Link to={{ pathname: "/profile", query: { ramdom:"true" } }}>
              <img src={Dance} alt="" className="full-width card-img" style={style}/>
            </Link>
          </div> 
        </div>
        <br />
        <div className="row padding-h10">
          <div className="col-md-6 col-xs-6">
            <Link to={{ pathname: "/profile", query: { ramdom:"true" } }}>
              <img src={Romantic} alt="" className="full-width card-img" style={style}/>
            </Link>
          </div>
          <div className="col-md-6 col-xs-6">
            <Link to={{ pathname: "/profile", query: { ramdom:"true" } }}>
              <img src={Pop} alt="" className="full-width card-img" style={style}/>
            </Link>
          </div> 
        </div>
        <br />
        <div className="row padding-h10">
          <div className="col-md-6 col-xs-6">
            <Link to={{ pathname: "/profile", query: { ramdom:"true" } }}>
              <img src={Indie} alt="" className="full-width card-img" style={style}/>
            </Link>
          </div>
          <div className="col-md-6 col-xs-6">
            <Link to={{ pathname: "/profile", query: { ramdom:"true" } }}>
              <img src={Rock} alt="" className="full-width card-img" style={style}/>
            </Link>
          </div> 
        </div>
        <br />
        <div className="row padding-h10">
          <div className="col-md-6 col-xs-6">
            <Link to={{ pathname: "/profile", query: { ramdom:"true" } }}>
              <img src={Party} alt="" className="full-width card-img" style={style}/>
            </Link>
          </div>
          <div className="col-md-6 col-xs-6">
            <Link to={{ pathname: "/profile", query: { ramdom:"true" } }}>
              <img src={Latin} alt="" className="full-width card-img" style={style}/>
            </Link>
          </div> 
        </div>
        <br />
      </div>
    );
  }
}

export default Around;
