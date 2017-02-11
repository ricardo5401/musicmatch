import React, { Component } from 'react'
import '../../assets/css/switch.css'

class Switch extends Component {

  constructor(props){
    super(props)
    this.state = {
      isChecked: this.props.checked
    }
  }
  empty(){
    console.log('not defined');
  }

  toogleChecked(e){
    var state = !this.state.isChecked
    this.setState({ isChecked: state })
  }

	render(){
		return(
			<div className="onoffswitch" onClick={this.toogleChecked.bind(this)}>
        <input type="checkbox" name="onoffswitch" onChange={this.empty()}
        className="onoffswitch-checkbox" checked={this.state.isChecked}/>
        <label className="onoffswitch-label">
          <span className="onoffswitch-inner"></span>
          <span className="onoffswitch-switch"></span>
        </label>
      </div>
		);
	}
}

export default Switch;