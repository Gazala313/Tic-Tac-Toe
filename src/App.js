import React from "react";
import "./app.css";
import GridRow from "./componenet/GridRow.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      boardState: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ],
      turn: "X"
    };
  }
  updateBoard = (row, col) => {
    const arr = this.state.boardState;
    arr[row][col] = this.state.turn;
    this.setState({
      turn: this.state.turn === "X" ? "0" : "X",
      boardState: arr
    });
  };

  render() {
    return (
      <>
        <div className="conatiner">
          {[0, 1, 2].map((row) => {
            return <GridRow index={row} boardState={this.state.boardState}  updateBoard={this.updateBoard} />;
          })}
        </div>
      </>
    );
  }
}

export default App;
