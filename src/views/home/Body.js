import React, { Component } from 'react';
import Nav from '../shared/Nav'
import Tabs from './Tabs'
import OverView from './OverView'
import Recomended from './Recomended'
import Around from './Around'
import Categories from './Categories'
import Scroll from 'react-scroll'
import '../../assets/css/home.css'

class Body extends Component {

  constructor(props){
    super(props)
    this.state = {
      overview: true,
      recomended: false,
      categories: false,
      width: 172
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
  updateDimensions(){
    var height = document.getElementById('piloto').width;
    if(height > 0){ this.setState({ width: height }) }
  }
  componentDidMount(){
    var app = document.getElementById('App')
    if(app !== undefined){ app.style.minHeight = window.innerHeight + "px" }
    this.updateDimensions()
    window.addEventListener("resize", this.updateDimensions.bind(this))
    window.addEventListener("orientationchange", this.updateDimensions.bind(this))
  }
  scrollToSecondBlock(e){
    e.preventDefault()
    e.target.blur()
    var scroller = Scroll.scroller
    scroller.scrollTo('second-block', {
      duration: 800,
      delay: 100,
      smooth: true,
      offset: -50
    })
    setTimeout(function() {
      var overview = document.getElementById('overview')
      if(overview !== undefined){ overview.click() }
    }, 100)
  }
  render() {
    var Element = Scroll.Element;
    return (
      <div className="home-container purple-container" id="App">
        <Nav purple={true}/>
        <Tabs overview={this.state.overview} recomended={this.state.recomended}
          categories={this.state.categories} setLink={this.setLink.bind(this)}
          scrollToSecondBlock={this.scrollToSecondBlock.bind(this)}/>
        <div className="container-fluid" id="home-container">
          { 
            this.state.overview ? <OverView width={this.state.width} /> : 
            <Recomended width={this.state.width} /> 
          }
          <br />
          <div className="text-divider left-divider">Escuchando cerca de tí</div>
          <Around width={this.state.width}/>
          <Element name="second-block" id="second-block" className="home-second-block" />
          <div className="text-divider left-divider">Categorias</div>
          <Categories width={this.state.width}/>
        </div>
      </div>
    );
  }
}

export default Body;
