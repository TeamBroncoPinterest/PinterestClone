import React, { Component } from 'react';
import { connect } from 'react-redux';
import SinglePin from './SinglePin';
import axios from 'axios';
import './Feed.css';


class Feed extends Component {

  getMore = () => {
    if(this.props.feed.feed.data) {
      axios.post('/api/pins', this.props.feed.feed.data)
        .then(() => {
          console.log('good');
          if(this.props.feed.feed.hasNext) {
            this.props.feed.feed.next();
          }
        })
        .catch(() => {
          console.log('error');
        })
    }

  }

  render() {
    console.log(this.props.feed.feed);
    let pins = <div>no feed :(</div>
    if (this.props.feed.feed.data){
        pins = this.props.feed.feed.data.map((val, ind) => {
        return <SinglePin data={val} key={val.id} />
      })
    }


    return (
      <div className='feedWrapper'>
        <button onClick={this.getMore}>More</button>
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
