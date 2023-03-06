import React, { Component } from 'react';
import './TicToe.css';
import Board from "./Board.js";

const Game = () =>  {
    return (
        <div className="game">
            <div className="game-board">
                <Board />
            </div>
        </div>
    )
}
export default Game;