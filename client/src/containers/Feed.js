import React, { Component } from 'react';
import { connect } from 'react-redux';
import SinglePin from './SinglePin'

import './Feed.css';


class Feed extends Component {
  render() {
    let pins = <div>no feed :(</div>
    if (this.props.feed.feed.data){
        pins = this.props.feed.feed.data.map((val, ind) => {
        return <SinglePin data={val} key={val.id} />
      })
    }


    return (
      <div className='feedWrapper'>
        <div className="feed">{pins}</div>
      </div>
    )
  }
}

function mapStateToProps(store) {
  return {
    feed: store.feed
  }
}

export default connect(mapStateToProps)(Feed);
