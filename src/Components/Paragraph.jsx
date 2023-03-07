import React from "react";

import { useState } from "react";

const Paragraph = (props) => {
  const [task, setTask] = useState("");

  const handleInput = (e) => {
    setTask(e.target.value);
  };
  console.log(task);

  const handleAdd = () => {
    if (!task) {
      alert("input is empty");
      return;
    }

    const newTask = {
      task: task,
      status: false,
      id: Date.now(),
    };

    props.handleTask(newTask);

    setTask("");
  };

  return (
    <div>
      <h2>Press and show the result</h2>
      <input type="text" onChange={handleInput} />
      <button onClick={handleAdd}>add task</button>
      {props.answers.map((item) => (
        <p>{item.task}</p>
      ))}
    </div>
  );
};

export default Paragraph;
