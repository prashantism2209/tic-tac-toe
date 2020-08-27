import React, { Component } from "react";
import Board from "./Board";
export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      step: 0,
      won: false
    };
  }

  handleClick(i) {
    const { squares, step } = this.state;
    const player = step % 2 === 0 ? "X" : "O";
    squares[i] = player;
    if (this.calculateWinner(squares)) {
      this.setState({ won: true });
    } else {
      this.setState({ squares: squares, step: step + 1 });
    }
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return true;
      }
    }
  }
  render() {
    return (
      <div>
        {this.state.won && (
          <div>
            {this.props.steps % 2 === 0 ? "Player X won" : "Player O won"}
          </div>
        )}
        <Board
          squares={this.state.squares}
          onClick={i => this.handleClick(i)}
        />
      </div>
    );
  }
}
