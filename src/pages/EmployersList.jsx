import React, { useState, useEffect } from "react";
import EmployerService from "../services/EmployerService";
import './employers.css'
import { Table } from "reactstrap";
import { Link } from "react-router-dom";

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
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />

      <div className="whos-speaking-area speakers pad100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="title-text mb50">
                  <h2>İş Verenler</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb50">
            {employers.map((employer) => (
              
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                <div className="speakers xs-mb30">
                  <div className="spk-img">
                    <img
                      className="img-fluid"
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      alt="trainer-img"
                    />
                  </div>
                  <div className="spk-info">
                  <Link to={`/employerdetail/${employer.id}`}><h3>{employer.companyName}</h3></Link>
                    <p>{employer.webAdress}</p>
                  </div>
                </div>
              </div>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
