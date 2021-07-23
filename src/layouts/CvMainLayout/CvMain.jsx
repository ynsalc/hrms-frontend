import React, { useState, useEffect } from "react";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Card, Button, CardTitle, CardText } from "reactstrap";
import CvService from "../../services/CvService";
import CvDetail from "../CvDetailLayout/CvDetail";

export default function CvMain() {

  let {id} = useParams();

  const [cv, setCv] = useState([])

  useEffect(() => {
    let cvService = new CvService();
    cvService.getByCandidateId(id).then((result) => setCv(result.data.data));
    
  }, [])

  return (
    <div>
      <CvDetail cvdetail={cv}></CvDetail>
    </div>
  );
}
