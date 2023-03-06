import React, { Component } from 'react';
import './TicToe.css';
import Game from "./Game.js";

export class TicToe extends Component {
    static displayName = TicToe.name;

    render() {
        return  <Game/>
    }
}




