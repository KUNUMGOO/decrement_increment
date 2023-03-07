import React, { useState } from "react";
import Counter from "./Components/Counter";
import Paragraph from "./Components/Paragraph";
import Salary from "./Components/Salary";
import "./index.css";
const App = () => {
  const [users, setUsers] = useState([
    { name: "Akyl", surname: "Muratov", days: "35", salaryPerDay: 10 },
    { name: "Asan", surname: "Kasymov", days: "38", salaryPerDay: 20 },
    { name: "Arslan", surname: "Usenov", days: "30", salaryPerDay: 30 },
    { name: "Kanat", surname: "Samatov", days: "25", salaryPerDay: 40 },
    { name: "Bekjan", surname: "Suranov", days: "27", salaryPerDay: 50 },
    { name: "Samat", surname: "Utenov", days: "24", salaryPerDay: 50 },
    { name: "Kairat", surname: "Omuraliev", days: "32", salaryPerDay: 50 },
  ]);
  const [answers, setAnswers] = useState([]);

  function handleTask(task) {
    setAnswers([...answers, task]);
    console.log(answers);
  }
  return (
    <div>
      <Counter />
      <Paragraph handleTask={handleTask} answers={answers} />
      <Salary users={users} />
    </div>
  );
};

export default App;
