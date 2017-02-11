import React, { Component } from 'react'

class PlayList extends Component {

  render() {

    var play = this.props.play || { music: 'El Amante', author: 'Nicky Jam' }

    return (
      <div className="full-width">
        <hr className="play-divider" />
        <div className="list-container">
          <div className="inline">
            <div className="music-text">{ play.music }</div>
            <div className="author-text">{ play.author }</div>
          </div>
          <button type="button" className="circle-button xxs pull-right">
            <i className="fa fa-play"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default PlayList;
