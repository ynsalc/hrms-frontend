import React, { useState, useEffect } from "react";
import CvLanguageService from "../../services/CvLanguageService";
import { Table } from "reactstrap";
import * as Yup from "yup";
import { Formik } from "formik";
import HrmsCustomField from "../../utils/HrmsCustomField";

export default function UpdateLanguage({ resumeId, updateCvValue }) {
  let cvLanguageService = new CvLanguageService();

  const [Languages, setLanguages] = useState([]);

  useEffect(() => {
    cvLanguageService
      .getByCvId(resumeId)
      .then((result) => setLanguages(result.data.data));
  }, []);

  const initialValue = {
    languageName: "",
    level: "",
  };

  const updateDataSchema = Yup.object().shape({
    languageName: Yup.string().required("Zorunlu"),
    level: Yup.string().required("Zorunlu"),
  });

  const handleDeleteLanguage = (languageId) => {
    cvLanguageService.delete(languageId).then((result) => {
      console.log(result.data.message);
      refreshData();
      updateCvValue();
    });
  };

  const refreshData = () => {
    cvLanguageService
      .getByCvId(resumeId)
      .then((result) => setLanguages(result.data.data));
  };

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Language Name</th>
            <th>Level</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Languages.map((language) => (
            <tr key={language.id}>
              <td>{language.languageName}</td>
              <td>{language.level}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteLanguage(language.id)}
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
          cvLanguageService.add(values);
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
            <label htmlFor="">Dil Adı :</label>
            <HrmsCustomField
              type="text"
              className="form-control mb-2"
              onChange={handleChange}
              name="languageName"
              value={values.languageName}
            />
            <label htmlFor="">Seviye :</label>
            <HrmsCustomField
              type="text"
              className="form-control mb-2"
              onChange={handleChange}
              name="level"
              value={values.level}
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
