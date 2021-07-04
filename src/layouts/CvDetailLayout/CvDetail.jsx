import React from "react";
import { useState, useEffect } from "react";
import "./CvDetail.css";
import CvService from "../../services/CvService";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Table } from 'reactstrap';

export default function CvDetail() {
  let { id } = useParams();

  const [resume, setResume] = useState({});

  let cvService = new CvService();
  useEffect(() => {
    let cvService = new CvService();
    cvService.getById(id).then((result) => setResume(result.data.data));
  }, [id]);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="border-main shadow-sm m-auto d-flex flex-column justify-content-center align-items-center">
              <img
                src={resume.photo}
                alt={resume.candidate?.firstName}
                className="profile-picture"
              />
              <h6 className="mb-0 mt-2 d-mobile">
                {resume.candidate?.firstName} {resume.candidate?.lastName}
              </h6>
              <small className="text-muted mt-0 d-mobile">
                {resume.createdDate}
              </small>
              <br />
              <span className="text-center mt-2">
                <a href={resume.githubLink}>
                  <i className="fab h2 fa-github text-dark mx-1"></i>
                </a>
                <a href={resume.linkedinLink}>
                  <i className="fab h2 primary-color-text fa-linkedin mx-1"></i>
                </a>
              </span>
              <div className="list-group w-100">
                <Link
                  to={"/cvList"}
                  type="button"
                  className="list-group-item list-group-item-action sidebar-menu d-flex justify-content-between px-2 text-center"
                  aria-current="true"
                >
                  <i className="fas fa-file"></i>{" "}
                  <span className="d-mobile">Özgeçmişlerim</span>
                </Link>
                <Link
                  to={"schools"}
                  type="button"
                  className="list-group-item list-group-item-action sidebar-menu d-flex justify-content-between px-2 text-center"
                >
                  <i className="fas fa-graduation-cap"></i>{" "}
                  <span className="d-mobile">Öğrenim Bilgilerim</span>
                </Link>
                <Link
                  to={"experiences"}
                  type="button"
                  className="list-group-item list-group-item-action sidebar-menu d-flex justify-content-between px-2 text-center"
                >
                  <i className="fas fa-cash-register"></i>{" "}
                  <span className="d-mobile">İş Tecrübelerim</span>
                </Link>
                <Link
                  to={"languages"}
                  type="button"
                  className="list-group-item list-group-item-action sidebar-menu d-flex justify-content-between px-2 text-center"
                >
                  <i className="fas fa-flag-usa"></i>{" "}
                  <span className="d-mobile">Yabancı Diller</span>
                </Link>
                <Link
                  to={"skills"}
                  type="button"
                  className="list-group-item list-group-item-action sidebar-menu d-flex justify-content-between px-2 text-center"
                >
                  <i className="fas fa-american-sign-language-interpreting"></i>{" "}
                  <span className="d-mobile">Yetenekler</span>
                </Link>
                <Link
                  to={"settings"}
                  type="button"
                  className="list-group-item list-group-item-action sidebar-menu d-flex justify-content-between px-2 text-center"
                >
                  <i className="fas fa-cog"></i>{" "}
                  <span className="d-mobile">Seçenekler</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="jumbotron jumbotron-fluid">
              <div className="container">
                <h6 className="display-4">İş Deneyimleri</h6>
                <div className="section-page">
                  {resume.cvExperience?.map((experience)=>(
                    <Table borderless>
                    <thead>
                      <tr>
                        <th>Firma Adı</th>
                        <th>Pozisyon</th>
                        <th>Başlangıç Tarihi</th>
                        <th>Bitiş Tarihi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{experience.companyName}</td>
                        <td>{experience.position}</td>
                        <td>{experience.startYear}</td>
                        <td>{experience.endYear}</td>
                      </tr>
                    </tbody>
                  </Table>
                  ))}
                </div>
                <br />
                <h6 className="display-4">Eğitim Hayatı</h6>
                <div className="section-page">
                  {resume.cvEducation?.map((education)=>(
                    <Table borderless>
                    <thead>
                      <tr>
                        <th>Okul Adı</th>
                        <th>Bölüm</th>
                        <th>Başlangıç Tarihi</th>
                        <th>Bitiş Tarihi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{education.school?.schoolName}</td>
                        <td>{education.department}</td>
                        <td>{education.startYear}</td>
                        <td>{education.endYear}</td>
                      </tr>
                    </tbody>
                  </Table>
                  ))}
                </div>
                <br />
                <h6 className="display-4">Bildiği Teknolojiler</h6>
                <div className="section-page">
                  
                    <Table borderless>
                    <thead>
                      <tr>
                        <th>Yetenekler</th>
                      </tr>
                    </thead>
                    {resume.cvSkill?.map((skill)=>(
                    <tbody>
                      <tr>
                        <td>{skill.skillName}</td>
                      </tr>
                    </tbody>
                  
                  ))}</Table>
                </div>
                <br />
                <h6 className="display-4">Bildiği Diller</h6>
                <div className="section-page">
                  
                    <Table borderless>
                    <thead>
                      <tr>
                        <th>Diller</th>
                        <th>Seviyesi</th>
                      </tr>
                    </thead>
                    {resume.cvLanguage?.map((language)=>(
                    <tbody>
                      <tr>
                        <td>{language.languageName}</td>
                        <td>{language.level}</td>
                      </tr>
                    </tbody>
                  
                  ))}</Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
