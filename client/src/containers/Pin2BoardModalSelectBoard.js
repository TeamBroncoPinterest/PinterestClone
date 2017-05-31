import React, {Component} from 'react';
import {connect} from 'react-redux';

import './Pin2Board.css'

import BoardDiv from './BoardDiv';

class Pin2BoardSelectBoard extends Component {

    render() {

        let boards = <div></div>
        if (this.props.userBoards.data.boards) {
            boards = this.props.userBoards.data.boards.map((val, ind) => {
                    return <BoardDiv data={val} key={val.name} editBoard={() => this.editBoard()}/>
                })
        }
        return (

            <div className="Pin2Board_rightBox">
                <div>
                    <h3 className="Pin2Board_ChooseBoard">Choose board</h3>
                    <div className="Pin2Board_X" onClick={() => this.props.savePinExit()}></div>

                </div>

                <div className="Pin2Board_LowerRight">
                    <div className="Pin2Board_SearchDiv">
                        <div className="Pin2Board_SearchMag"></div>
                        <input type="text" placeholder="Search" className="Pin2Board_SearchBar"/>
                    </div>
                </div>

                <div className="Pin2Board_BoardScrollBox">
                    <header className="Pin2Board_Header">Existing boards</header>
                    <ul className="Pin2Board_UL">
                        {boards}
                    </ul>
                </div>

                <button
                    onClick={() => this.props.createBoardClick()}
                    className="Pin2Board_CreateBoardButton"><img
                    src="https://image.ibb.co/nH2FSa/Create_Board_Plus1.png"
                    alt=""
                    className="Pin2Board_PlusButton"/>
                    <p className="Pin2Board_CreateBoard">Create board</p>
                </button>

            </div>

        )
    }
}

function mapStateToProps(store) {
    return {userBoards: store.user}
}

export default connect(mapStateToProps)(Pin2BoardSelectBoard);
