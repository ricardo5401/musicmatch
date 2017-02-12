import React, { Component } from 'react'

class Button extends Component {
  render() {

    return (
      <div className="full-width center-text">
        <button type="button" className="circle-button xs"><i className="fa fa-ban"></i></button>
        <button type="button" className="circle-button" onClick={this.props.nextProfile.bind(this)}>
          <i className="fa fa-times" style={{ fontSize: '25px' }}></i>
        </button>
        <button type="button" className="circle-button" onClick={this.props.nextProfile.bind(this)}>
          <i className="fa fa-heart" style={{ marginTop: '2.5px' }}></i>
        </button>
        <button type="button" className="circle-button xs"><i className="fa fa-star"></i></button>
      </div>
    );
  }
}

export default Button;
