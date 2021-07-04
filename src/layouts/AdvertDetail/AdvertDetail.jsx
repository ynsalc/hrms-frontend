import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faLink,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "./AdverDetail.css";
import { useParams } from "react-router";
import JobAdvertisementService from "../../services/JobAdvertisementService";
import { Jumbotron, Button } from 'reactstrap';

export default function AdvertDetail() {
  let { id } = useParams();

  const [advertisement, setAdvertisement] = useState({});

  useEffect(() => {
    let adverService = new JobAdvertisementService();
    adverService
      .getAdvertisment(id)
      .then((result) => {setAdvertisement(result.data.data)
        console.log(result.data.data)
      });
  }, [id]);

  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">{advertisement.jobPosition?.name}</h1>
        <p className="lead">{advertisement.description}</p>
        <hr className="my-2" />
        <p>Çalışma Şekli : {advertisement.workType?.workTypeName} - {advertisement.workTimeType?.workTimeName}</p>
        <p className="lead">
          <Button color="primary">İlana Başvur..</Button>
        </p>
      </Jumbotron>
    </div>
  );
}
