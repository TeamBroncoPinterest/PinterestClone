import React, { Component } from 'react';


import './SinglePin.css';


class SinglePin extends Component {

  render() {
    const data = this.props.data
    let title = ''
    if (data.metadata.article) {
      title = data.metadata.article.name
    } else if (data.metadata.link) {
      title = data.metadata.link.title;
    }
    console.log(this.props);
    return (
      <div className="single-pin-outer-container">
        <div className="single-pin-inner-container">
          <div className="single-pin-pic-container">
            <img className="single-pin-pic" src={data.image.original.url} alt="pin picture" />
            <button className="single-pin-save"><img className="single-pin-save-pin" src="./pics/pin.png" alt="pin"/>Save</button>
            <div className="dimGradient">
              <a><p>Learn more at <span>{data.original_link}</span></p></a>
            </div>
            <a href={data.original_link}><div className="dimOverlay"></div></a>
          </div>
          <div className="single-pin-description-container">
            <p className="single-pin-title">
              {title}
            </p>
            <p className="single-pin-description">
              {data.note}
            </p>
          </div>
          <div className="single-pin-pinner-info">
            <img className="single-pin-pinner-pic" src="./pics/blank-profile.png" alt="pic"/>
            <div className="single-pin-pinner-info-names">
              <p className="single-pin-pinner-name">{data.creator.first_name}&nbsp;{data.creator.last_name}</p>
              <p className="single-pin-board-name">{data.board.name}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}




export default SinglePin;
