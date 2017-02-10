import React, { Component } from 'react';
import Nav from '../shared/Nav'
import Tabs from './Tabs'
import OverView from './OverView'
import Recomended from './Recomended'
import '../../assets/css/home.css'

class Body extends Component {

  constructor(props){
    super(props)
    this.state = {
      overview: true,
      recomended: false,
      categories: false
    }
  }
  setLink(e){
    this.resetLink()
    this.setState({ [e.target.id]: true })
  }
  resetLink(){
    this.setState({
      overview: false,
      recomended: false,
      categories: false
    })
  }
  componentDidMount(){
    var app = document.getElementById('App')
    if(app !== undefined){ app.style.minHeight = window.innerHeight + "px" }
  }
  render() {
    return (
      <div className="home-container" id="App">
        <Nav />
        <Tabs overview={this.state.overview} recomended={this.state.recomended}
          categories={this.state.categories} setLink={this.setLink.bind(this)}/>
        <div className="container-fluid" id="home-container">
          { this.state.overview ? <OverView /> : <Recomended /> }
          <br />
          <Recomended />
        </div>
      </div>
    );
  }
}

export default Body;
