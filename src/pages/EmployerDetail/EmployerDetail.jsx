import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import './EmployerDetail.css'
import EmployerService from '../../services/EmployerService'

export default function EmployerDetail() {
  let { id } = useParams();

  const [employer, setEmployer] = useState({})

  useEffect(() => {
    let employerService = new EmployerService()
    employerService.getById(id).then((result) => setEmployer(result.data.data))
    return () => {
    }
  }, [])  
  return (
    <div>
      <section class="section about-section gray-bg" id="about">
        <div class="container">
          <div class="row align-items-center flex-row-reverse">
            <div class="col-lg-6">
              <div class="about-text go-to">
                <h3 class="dark-color">{employer.companyName}</h3>
                <h6 class="theme-color lead">
                  Software Solutions
                </h6>
                <div class="row about-list">
                  <div class="col-md-12">
                    <div class="media">
                      <label>E-Mail</label>
                      <p>{employer.email}</p>
                    </div>
                    <div class="media">
                      <label className="col-md-3 pl-0">Web Adress</label>
                      <p>{employer.webAdress}</p>
                    </div>
                    <div class="media">
                      <label className="col-md-3 pl-0">Phone Number</label>
                      <p>{employer.phoneNumber}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="about-avatar">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  title=""
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="counter">
            <div class="row">
              <div class="col-6 col-lg-3">
                <div class="count-data text-center">
                  <h6 class="count h2" data-to="500" data-speed="500">
                    500
                  </h6>
                  <p class="m-0px font-w-600">Happy Clients</p>
                </div>
              </div>
              <div class="col-6 col-lg-3">
                <div class="count-data text-center">
                  <h6 class="count h2" data-to="150" data-speed="150">
                    150
                  </h6>
                  <p class="m-0px font-w-600">Project Completed</p>
                </div>
              </div>
              <div class="col-6 col-lg-3">
                <div class="count-data text-center">
                  <h6 class="count h2" data-to="850" data-speed="850">
                    850
                  </h6>
                  <p class="m-0px font-w-600">Photo Capture</p>
                </div>
              </div>
              <div class="col-6 col-lg-3">
                <div class="count-data text-center">
                  <h6 class="count h2" data-to="190" data-speed="190">
                    190
                  </h6>
                  <p class="m-0px font-w-600">Telephonic Talk</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
