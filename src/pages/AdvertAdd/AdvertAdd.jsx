import React, { useState, useEffect } from "react";
import "./AdvertAdd.css";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import JobAdvertisementService from "../../services/JobAdvertisementService";
import CityService from "../../services/CityService";
import WorkTypeService from "../../services/WorkTypeService";
import JobTitleService from "../../services/JobTitleService";
import WorkTimeTypeService from "../../services/WorkTimeTypeService";
import HrmsCustomField from "../../utils/HrmsCustomField";

export default function AdvertAdd() {
  const [cities, setCities] = useState([]);
  const [jobTitle, setJobTitle] = useState([]);
  const [workType, setWorkType] = useState([]);
  const [workTimeType, setWorkTimeType] = useState([]);

  let jobAdvertService = new JobAdvertisementService();
  function addJobAdvertisement(params) {
    jobAdvertService.add(params).then();
  }

  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => setCities(result.data.data));
    let jobTitleService = new JobTitleService();
    jobTitleService
      .getJobTitle()
      .then((result) => setJobTitle(result.data.data));
    let workTypeService = new WorkTypeService();
    workTypeService
      .getWorkType()
      .then((result) => setWorkType(result.data.data));
    let workTimeTypeService = new WorkTimeTypeService();
    workTimeTypeService
      .getWorkTimeType()
      .then((result) => setWorkTimeType(result.data.data));
  }, []);

  const initialValue = {
    cityId: "",
    jobTitleId: "",
    employerId:"",
    jobDefinition: "",
    quota: "",
    deadLineForAppeal: new Date(),
    maxSalary: "",
    minSalary: "",
    workTypeId: "",
    workTimeTypeId: "",
  };

  const schema = Yup.object({
    employerId:Yup.number().required("İş veren Id girin"),
    cityId: Yup.string().required("Lütfen Şehir Seçiniz"),
    jobTitleId: Yup.string().required("Lütfen Pozisyon Seçiniz"),
    workTypeId: Yup.string().required("Lütfen Çalışma Türü Seçiniz"),
    workTimeTypeId: Yup.string().required("Lütfen Çalışma Zamanı Seçiniz"),
    positionCount: Yup.number().required("Lütfen Pozisyon Sayısını Giriniz"),
    description: Yup.string().required("Lütfen Açıklama Giriniz"),
    salaryMax: Yup.number().required("Lütfen Minimum Ücret Giriniz"),
    salaryMin: Yup.number().required("Lütfen Maksimum Ücret Giriniz"),
  });

  return (
    <div className="container">
      <br />
      <Formik
        initialValues={initialValue}
        onSubmit={(values, { setSubmitting }) => {
          addJobAdvertisement(values);
          console.log(values);
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
          /* and other goodies */
        }) => (
          <div className="back shadow-sm p-3 mb-5 bg-white rounded">
            <form onSubmit={handleSubmit}>
              <label htmlFor="">İşveren Id :</label>
              <HrmsCustomField type="text" name="employerId" value={values.employerId}>
              </HrmsCustomField>
              <label className="mb-1">Pozisyon Seçin :</label>
              <HrmsCustomField as="select" name="jobTitleId" value={values.jobTitleId} onChange={handleChange}>
                <option>Pozisyon Seçin</option>
                {jobTitle.map((job) => (
                  <option key={job.id} value={job.id}>{job.name}</option>
                ))}
              </HrmsCustomField>
              <label className="mb-1">Şehir Seçin :</label>
              <HrmsCustomField as="select" name="cityId" value={values.cityId}>
                <option>Şehir Seçin</option>
                {cities.map((city) => (
                  <option key={city.id} value={city.id}>{city.name}</option>
                ))}
              </HrmsCustomField>
              <label className="mb-1">Çalışma Tipi Seçin :</label>
              <HrmsCustomField as="select" name="workTypeId" value={values.workTypeId}>
                <option>Çalışma Tipi Seçin</option>
                {workType.map((workT) => (
                  <option key={workT.id} value={workT.id}>{workT.workTypeName}</option>
                ))}
              </HrmsCustomField>
              <label className="mb-1">Çalışma Şekli Seçin :</label>
              <HrmsCustomField as="select" name="workTimeTypeId" value={values.workTimeTypeId}>
                <option>Çalışma Türü Seçin</option>
                {workTimeType.map((workTime) => (
                  <option key={workTime.id} value={workTime.id}>{workTime.workTimeName}</option>
                ))}
              </HrmsCustomField>
              <label className="mb-1">İlan Açıklaması :</label>
              <HrmsCustomField
                as="textarea"
                rows="4"
                name="jobDefinition"
                placeholder="Açıklama"
                value={values.jobDefinition}
              />
              <div className="row">
                <div className="col-md-4">
                  <label className="mb-1">Pozisyon Sayısı Seçin :</label>
                  <HrmsCustomField as="input" name="quota" placeholder="1" value={values.quota} />
                </div>
                <div className="col-md-4">
                  <label className="mb-1">Minimum Ücret :</label>
                  <HrmsCustomField as="input" name="minSalary" value={values.minSalary}  />
                </div>
                <div className="col-md-4">
                  <label className="mb-1">Maksimum Ücret :</label>
                  <HrmsCustomField as="input" name="maxSalary" value={values.maxSalary} />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-danger mt-3 btn-block text-light"
              >
                {" "}
                Kaydet
              </button>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
}
