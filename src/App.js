import React from "react";
import boxes from "./boxes";

export default function App() {
  const [squares, setSquares] = React.useState(boxes);

  const squareElements = squares.map((square) => {
    return <div className="box" key={square.id}></div>;
  });

  return <main>{squareElements}</main>;
}
