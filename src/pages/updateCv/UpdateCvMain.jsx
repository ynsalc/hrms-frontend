import React, { useState } from "react";
import CvService from "../../services/CvService";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import HrmsCustomField from "../../utils/HrmsCustomField";
import { useParams } from "react-router";

export default function UpdateCvMain({ resumeId, updateCvValue }) {
  let cvService = new CvService();

  const initialValue = {
    githubLink: "",
    linkedinLink: "",
    coverLetter: "",
  };

  const updateDataSchema = Yup.object().shape({
    githubLink: Yup.string().required("Zorunlu"),
    linkedinLink: Yup.string().required("Zorunlu"),
    coverLetter: Yup.string().required("Zorunlu"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValue}
        validationSchema={updateDataSchema}
        onSubmit={(values, { setSubmitting }) => {
          cvService.update(values.coverLetter,resumeId,values.githubLink,values.linkedinLink)
          updateCvValue();
          console.log(values.coverLetter,resumeId,values.githubLink,values.linkedinLink);
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
            <label htmlFor="">Github Adresi :</label>
            <HrmsCustomField
              type="text"
              className="form-control mb-2"
              onChange={handleChange}
              name="githubLink"
              value={values.githubLink}
            />
            <label htmlFor="">Linkedin Adresi :</label>
            <HrmsCustomField
              type="text"
              className="form-control mb-2"
              onChange={handleChange}
              name="linkedinLink"
              value={values.linkedinLink}
            />
            <label htmlFor="">Önyazı :</label>
            <HrmsCustomField
              type="text"
              className="form-control mb-2"
              onChange={handleChange}
              name="coverLetter"
              value={values.coverLetter}
            />
            <button
              type="submit"
              className="btn btn-danger mt-3 btn-block text-light"
            >
              Güncelle
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}



