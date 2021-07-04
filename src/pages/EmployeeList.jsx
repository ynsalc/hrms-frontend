import React, { useState, useEffect } from "react";
import EmployeeService from "../services/EmployeeService";
import { Table } from "reactstrap";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    let employeeService = new EmployeeService();
    employeeService
      .getEmployees()
      .then((result) => setEmployees(result.data.data));
  }, []);

  return (
    <div>
      <div className="container mt-2">
        <h3>Çalışanlar</h3>
        <Table className="mt-2" bordered>
          <thead>
            <tr>
              <th>Mail Adresi</th>
              <th>Şifresi</th>
              <th>Adı</th>
              <th>Soyadı</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr>
                <td>{employee.email}</td>
                <td>{employee.password}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
