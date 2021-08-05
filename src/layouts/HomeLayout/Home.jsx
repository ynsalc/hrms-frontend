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
