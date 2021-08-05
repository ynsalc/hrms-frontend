import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./EmployerDetail.css";
import EmployerService from "../../services/EmployerService";
import JobAdvertisementService from "../../services/JobAdvertisementService";
import { Link } from "react-router-dom";

export default function EmployerDetail() {
  let { id } = useParams();

  const [employer, setEmployer] = useState({});
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    let advertService = new JobAdvertisementService();
    employerService.getById(id).then((result) => setEmployer(result.data.data));
    advertService
      .getByEmployerId(id)
      .then((result) => setAdverts(result.data.data));
    return () => {};
  }, []);
  return (
    <div>
      <section class="section about-section gray-bg" id="about">
        <div class="container">
          <div class="row align-items-center flex-row-reverse">
            <div class="col-lg-6">
              <div class="about-text go-to">
                <h3 class="dark-color">{employer.companyName}</h3>
                <h6 class="theme-color lead">Software Solutions</h6>
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
                  {adverts.length}
                  </h6>
                  <p class="m-0px font-w-600">Paylaşılan İş İlanları</p>
                </div>
              </div>
              <div class="col-6 col-lg-3">
                <div class="count-data text-center">
                  <h6 class="count h2" data-to="500" data-speed="500">
                    <button className="btn btn-info">İş İlanı Oluştur</button>
                  </h6>
                  <p class="m-0px font-w-600">İş ilanı oluşturarak istihdam oluştur.</p>
                </div>
              </div>
              <div class="col-6 col-lg-3">
                <div class="count-data text-center">
                  <h6 class="count h2" data-to="500" data-speed="500">
                    <button className="btn btn-primary">Bilgilerini Güncelle</button>
                  </h6>
                  <p class="m-0px font-w-600">Bilgilerin personel onayından sonra güncellenecektir.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <h3 className="dark-color mb-2">İş Verene Ait İlanlar</h3><br />
        <div class="row">
          {adverts.map((advert) => (
            <div class="col-3 mb-3">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{advert.jobPosition?.name}</h5>
                  <p class="card-text">{advert.description}</p>
                  <Link to={`/advertisement/${advert.id}`}>
                    <a href="#" class="btn btn-primary">
                      Detaya Git
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
