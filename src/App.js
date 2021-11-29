import React from "react";
import GameBoard from "./components/GameBoardComponent";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Tic Tac Toe in React</h1>
      </header>
      Start the game cliking at any square
      <div className="player">X</div>
      <div className="player">O</div>
      <GameBoard />
    </div>
  );
}

/*
board of the game is a simple matrix with 3 rows and 3 columns, can be 
represented as an array - each row contains 3 columns
const grid = [
              [col, col, col], -> row
              [null, null, null], -> row
              [null, null, null] -> row                
              ] 
*/
/* this array can be created by a function intead to be hard code */

/*function generateGrid(rows, columns, mapper) {
  // fill(value, start, end) - fill an array with a static value from 'start' position to 'end' position
  // start - default 0, end default array length
  return Array(rows)
    .fill()
    .map(() => Array(columns).fill().map(mapper));
}

const newTicTacToeGrid = () =>
  generateGrid(
    3,
    3,
    () => "bla " // mapping function, what we want in each position (value of the fill function)
  );

function Game() {
  const renderGrid = () => {
    //const grid = newTicTacToeGrid();
    const grid = [
      ["pos1.1", "pos1.2", "pos1.3"],
      ["pos2.1", "pos2.2", "pos2.3"],
      ["pos3.1", "pos3.2", "pos3.3"],
    ];
    return grid.map(function (row) {
      return row.map(function (col) {
        return <div className="col position">{col}</div>;
      });
    });
  };
  return <div>{renderGrid()}</div>;
}*/

export default App;
