import React, { useState, useEffect } from "react";
import CvService from "../services/CvService";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";
import CvMain from "../layouts/CvMainLayout/CvMain";

export default function CvList() {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    let cvService = new CvService();
    cvService.getCv().then((result) => setResumes(result.data.data));
  }, []);

  return (
    <div>
      <div className="container">
            {
              resumes.map((resume) => (
                <CvMain key={resume.id} resumes={resume} />
              ))
            }
      </div>
    </div>
  );
}
