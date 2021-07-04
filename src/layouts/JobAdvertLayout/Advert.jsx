import React from "react";
import "./Advert.css";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Advert({ advertisement }) {
  return (
    <div>
      <li
        className="shadow-sm text-justify position-relative"
        key={advertisement.id}
      >
        <Link to={`/advertisement/${advertisement.id}`}>
          <span className="avatar">{advertisement.jobPosition?.name[0]}</span>
          <span className="detail">
            <small className="text-muted">
              <b>{advertisement?.employer?.companyName}</b> -{" "}
              {advertisement?.employer?.webAdress}{" "}
            </small>
            <span className="title">{advertisement.jobPosition?.name}</span>
            <span className="position text-muted">
              {advertisement?.description}
            </span>
          </span>
        </Link>
        <div className="card-footer py-1 bg-light">
          <div className="d-flex primary-color-text flex-wrap justify-content-between">
            <small>{advertisement?.quota} Kişi</small>
            <small>1 Gün</small>
            <small>
              <FontAwesomeIcon className="mr-1" icon={faMapMarkerAlt} />{" "}
              {advertisement.city?.name}
            </small>
          </div>
        </div>
      </li>
    </div>
  );
}
