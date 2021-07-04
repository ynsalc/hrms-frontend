import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import CandidateService from "../services/CandidateService";

export default function CandidateList() {
    const [candidates,setCandidates] = useState([])

    useEffect(() => {
        let candidateService = new CandidateService()
        candidateService.getCandidates().then((result) => setCandidates(result.data.data))
    }, [])

  return (
    <div>
      <div className="container mt-2">
        <h3>İş Arayanlar</h3>
        <Table className="mt-2" bordered>
          <thead>
            <tr>
              <th>Mail Adresi</th>
              <th>Şifresi</th>
              <th>Doğum Tarihi</th>
              <th>Adı</th>
              <th>Soyadı</th>
              <th>Tc Numarası</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate) => (
              <tr>
                <td>{candidate.email}</td>
                <td>{candidate.password}</td>
                <td>{candidate.birthDate}</td>
                <td>{candidate.firstName}</td>
                <td>{candidate.lastName}</td>
                <td>{candidate.identityNumber}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
