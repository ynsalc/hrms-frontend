import React, { useState, useEffect } from "react";
import EmployerService from "../services/EmployerService";
import { Table } from "reactstrap";

export default function EmployersList() {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getEmployers()
      .then((result) => setEmployers(result.data.data));
  }, []);

  return (
    <div>
      <div className="container mt-2">
        <h3>İş Verenler</h3>
        <Table className="mt-2" bordered>
          <thead>
            <tr>
              <th>Şirket İsmi</th>
              <th>Mail Adresi</th>
              <th>İletişim</th>
              <th>Web Adresi</th>
            </tr>
          </thead>
          <tbody>
            {employers.map((employer) => (
              <tr>
                <td>{employer.companyName}</td>
                <td>{employer.email}</td>
                <td>{employer.phoneNumber}</td>
                <td>{employer.webAdress}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
