import React from "react";
import { createRoot } from "react-dom/client";

class Counter extends React.Component {
  render() {
    return <h1>Hello World</h1>;
  }
}

const root = createRoot(document.getElementById("root")!);
root.render(<Counter />);

const isInstanceOfCounter = new Counter({}) instanceof React.Component;
console.log(isInstanceOfCounter);
