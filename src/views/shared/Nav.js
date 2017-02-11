import React, { Component } from 'react'
import logo from '../../assets/img/logoMusic.png'
import userIMG from '../../assets/img/default_user.jpg'
import {Link} from 'react-router'
import '../../assets/css/nav.css'

class Nav extends Component {
	render(){
		const userLink = (
				<div className="pull-right">
					<Link to={"/settings"} className="linked">
						<img src={userIMG} alt="logo" className="nav-user" />
					</Link>
				</div>
			);
		const navLink = (
				<Link to={"/home"} className="nav-brand linked">
					<img src={logo} alt="logo" className="nav-logo" />
				</Link>
			);
		const showUser = this.props.showUser !== undefined ? this.props.showUser : true
		const navText = this.props.navText || 'Explora'
		const navClass = this.props.className || ''

		return(
			<nav className="navbar navbar-fixed-top">
				<div className="container-fluid center-text">
					<div className="navbar-header pull-left">
					{ this.props.navLink !== undefined ? this.props.navLink : navLink }
					</div>
					<div className={"inline nav-text " + navClass }>{ navText }</div>
					{ showUser ? userLink : null }
				</div>
			</nav>
		);
	}
}

export default Nav;