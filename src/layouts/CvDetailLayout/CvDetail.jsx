import React, { useState, useEffect } from "react";
import "./CvDetail.css";
import CvService from "../../services/CvService";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from 'reactstrap';

export default function CvDetail() {
  let { id } = useParams();
  const [cvDetail, setCvDetail] = useState([]);

  useEffect(() => {
    let cvService = new CvService();
    cvService
      .getByCandidateId(id)
      .then((result) => setCvDetail(result.data.data));

    return () => {};
  }, [id]);
  return (
    <div className="container">
      <div className="row gutters-sm">
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src={cvDetail[0]?.photo}
                  className="rounded-circle"
                  alt=""
                />
                <div className="mt-3">
                  <h4>{cvDetail[0]?.candidate?.firstName}{" "}{cvDetail[0]?.candidate?.lastName}</h4>
                  <p className="text-secondary mb-1">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-3">
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 className="mb-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>{" "}
                  LinkedIn
                </h6>
                <span className="text-secondary">
                  <a href={cvDetail[0]?.linkedinLink}>LinkedIn</a>
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 className="mb-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-github mr-2 icon-inline"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  Github
                </h6>
                <span className="text-secondary">
                  <a href={cvDetail[0]?.githubLink}>Github</a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-md-8">
          <div className="card mb-3">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Full Name</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                {cvDetail[0]?.candidate?.firstName}{" "}{cvDetail[0]?.candidate?.lastName}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Email</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                {cvDetail[0]?.candidate?.email}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-12">
                  <a
                    className="btn btn-info "
                    target="__blank"
                    href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills"
                  >
                    Düzenle
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="row gutters-sm">
            <div className="col-sm-6 mb-3">
              <div class="card h-100">
                <div class="card-body">
                  <h6 class="d-flex align-items-center mb-3">Yetenek Bilgileri</h6>
                  
                  <ListGroup>
                  {cvDetail[0]?.cvSkill?.map((skill)=>(
                  <ListGroupItem>{skill.skillName}</ListGroupItem>
                  ))}
                </ListGroup>
                </div>
              </div>
            </div>
            <div className="col-sm-6 mb-3">
              <div class="card h-100">
                <div class="card-body">
                  <h6 class="d-flex align-items-center mb-3">Eğitim Bilgileri</h6>
                  
                  <ListGroup>
                  {cvDetail[0]?.cvEducation?.map((education)=>(
                  <ListGroupItem>{education.school?.schoolName}{"-"}{education.department}</ListGroupItem>
                  ))}
                </ListGroup>
                  
                </div>
              </div>
            </div>
            <div className="col-sm-6 mb-3">
              <div class="card h-100">
                <div class="card-body">
                  <h6 class="d-flex align-items-center mb-3">İş Deneyimleri Bilgileri</h6>
                  {cvDetail[0]?.cvExperience?.map((experience)=>(
                    <ListGroup>
                    <ListGroupItem>Firma Adı : {experience.companyName}</ListGroupItem>
                    <ListGroupItem>Pozisyon : {experience.position}</ListGroupItem>
                    <ListGroupItem>Başlangıç Tarihi : {experience.startYear}</ListGroupItem>
                    <ListGroupItem>Ayrılış Tarihi : {experience.endYear}</ListGroupItem>
                  </ListGroup>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-sm-6 mb-3">
              <div class="card h-100">
                <div class="card-body">
                  <h6 class="d-flex align-items-center mb-3">Dil Bilgileri</h6>
                  <ListGroup>
                  {cvDetail[0]?.cvLanguage?.map((language)=>(
                  <ListGroupItem>{language.languageName}{" - "}{language.level}</ListGroupItem>
                  ))}
                </ListGroup>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
