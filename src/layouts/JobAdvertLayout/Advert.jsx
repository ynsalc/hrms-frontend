import React from "react";
import "./Advert.css";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Advert({ advertisement }) {
  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css" integrity="sha256-3sPp8BkKUE7QyPSl6VfBByBroQbKxKG7tsusY2mhbVY=" crossorigin="anonymous" />
      
      
      <div class="job-box d-md-flex align-items-center justify-content-between mb-30">
        <div class="job-left my-4 d-md-flex align-items-center flex-wrap">
          <div class="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
          {advertisement.jobPosition?.name[0]}
          </div>
          <div class="job-content">
          <Link to={`/advertisement/${advertisement.id}`}><h5 class="text-center text-md-left">{advertisement.jobPosition?.name}</h5></Link>
            <ul class="d-md-flex flex-wrap text-capitalize ff-open-sans">
              <li class="mr-md-4">
                <i class="zmdi zmdi-pin mr-2"></i> {advertisement.city?.name}
              </li>
              <li class="mr-md-4">
                <i class="zmdi zmdi-money mr-2"></i> {advertisement.minSalary}{"-"}{advertisement.maxSalary}
              </li>
              <li class="mr-md-4">
                <i class="zmdi zmdi-time mr-2"></i> {advertisement.workType?.workTypeName}{"-"}{advertisement.workTimeType?.workTimeName}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr/>
    </div>
  );
}
