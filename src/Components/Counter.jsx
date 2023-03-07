import React from "react";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [kanykei, setKanykei] = useState({ name: "Kanykei", age: 30 });
  console.log(kanykei);

  function handleAge() {
    let newObj = { ...kanykei, age: kanykei.age + 1 };
    setKanykei(newObj);
  }

  function increment() {
    let inc = { ...kanykei, age: kanykei.age + 1 };
    setKanykei(inc);
  }
  function decrement() {
    let dec = { ...kanykei, age: kanykei.age - 1 };
    setKanykei(dec);
  }
  return (
    <div>
      <h1>{kanykei.age}</h1>
      <button onClick={increment}>increment age</button>
      <button onClick={decrement}>decrement age</button>
    </div>
  );
};

export default Counter;
