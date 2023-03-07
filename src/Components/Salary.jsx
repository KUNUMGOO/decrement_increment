import React from "react";

const Salary = ({ users }) => {
  console.log(users);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Surname</td>
            <td>Days</td>
            <td>SalaryPerDay:</td>
            <td>TotalSalary:</td>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item.days}>
              <td>{item.name}</td>
              <td>{item.surname}</td>
              <td>{item.days}</td>
              <td>{item.salaryPerDay}</td>
              <td>{item.totalSalary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Salary;
