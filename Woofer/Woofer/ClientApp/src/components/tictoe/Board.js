import { escapeSelector } from 'jquery';
import React, { Component } from 'react';
import './TicToe.css';



const Board = () => {
    const [squares, setSquares] = React.useState(Array(9).fill(null))

    const nextValue = calculateNextValue(squares)
    const winner = calculateWinner(squares)
    const status = calculateStatus(winner, squares, nextValue)

    function selectSquare(square) {
        if (winner || squares[square]) {
            return
        }
        const squaresCopy = [...squares]
            squaresCopy[square] = nextValue
        setSquares(squaresCopy)
    }

    function restart() {
        setSquares(Array(9).fill(null))
    }

    function imageReturn(i) {
        if (squares[i] == 'dog')
            return <img src={require(`./dogIcon.png`)} alt="gg" height="40" width="30"></img>
        if (squares[i] == 'cat')
            return <img src={require(`./catIcon.png`)} alt="gg" height="40" width="30"></img>
        else
            return null;
    }

    function renderSquare(i) {
        return (
            <button className="square" onClick={() => selectSquare(i)}>
                {imageReturn(i)}
            </button>
        )
    }

    function calculateStatus(winner, squares, nextValue) {
        return winner
            ? `Winner: ${winner}`
            : squares.every(Boolean)
                ? `Draw :|`
                : `Next player: ${nextValue}`
    }

    function calculateNextValue(squares) {
        return squares.filter(Boolean).length % 2 === 0 ?
            'dog'
            :
            'cat'
    }


    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i]
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                console.log(squares[a]);

                return squares[a]
            }
        }
        return null
    }   

    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
            <button className="restart" onClick={restart}>
                restart
            </button>
        </div>
    );

};
export default Board;

