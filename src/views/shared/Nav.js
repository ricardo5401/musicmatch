import React, { Component } from 'react'
import logo from '../../assets/img/logoMusic.png'
import userIMG from '../../assets/img/default_user.jpg'
import {Link} from 'react-router'
import '../../assets/css/nav.css'

class Nav extends Component {
	render(){

		return(
			<nav className="navbar navbar-fixed-top">
				<div className="container-fluid center-text">
					<div className="navbar-header pull-left">
						<Link to={"/home"} className="nav-brand linked">
							<img src={logo} alt="logo" className="nav-logo" />
						</Link>
					</div>
					<div className="inline nav-text">Explora</div>
					<div className="pull-right">
						<Link to={"/home"} className="linked">
							<img src={userIMG} alt="logo" className="nav-user" />
						</Link>
					</div>
				</div>
			</nav>
		);
	}
}

export default Nav;