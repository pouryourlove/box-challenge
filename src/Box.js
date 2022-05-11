import React from "react";

export default function box(props) {
  const styles = {
    backgroundColor: props.on ? "#222222" : "transparent",
  };
  return (
    <div
      style={styles}
      className="box"
      onClick={() => props.toggle(props.id)}
    ></div>
  );
}
