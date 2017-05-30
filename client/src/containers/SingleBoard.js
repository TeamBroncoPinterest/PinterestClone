import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './SingleBoard.css';

class SingleBoard extends Component {
    render() {

        return (
          <div className="single-board-shell-container">
            <div className="single-board-shell">
                <div className="single-board-outer-container">
                    <div className="single-board-inner-container">
                        <Link to="/board"><div className="single-board-pics-container">
                            <img
                              alt="pin image"
                              src="https://s-media-cache-ak0.pinimg.com/564x/8b/f9/e9/8bf9e9b5cc776852497cd22604afcf5b.jpg"
                              className="single-board-pic"
                            />
                        </div></Link>
                        <div className="single-board-description-edit-container">
                            <p className="single-board-title">Board Name</p>
                            <button className="single-board-edit">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        )
    }
}

export default SingleBoard;
