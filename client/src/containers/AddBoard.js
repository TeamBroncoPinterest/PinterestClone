import React, {Component} from 'react';

import './AddBoard.css';

class AddBoard extends Component {
    render() {

        return (
            <div className="add-board-shell-container">
                <div className="add-board-shell">
                    <div className="add-board-outer-container">
                        <div className="add-board-inner-container">
                            <div className="add-board-add-container">
                                <img
                                    alt="plus sign"
                                    src="https://image.ibb.co/nH2FSa/Create_Board_Plus1.png"
                                    className="add-board-add"></img>
                            </div>
                            <div className="add-board-title-container">
                                <p className="add-board-title">Create Board</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddBoard;