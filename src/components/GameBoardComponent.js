import React, { Component } from "react";

let winner = false;
let winRow = false;
let winColumn = false;
let winDiagonalLeftRight = false;
let winDiagonalRightLeft = false;

class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ],
      player: "X",
    };
  }

  checkPlay(indexRow, indexCol) {
    //check row
    if (
      this.state.grid[indexRow][0] === this.state.grid[indexRow][1] &&
      this.state.grid[indexRow][0] === this.state.grid[indexRow][2]
    ) {
      winner = true;
      winRow = true;
    }
    //check column
    if (
      this.state.grid[0][indexCol] === this.state.grid[1][indexCol] &&
      this.state.grid[0][indexCol] === this.state.grid[2][indexCol]
    ) {
      winner = true;
      winColumn = true;
    }
    //check diagonals
    if (this.state.grid[1][1] !== null) {
      if (
        this.state.grid[0][0] === this.state.grid[1][1] &&
        this.state.grid[0][0] === this.state.grid[2][2]
      ) {
        winner = true;
        winDiagonalLeftRight = true;
      }
      if (
        this.state.grid[2][0] === this.state.grid[1][1] &&
        this.state.grid[2][0] === this.state.grid[0][2]
      ) {
        winner = true;
        winDiagonalRightLeft = true;
      }
    }
    if (winner) {
      this.renderWinner(indexRow, indexCol);
    }
  }

  handlePlay(indexRow, indexCol) {
    let newGrid = this.state.grid;
    if (this.state.grid[indexRow][indexCol] === null) {
      newGrid[indexRow][indexCol] = this.state.player;
      this.setState({
        grid: newGrid,
        player: this.state.player === "X" ? "0" : "X",
      });
      this.checkPlay(indexRow, indexCol);
    }
  }

  render() {
    const Squares = this.state.grid.map((row, indexRow) =>
      row.map((col, indexCol) => (
        <div
          className="square"
          key={`${indexRow}${indexCol}`}
          onClick={(e) => this.handlePlay(indexRow, indexCol)}
        >
          {col}
        </div>
      ))
    );

    return (
      <div className="container">
        <div className="grid">{Squares}</div>
      </div>
    );
  }
}

export default GameBoard;
