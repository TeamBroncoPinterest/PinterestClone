import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectBoard } from '../actions/userActions'
import './SingleBoard.css';

class SingleBoard extends Component {
  selectBoard = () => {
    this.props.selectBoard(this.props.data)
  }
    render() {
        const data = this.props.data;
        const pins = data.pins[0] ? data.pins[0].image.original.url : '';
        return (
          <div className="single-board-shell-container">
            <div className="single-board-shell">
                <div className="single-board-outer-container" onClick={() => this.selectBoard()}>
                    <div className="single-board-inner-container">
                        <Link to="/board" ><div className="single-board-pics-container">
                            <img
                              alt=""
                              src={pins}
                              className="single-board-pic"
                            />
                        </div></Link>
                        <div className="single-board-description-edit-container">
                            <p className="single-board-title">{data.name}</p>
                            <button className="single-board-edit" onClick={() => this.props.editBoard()}>Edit</button>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        )
    }
}

function mapStateToProps(store) {
    return {user: store.user}
}

export default connect(mapStateToProps, {selectBoard} )(SingleBoard);
