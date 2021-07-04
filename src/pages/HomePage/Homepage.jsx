import React, { useState, useEffect } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./HomePage.css";
import Advert from "../../layouts/JobAdvertLayout/Advert";
import Filter from "../../layouts/FilterLayout/Filter";
import { Link } from "react-router-dom";
import JobAdvertisementService from "../../services/JobAdvertisementService";

export default function Homepage() {

  const [adverts,setAdverts] = useState([])
  useEffect(() => {
    let advertService = new JobAdvertisementService()
    advertService.getJobAdvertisements().then((result) => setAdverts(result.data.data))
  }, [])

  return (
    <div>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-3 d-none d-lg-block">
            <strong>
              <h4 className="font-weight-bold primary-color-text">Filtreler</h4>
            </strong>
            <Filter />
          </div>
          <div className="col-lg-9">
            <strong>
              <h4 className="font-weight-bold primary-color-text">İlanlar</h4>
            </strong>

            <div className="advertisements">
              <ul className="component--job-items">
                {adverts.map((advert) => (
                  <Advert key={advert.id} advertisement={advert} />
                ))}
              </ul>
              <div className="d-flex justify-content-center">
                <Link to="/advertisements" className="shadow component--job-button">
                  <span className="mr-3">Tüm İlanları Gör</span> <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
