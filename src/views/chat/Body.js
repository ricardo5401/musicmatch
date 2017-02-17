import React, { Component } from 'react'
import '../../assets/css/chat.css'
import { getUser } from '../../config/staticUsers'
import userIMG from '../../assets/img/default_user.jpg'
import Message from './Message'

class Body extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: getUser(this.props.params.id),
      messages: [
        {
          user: getUser(this.props.params.id),
          msg: 'Holis, como estas?',
          className: 'other'
        }
      ]
    }
  }
  updateDimensions(){
    var app = document.getElementById('App')
    if(app !== undefined){ app.style.minHeight = window.innerHeight + "px" }
  }
  componentWillMount(){
    console.log(this.props.params.id)
  }
  componentDidMount(){
    this.updateDimensions()
    window.addEventListener("resize", this.updateDimensions.bind(this))
    window.addEventListener("orientationchange", this.updateDimensions.bind(this))
  }
  _handleKeyPress(e){
    if (e.key === 'Enter') {
      var messages = this.state.messages
      messages.push({ user: { picture: userIMG },msg: e.target.value, className: 'self' })
      this.setState({ messages: messages })
      e.target.value = ''
    }
  }
  render() {
    var user = this.state.user
    var messages = this.state.messages.map((mensaje, i) => <Message key={i} user={mensaje.user} 
          message={mensaje.msg} className={mensaje.className}/>);
    return (
      <div id="App" className="chat-container">

        <div className="menu">
          <div className="back"><i className="fa fa-angle-left"></i> 
            <img src={ user.picture } draggable="false"/>
          </div>
          <div className="name">{ user.name }</div>
          <div className="last">Activo</div>
        </div>
        <ol className="chat">
          { messages }
        </ol>
      <input className="textarea" type="text" placeholder="Type here!" onKeyPress={this._handleKeyPress.bind(this)}/>
      <div className="emojis"></div>
    </div>
    );
  }
}

export default Body;
