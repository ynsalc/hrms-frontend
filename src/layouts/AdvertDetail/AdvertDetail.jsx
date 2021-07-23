import React, { useState, useEffect } from "react";
import "./AdverDetail.css";
import { useParams } from "react-router";
import JobAdvertisementService from "../../services/JobAdvertisementService";
import { Jumbotron, Button } from "reactstrap";
import { Link } from "react-router-dom";

export default function AdvertDetail() {
  let { id } = useParams();

  const [advertisement, setAdvertisement] = useState({});

  useEffect(() => {
    let adverService = new JobAdvertisementService();
    adverService.getAdvertisment(id).then((result) => {
      setAdvertisement(result.data.data);
      console.log(result.data.data);
    });
  }, [id]);

  return (
    <div>
      <div className="container mt-3">
        <div className="back shadow p-3 mb-5 bg-white rounded">
          <Link to={`/employerdetail/${advertisement?.employer?.id}`}>
            <p className="lead">{advertisement.employer?.companyName}</p>
          </Link>
          <h1 className="display-3">{advertisement.jobPosition?.name}</h1>
          <p className="lead">{advertisement.description}</p>
          <hr className="my-2" />
          <p>
            Çalışma Şekli : {advertisement.workType?.workTypeName} -{" "}
            {advertisement.workTimeType?.workTimeName}
          </p>
          <p className="lead">
            <Button color="primary">İlana Başvur..</Button>
          </p>
        </div>
      </div>
    </div>
  );
}
