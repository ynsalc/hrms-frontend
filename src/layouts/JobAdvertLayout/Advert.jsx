import React,{useState,useEffect} from "react";
import "./Advert.css";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { toast } from "react-toastify";
import CandidateService from '../../services/CandidateService'

export default function Advert({ advertisement }) {
  const userId = 1

  const [favorities, setFavorities] = useState([])

  let candidateService = new CandidateService()

  useEffect(() => {
    candidateService.getByFavorite(userId).then((result) => {
      setFavorities(result.data.data.map((favorited) => (
        favorited.jobAdvertisement?.id
      )))
    })
  }, [userId])

  const handleAddFavorite = (jobAdId) => {
    candidateService.addFavorities(userId,jobAdId).then((result) => {
      toast.success(result.data.message)
      favorities.push(jobAdId)
      setFavorities([...favorities])
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

      <div class="job-box d-md-flex align-items-center justify-content-between mb-30">
        <div class="job-left my-4 d-md-flex align-items-center flex-wrap">
          <div class="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
            {advertisement.jobPosition?.name[0]}
          </div>
          <div class="job-content">
            <Link to={`/advertisement/${advertisement.id}`}>
              <h5 class="text-center text-md-left">
                {advertisement.jobPosition?.name}
              </h5>
            </Link>
            <ul class="d-md-flex flex-wrap text-capitalize ff-open-sans">
              <li class="mr-md-4">
                <i class="zmdi zmdi-pin mr-2"></i> {advertisement.city?.name}
              </li>
              <li class="mr-md-4">
                <i class="zmdi zmdi-money mr-2"></i> {advertisement.minSalary}
                {"-"}
                {advertisement.maxSalary}
              </li>
              <li class="mr-md-4">
                <i class="zmdi zmdi-time mr-2"></i>{" "}
                {advertisement.workType?.workTypeName}
                {"-"}
                {advertisement.workTimeType?.workTimeName}
              </li>
            </ul>
          </div>
        </div>
        <div class="job-right my-4 d-md-flex align-items-center flex-wrap">
          <button type="button" className={favorities.includes(advertisement.id)?"btn btn-danger":"btn btn-success"} onClick={() => handleAddFavorite(advertisement.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}
