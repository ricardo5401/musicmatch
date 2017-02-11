import React, { Component } from 'react'

class Tabs extends Component {
  addClass(value){
    return value ? 'active' : ''
  }
  render() {
    return (
      <div className="tab-container">
        <div className="tab">
          <a href="#" id="overview" className={this.addClass(this.props.overview)}
          onClick={this.props.setLink.bind(this)}>Overview</a>
        </div>
        <div className="tab">
          <a href="#" id="recomended" className={this.addClass(this.props.recomended)}
          onClick={this.props.setLink.bind(this)}>Recomendado</a>
        </div>
        <div className="tab">
          <a href="#" id="categories" className={this.addClass(this.props.categories)}
          onClick={this.props.scrollToSecondBlock.bind(this)}>Categorias</a>
        </div>        
      </div>
    );
  }
}

export default Tabs;
