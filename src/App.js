import React from "react";
import boxes from "./boxes";
import Box from "./Box";

export default function App(props) {
  const [squares, setSquares] = React.useState(boxes);

  const squareElements = squares.map((square) => {
    return <Box key={square.id} on={square.on} />;
  });

  return <main>{squareElements}</main>;
}
