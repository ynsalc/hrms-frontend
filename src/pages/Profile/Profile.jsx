import React, { useState, useEffect } from "react";
import CandidateService from "../../services/CandidateService";
import CvService from "../../services/CvService";
import "./Profile.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Profile() {
  let id = 4;
  let cvService = new CvService();
  let candidateService = new CandidateService();
  const [resume, setResume] = useState([]);
  const [candidate, setCandidate] = useState([]);

  useEffect(() => {
    cvService
      .getByCandidateId(id)
      .then((result) => setResume(result.data.data));
    candidateService
      .getByFavorite(id)
      .then((result) => setCandidate(result.data.data));
  }, [id]);

  const handleRemoveFavorite = (jobAdvertId) => {
    candidateService.removeFavorities(jobAdvertId).then((result) => {
      setCandidate(candidate.filter((advert) => advert.id !== jobAdvertId))
      toast.success(result.data.message)
    }).catch((result) => {
      toast.error(result.response.data.message)
    })
  }

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css"
        integrity="sha256-3sPp8BkKUE7QyPSl6VfBByBroQbKxKG7tsusY2mhbVY="
        crossorigin="anonymous"
      />
      <div className="container mt-3">
        <div className="row">
          <div className="col-3">
            <div className="category">
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src={resume[0]?.photo}
                  className="profile-picture"
                  alt=""
                />
              </div>
              <div className="mt-4 text-center">
                <h4>
                  {resume[0]?.candidate?.firstName}{" "}
                  {resume[0]?.candidate?.lastName}
                </h4>
                <p className="text-secondary mb-1">{resume[0]?.coverLetter}</p>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="pages mb-3">
              <p className="fw-normal">Özgeçmişlerim</p>
              <Link to={`/cvresume/${resume[0]?.candidate?.id}`}>
              <div className="cvlist">
              <div class="job-box d-md-flex align-items-center justify-content-between mb-10">
                  <div class="job-left my-4 d-md-flex align-items-center flex-wrap">
                    <div class="mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                        <img
                          src={resume[0]?.photo}
                          className="profile-picture-list"
                          alt=""
                        />
                    </div>
                    <div class="job-content">
                      
                        <h5 class="text-center text-md-left">
                          {resume[0]?.candidate?.firstName}{" "}
                          {resume[0]?.candidate?.lastName}
                        </h5>
                      <ul class="d-md-flex flex-wrap text-capitalize ff-open-sans">
                        <li class="mr-md-4">{" "}
                          {resume[0]?.coverLetter}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
            </div>
            <div className="pages">
              <p className="fw-normal">Favoriye Eklenmiş İlanlar</p>
              {candidate.map((favorite) => (
                <div class="job-box d-md-flex align-items-center justify-content-between mb-30">
                  <div class="job-left my-4 d-md-flex align-items-center flex-wrap">
                    <div class="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                      {favorite.jobAdvertisement.jobPosition.name[0]}
                    </div>
                    <div class="job-content">
                      <Link
                        to={`/advertisement/${favorite.jobAdvertisement.id}`}
                      >
                        <h5 class="text-center text-md-left">
                          {favorite.jobAdvertisement.jobPosition.name}
                        </h5>
                      </Link>
                      <ul class="d-md-flex flex-wrap text-capitalize ff-open-sans">
                        <li class="mr-md-4">
                          <i class="zmdi zmdi-pin mr-2"></i>{" "}
                          {favorite.jobAdvertisement.city?.name}
                        </li>
                        <li class="mr-md-4">
                          <i class="zmdi zmdi-money mr-2"></i>{" "}
                          {favorite.jobAdvertisement.minSalary}
                          {"-"}
                          {favorite.jobAdvertisement.maxSalary}
                        </li>
                        <li class="mr-md-4">
                          <i class="zmdi zmdi-time mr-2"></i>{" "}
                          {favorite.jobAdvertisement.workType?.workTypeName}
                          {"-"}
                          {favorite.jobAdvertisement.workTimeType?.workTimeName}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="job-right my-4 d-md-flex align-items-center flex-wrap">
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => handleRemoveFavorite(favorite.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-heart"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                      </svg>{" "}
                      - Favorilerden Çıkar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
