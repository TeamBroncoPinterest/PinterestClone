import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './SingleBoard.css';

class SingleBoard extends Component {
    render() {
        const data = this.props.data;
        console.log("data", data);
console.log("data name", data.name); 
        return (
          <div className="single-board-shell-container">
            <div className="single-board-shell">
                <div className="single-board-outer-container">
                    <div className="single-board-inner-container">
                        <Link to="/board"><div className="single-board-pics-container">
                            <img
                              alt=""
                              src={data.img}
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

export default connect(mapStateToProps)(SingleBoard);
