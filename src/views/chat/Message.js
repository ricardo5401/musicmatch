import React, { Component } from 'react'

class Message extends Component {
  render() {
    const className = this.props.className || 'other'
    return (
      <li className={className}>
        <div className="avatar"><img src={this.props.user.picture} draggable="false"/></div>
        <div className="msg">
          <p>{ this.props.message }</p>
          <time>20:17</time>
        </div>
      </li>
    );
  }
}

export default Message;
