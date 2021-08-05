import React, { useState, useEffect } from "react";
import "./CvDetail.css";
import CvService from "../../services/CvService";
import { useParams } from "react-router";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import UpdateCvMain from "../../pages/updateCv/UpdateCvMain";
import UpdateCvExperience from "../../pages/updateCv/UpdateCvExperience";
import UpdateCvEducation from "../../pages/updateCv/UpdateEducation";
import UpdateLanguage from "../../pages/updateCv/UpdateLanguage";
import UpdateSkill from "../../pages/updateCv/UpdateSkill";

export default function CvDetail() {
  let { id } = useParams();
  let cvService = new CvService();
  const [cvDetail, setCvDetail] = useState([]);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [modalExperience, setModalExperience] = useState(false);
  const toggleExperience = () => setModalExperience(!modalExperience);

  const [modalEducation, setModalEducation] = useState(false);
  const toggleEducation = () => setModalEducation(!modalEducation);

  const [modalLanguage, setModalLanguage] = useState(false);
  const toggleLanguage = () => setModalLanguage(!modalLanguage);

  const [modalSkill, setModalSkill] = useState(false);
  const toggleSkill = () => setModalSkill(!modalSkill);

  useEffect(() => {
    cvService
      .getByCandidateId(id)
      .then((result) => setCvDetail(result.data.data));

    return () => {};
  }, [id]);

  const updateCvValue = () => {
    cvService
      .getByCandidateId(id)
      .then((result) => setCvDetail(result.data.data));
  };
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
                  <h4>
                    {cvDetail[0]?.candidate?.firstName}{" "}
                    {cvDetail[0]?.candidate?.lastName}
                  </h4>
                  <p className="text-secondary mb-1">
                    {cvDetail[0]?.coverLetter}
                  </p>
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
                  {cvDetail[0]?.candidate?.firstName}{" "}
                  {cvDetail[0]?.candidate?.lastName}
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
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={toggle}
                  >
                    Güncelle
                    <Modal key={"1"} isOpen={modal} toggle={toggle}>
                      <ModalHeader toggle={toggle}>
                        Linkedin,Github ve Önyazı Güncelle
                      </ModalHeader>
                      <ModalBody>
                        <UpdateCvMain
                          resumeId={cvDetail[0]?.id}
                          updateCvValue={updateCvValue}
                        />
                      </ModalBody>
                    </Modal>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="row gutters-sm">
            <div className="col-sm-6 mb-3">
              <div class="card h-100">
                <div class="card-body">
                  <div className="row">
                    <h6 class="d-flex align-items-center mb-3 col-9">
                      Yetenek Bilgileri
                    </h6>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm mb-2"
                      onClick={toggleSkill}
                    >
                      {" "}
                      Güncelle
                    </button>
                  </div>
                  <Modal key={"5"} isOpen={modalSkill} toggle={toggleSkill} className={"modal-dialog modal-xl"}>
                    <ModalHeader toggle={toggleSkill}>
                      Yetenek Bilgilerini Güncelle
                    </ModalHeader>
                    <ModalBody>
                      <UpdateSkill
                        resumeId={cvDetail[0]?.id}
                        updateCvValue={updateCvValue}
                      />
                    </ModalBody>
                  </Modal>
                  <ListGroup>
                    {cvDetail[0]?.cvSkill?.map((skill) => (
                      <ListGroupItem>{skill.skillName}</ListGroupItem>
                    ))}
                  </ListGroup>
                </div>
              </div>
            </div>
            <div className="col-sm-6 mb-3">
              <div class="card h-100">
                <div class="card-body">
                  <div className="row">
                    <h6 class="d-flex align-items-center mb-3 col-9">
                      Eğitim Bilgileri
                    </h6>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm mb-2"
                      onClick={toggleEducation}
                    >
                      {" "}
                      Güncelle
                    </button>
                  </div>
                  <Modal key={"3"} isOpen={modalEducation} toggle={toggleEducation} className={"modal-dialog modal-xl"}>
                    <ModalHeader toggle={toggleEducation}>
                      Eğitim Bilgileri Güncelle
                    </ModalHeader>
                    <ModalBody>
                      <UpdateCvEducation
                        resumeId={cvDetail[0]?.id}
                        updateCvValue={updateCvValue}
                      />
                    </ModalBody>
                  </Modal>   
                  {cvDetail[0]?.cvEducation?.map((education) => (
                    <ListGroup>
                      <ListGroupItem>
                        Okul : {education.school?.schoolName}
                      </ListGroupItem>
                      <ListGroupItem>
                        Bölüm : {education.department}
                      </ListGroupItem>
                      <ListGroupItem>
                        Başlangıç Tarihi : {education.startYear}
                      </ListGroupItem>
                      <ListGroupItem>
                        Bitiş Tarihi : {education.endYear}
                      </ListGroupItem>
                      <br />
                    </ListGroup>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-sm-6 mb-3">
              <div class="card h-100">
                <div class="card-body">
                  <div className="row">
                    <h6 class="d-flex align-items-center mb-3 col-9">
                      İş Deneyimleri Bilgileri
                    </h6>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm mb-2"
                      onClick={toggleExperience}
                    >
                      {" "}
                      Güncelle
                    </button>
                  </div>
                  <Modal key={"2"} isOpen={modalExperience} toggle={toggleExperience} className={"modal-dialog modal-xl"}>
                    <ModalHeader toggle={toggleExperience}>
                      İş Deneyimi Güncelle
                    </ModalHeader>
                    <ModalBody>
                      <UpdateCvExperience
                        resumeId={cvDetail[0]?.id}
                        updateCvValue={updateCvValue}
                      />
                    </ModalBody>
                  </Modal>
                  {cvDetail[0]?.cvExperience?.map((experience) => (
                    <ListGroup>
                      <ListGroupItem>
                        Firma Adı : {experience.companyName}
                      </ListGroupItem>
                      <ListGroupItem>
                        Pozisyon : {experience.position}
                      </ListGroupItem>
                      <ListGroupItem>
                        Başlangıç Tarihi : {experience.startYear}
                      </ListGroupItem>
                      <ListGroupItem>
                        Ayrılış Tarihi : {experience.endYear}
                      </ListGroupItem>
                      <br />
                    </ListGroup>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-sm-6 mb-3">
              <div class="card h-100">
                <div class="card-body">
                  <div className="row">
                    <h6 class="d-flex align-items-center mb-3 col-9">
                      Dil Bilgileri
                    </h6>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm mb-2"
                      onClick={toggleLanguage}
                    >
                      {" "}
                      Güncelle
                    </button>
                  </div>
                  <Modal key={"4"} isOpen={modalLanguage} toggle={toggleLanguage} className={"modal-dialog modal-xl"}>
                    <ModalHeader toggle={toggleLanguage}>
                      Dil Bilgilerini Güncelle
                    </ModalHeader>
                    <ModalBody>
                      <UpdateLanguage
                        resumeId={cvDetail[0]?.id}
                        updateCvValue={updateCvValue}
                      />
                    </ModalBody>
                  </Modal>
                  <ListGroup>
                    {cvDetail[0]?.cvLanguage?.map((language) => (
                      <ListGroupItem>
                        {language.languageName}
                        {" - "}
                        {language.level}
                      </ListGroupItem>
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
