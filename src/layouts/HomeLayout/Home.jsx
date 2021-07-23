import React, { useState, useEffect } from "react";
import SlideDesign from "../BannerLayout/Banner";
import Banner from "../SlideDesign";
import { Card, Button, CardTitle, CardText } from "reactstrap";
import EmployerService from "../../services/EmployerService";
import CandidateService from "../../services/CandidateService";
import JobAdvertisementService from "../../services/JobAdvertisementService";
import EmployerList from '../../pages/EmployersList'
import JovAdvertisement from '../../pages/JobAdvertisement'
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
 /*const [candidates, setCandidates] = useState([]);
  const [employers, setEmployers] = useState([]);
  const [adverts, setAdverts] = useState([]);
  useEffect(() => {
    let candidateService = new CandidateService();
    let employerService = new EmployerService();
    let advertService = new JobAdvertisementService();
    candidateService
        .getCandidates()
        .then((result) => setCandidates(result.data.data));
        employerService
        .getEmployers()
        .then((result) => setEmployers(result.data.data));
        advertService
        .getJobAdvertisements()
        .then((result) => setAdverts(result.data.data));
    return () => {
      
    };
  }, [candidates,employers,adverts]);

  console.log(candidates.firstName)

  /*const [employers, setEmployers] = useState([]);
  useEffect(() => {
    let employerService = new EmployerService();
    return () => {
      employerService
        .getEmployers()
        .then((result) => setEmployers(result.data.data));
    };
  }, []);

  const [adverts, setAdverts] = useState([]);
  useEffect(() => {
    let advertService = new JobAdvertisementService();
    return () => {
      advertService
        .getJobAdvertisements()
        .then((result) => setAdverts(result.data.data));
    };
  }, []);*/

  return (
    <div>
      <SlideDesign />
      <Banner />
      <div className="container">
        <br />
        <JovAdvertisement />
        <br />
        <EmployerList />
      </div>
    </div>
  );
}
