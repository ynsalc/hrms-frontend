import React, { useState, useEffect } from "react";
import "./AdverDetail.css";
import { useParams } from "react-router";
import JobAdvertisementService from "../../services/JobAdvertisementService";
import CandidateService from "../../services/CandidateService";
import { Jumbotron, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function AdvertDetail() {
  let { id } = useParams();
  const userId = 1

  const [advertisement, setAdvertisement] = useState({});
  let [favorites, setFavorites] = useState([]);

  let candidateService = new CandidateService();

  useEffect(() => {
    let adverService = new JobAdvertisementService();
    adverService.getAdvertisment(id).then((result) => {
      setAdvertisement(result.data.data);
    });
    candidateService.getByFavorite(userId).then((result) => {
      setFavorites(result.data.data.map((favoriteAd) =>(
        favoriteAd.jobAdvertisement.id
      )))
    })
  }, [id,userId]);

  const handleAddFavorite = (jobAdvertId) => {
    candidateService.addFavorities(userId,jobAdvertId).then((result) => {
      toast.success(result.data.message)
      favorites.push(jobAdvertId)
      setFavorites([...favorites])
    }).catch((result) => {
      toast.error(result.response.data.message)
    })
  }

  return (
    <div>
      <div className="container mt-3">
        <div className="back shadow p-3 mb-5 bg-white rounded">
          <div className="row">
            <div className="col-10">  
              <Link to={`/employerdetail/${advertisement?.employer?.id}`}>
                <h5 className="font-weight-bold primary-color-text">
                  {advertisement.employer?.companyName}
                </h5>
              </Link>
              <div className="my-auto d-flex flex-column">
                <small className="text-secondary">
                  <a href={"http://" + advertisement.employer?.webAdress}>
                    {advertisement.employer?.webAdress}
                  </a>
                </small>
                <small className="text-secondary">
                  {advertisement.employer?.email}
                </small>
              </div>
            </div>
            <div className="col-2">
              <button type="button" className={favorites.includes(advertisement.id)?"btn btn-danger":"btn btn-success"} onClick={() => handleAddFavorite(advertisement.id)}>
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
                {favorites.includes(advertisement.id)?"İlan Favorilerinizde Mevcut":" + Favorilere Ekle"}
              </button>
            </div>
          </div>
          <h1 className="display-3">{advertisement.jobPosition?.name}</h1>
          <div className="explain-bar">
            <div className="explain-contents">
              <div className="explain-title">Pozisyon Sayısı</div>
              <div className="explain-subtitle">{advertisement.quota} Kişi</div>
            </div>
            <div className="explain-contents">
              <div className="explain-title">İş Tipi</div>
              <div className="explain-subtitle">
                {advertisement.workType?.workTypeName} -{" "}
                {advertisement.workTimeType?.workTimeName}
              </div>
            </div>
            <div className="explain-contents">
              <div className="explain-title">Minimum Ücret</div>
              <div className="explain-subtitle">
                {advertisement.minSalary} ₺ / Aylık
              </div>
            </div>
            <div className="explain-contents">
              <div className="explain-title">Maksimum Ücret</div>
              <div className="explain-subtitle">
                {advertisement.maxSalary} ₺ / Aylık
              </div>
            </div>
          </div>
          <br />
          <h5 className="font-weight-bold primary-color-text">Açıklama</h5>
          <p className="lead">{advertisement.description}</p>
          <p className="lead">
            <Button color="primary">İlana Başvur..</Button>
          </p>
        </div>
      </div>
    </div>
  );
}
