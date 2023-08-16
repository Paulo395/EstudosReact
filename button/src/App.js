import React from "react";
import "./styles.css";

import SwitchSelector from "react-switch-selector";

const options = [
  {
    label: "Alugar",
    value: "rent",
    selectedBackgroundColor: "#0097e6",
    innerHeight: 50
  },
  {
    label: "Comprar",
    value: "purchase",
    selectedBackgroundColor: "#fbc531"
  }
];

const onChange = (newValue) => {
  console.log(newValue);
};

const initialSelectedIndex = 1;

export default function App() {
  return (
    <div className="App">
      <h1>Hello React Swtich</h1>
      <h2>Simple example with React Switch!</h2>
      <SwitchSelector
          onChange={onChange}
          options={options}
          // initialSelectedIndex={initialSelectedIndex}
      />
    </div>
  );
}
