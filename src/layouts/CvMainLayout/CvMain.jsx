import React from 'react'
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function CvMain({resumes}) {
    return (
        <div>
             <li
        className="shadow-sm text-justify position-relative"
        key={resumes.id}
      >
        <Link to={`/cvresume/${resumes.id}`}>
          <span className="detail">
            <small className="text-muted">
              <b>{resumes.candidate?.firstName}</b> -{" "}
              {resumes.candidate?.lastName}{" "}
            </small>
          </span>
        </Link>
      </li>
        </div>
    )
}
