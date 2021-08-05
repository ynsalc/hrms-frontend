import React, { useState, useEffect } from "react";
import CvSkillService from "../../services/CvSkillService";
import { Table } from "reactstrap";
import * as Yup from "yup";
import { Formik } from "formik";
import HrmsCustomField from "../../utils/HrmsCustomField";

export default function UpdateSkill({resumeId, updateCvValue}) {
  let cvSkillService = new CvSkillService();

  const [Skills, setSkills] = useState([]);

  useEffect(() => {
    cvSkillService
      .getByCvId(resumeId)
      .then((result) => setSkills(result.data.data));
  }, []);

  const initialValue = {
    skillName: "",
  };

  const updateDataSchema = Yup.object().shape({
    skillName: Yup.string().required("Zorunlu"),
  });

  const handleDeleteSkill = (skillId) => {
    cvSkillService.delete(skillId).then((result) => {
      console.log(result.data.message);
      refreshData();
      updateCvValue();
    });
  };

  const refreshData = () => {
    cvSkillService
      .getByCvId(resumeId)
      .then((result) => setSkills(result.data.data));
  };

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Language Name</th>
            <th>Level</th>
            <th><button className="btn btn-info" id="buton" onClick={() => refreshData()}>Yenile</button></th>
          </tr>
        </thead>
        <tbody>
          {Skills.map((skill) => (
            <tr key={skill.id}>
              <td>{skill.skillName}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteSkill(skill.id)}
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
          cvSkillService.add(values)
          refreshData()
          updateCvValue()
          setSubmitting(true)
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
            <label htmlFor="">Yetenek Adı :</label>
            <HrmsCustomField
              type="text"
              className="form-control mb-2"
              onChange={handleChange}
              name="skillName"
              value={values.skillName}
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