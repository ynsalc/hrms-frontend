import React, { useState, useEffect } from "react";
import CvEducationService from "../../services/CvEducationService";
import { Table } from "reactstrap";
import * as Yup from "yup";
import { Formik } from "formik";
import HrmsCustomField from "../../utils/HrmsCustomField";

export default function UpdateEducation({ resumeId, updateCvValue }) {
  let cvEducationService = new CvEducationService();
  const [Educations, setEducations] = useState([]);
  useEffect(() => {
    cvEducationService
      .getByCvId(resumeId)
      .then((result) => setEducations(result.data.data));
  }, [resumeId]);

  const initialValue = {
    schoolId: "",
    department: "",
    startYear: "",
    endYear: "",
  };

  const updateDataSchema = Yup.object().shape({
    schoolId: Yup.string().required("Zorunlu"),
    department: Yup.string().required("Zorunlu"),
    startYear: Yup.string().required("Zorunlu"),
  });

  const handleDeleteEducation = (educationId) => {
    cvEducationService.delete(educationId).then((result) => {
        console.log(result.data.message);
        refreshData();
        updateCvValue();
    })
  }

  const refreshData = () => {
    cvEducationService.getByCvId(resumeId).then((result) => setEducations(result.data.data))
  }

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>School Name</th>
            <th>Department</th>
            <th>Start Year</th>
            <th>Last Year</th>
            <th><button className="btn btn-info" onClick={() => refreshData()}>Yenile</button></th>
          </tr>
        </thead>
        <tbody>
          {Educations.map((education) => (
            <tr key={education.id}>
              <td>{education?.school?.schoolName}</td>
              <td>{education.department}</td>
              <td>{education.startYear}</td>
              <td>{education.endYear}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteEducation(education.id)}
                >
                  Sil
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Formik
        initialValues={initialValue}
        validationSchema={updateDataSchema}
        onSubmit={(values, { setSubmitting }) => {
          values.resumeId = resumeId;
          cvEducationService.add(values)
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
            <label htmlFor="">Okul Adı :</label>
            <HrmsCustomField
              as="select"
              className="form-control mb-2"
              onChange={handleChange}
              name="schoolId"
              value={values.schoolId}
            >
                <option>Okul Seçiniz..</option>
                {Educations.map((education) => (
                    <option value={education?.school?.id}>{education?.school?.schoolName}</option>
                ))}
                
            </HrmsCustomField>
            <label htmlFor="">Bölüm :</label>
            <HrmsCustomField
              type="text"
              className="form-control mb-2"
              onChange={handleChange}
              name="department"
              value={values.department}
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
