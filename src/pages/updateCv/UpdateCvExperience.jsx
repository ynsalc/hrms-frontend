import React, { useState, useEffect } from "react";
import CvExperienceService from "../../services/CvExperienceService";
import { Table } from "reactstrap";
import * as Yup from "yup";
import { Formik } from "formik";
import HrmsCustomField from "../../utils/HrmsCustomField";

export default function UpdateCvExperience({ resumeId, updateCvValue }) {
  let cvExperienceService = new CvExperienceService();
  const [Experience, setExperience] = useState([]);

  useEffect(() => {
    cvExperienceService
      .getByCvId(resumeId)
      .then((result) => setExperience(result.data.data));
  }, [resumeId]);

  const initialValue = {
    companyName: "",
    position: "",
    startYear: "",
    endYear: "",
  };

  const updateDataSchema = Yup.object().shape({
    companyName: Yup.string().required("Zorunlu"),
    position: Yup.string().required("Zorunlu"),
    startYear: Yup.string().required("Zorunlu"),
  });

  const handleDeleteExperience = (experienceId) => {
    cvExperienceService.delete(experienceId).then((result) => {
        console.log(result.data.message);
        refreshData();
        updateCvValue();
    })
  }

  const refreshData = () => {
    cvExperienceService.getByCvId(resumeId).then((result) => setExperience(result.data.data))
  }

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Position</th>
            <th>Start Year</th>
            <th>Last Year</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Experience.map((experiences) => (
            <tr key={experiences.id}>
              <td>{experiences.companyName}</td>
              <td>{experiences.position}</td>
              <td>{experiences.startYear}</td>
              <td>{experiences.endYear}</td>
              <td><button className="btn btn-danger" onClick={() => handleDeleteExperience(experiences.id)}>Sil</button></td>
            </tr>
          ))}
        </tbody>
      </Table>
            
      <Formik
        initialValues={initialValue}
        validationSchema={updateDataSchema}
        onSubmit={(values, { setSubmitting }) => {
          values.resumeId = resumeId;
          cvExperienceService.add(values)
          updateCvValue();
          refreshData();
          setSubmitting(true);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="">İşyeri Adı :</label>
            <HrmsCustomField
              type="text"
              className="form-control mb-2"
              onChange={handleChange}
              name="companyName"
              value={values.companyName}
            />
            <label htmlFor="">Pozisyon :</label>
            <HrmsCustomField
              type="text"
              className="form-control mb-2"
              onChange={handleChange}
              name="position"
              value={values.position}
            />
            <label htmlFor="">Başlangıç Yılı :</label>
            <HrmsCustomField
              type="text"
              className="form-control mb-2"
              onChange={handleChange}
              name="startYear"
              value={values.startYear}
            />
            <label htmlFor="">Bitiş Yılı :</label>
            <HrmsCustomField
              type="text"
              className="form-control mb-2"
              onChange={handleChange}
              name="endYear"
              value={values.endYear}
            />
            <button
              type="submit"
              className="btn btn-success mt-3 btn-block text-light"
            >
              Ekle
            </button>
          </form>
        )}
      </Formik>

    </div>
  );
}
