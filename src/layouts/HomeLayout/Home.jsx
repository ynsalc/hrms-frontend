import { React, useEffect, useState } from "react";
import SlideDesign from "../BannerLayout/Banner";
import Banner from "../SlideDesign";
import { Card, Button, CardTitle, CardText } from "reactstrap";
import EmployerService from "../../services/EmployerService";
import CandidateService from "../../services/CandidateService";
import "./Home.css";

export default function Home() {
  const [candidates, setCandidates] = useState([]);
  useEffect(() => {
    let candidateService = new CandidateService();
    return () => {
      candidateService
        .getCandidates()
        .then((result) => setCandidates(result.data.data));
    };
  }, []);

  const [employers, setEmployers] = useState([]);
  useEffect(() => {
    let employerService = new EmployerService();
    return () => {
      employerService
        .getEmployers()
        .then((result) => setEmployers(result.data.data));
    };
  }, []);

  return (
    <div>
      <SlideDesign />
      <Banner />
      <div className="container">
        <br />
        <h4>İş Verenler</h4>
        <div className="row">
          {employers?.map((employer) => (
            <Card body>
              <div className="row">
                <div className="col-1">
                  <img
                    src="https://avatars.githubusercontent.com/u/78280857?v=4"
                    className="profile-picture"
                  />
                </div>
                <div className="col-11">
                  <CardTitle tag="h5">{employer.companyName}</CardTitle>
                  <CardText>
                      {employer.email}<br/>
                      {employer.webAdress}
                  </CardText>
                  <br />
                </div>
              </div>
              <Button className="btn-color-theme">İş Veren Detayı</Button>
            </Card>
          ))}
        </div>
        <br />
        <h4>İş Arayanlar</h4>
        <div className="row">
          {candidates?.map((candidate) => (
            <Card body>
              <div className="row">
                <div className="col-3">
                  <img
                    src="https://avatars.githubusercontent.com/u/78280857?v=4"
                    className="profile-picture"
                  />
                </div>
                <div className="col-9">
                  <CardTitle tag="h5">
                    {candidate.firstName} {candidate.lastName}
                  </CardTitle>
                  <CardText>{candidate.email}</CardText>
                  <br />
                </div>
              </div>
              <Button className="btn-color-theme">Cvsini Gör</Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
