import React, { Component } from 'react'
import logo from '../../assets/img/logoMusic.png'
import {Link} from 'react-router'
import '../../assets/css/nav.css'

class Nav extends Component {
	render(){

		return(
			<nav className="navbar navbar-fixed-top">
				<div className="container-fluid">
					<div className="navbar-header">
						<Link to={"/"} className="nav-brand linked">
							<img src={logo} alt="logo" className="nav-logo" />
						</Link>
					</div>
				</div>
			</nav>
		);
	}
}

export default Nav;