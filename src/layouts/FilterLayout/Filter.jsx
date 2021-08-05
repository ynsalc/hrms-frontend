import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faFilter,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import "./Filter.css";
import JobPositionService from "../../services/JobPositionService";
import CityService from "../../services/CityService";
import WorkTypeService from "../../services/WorkTypeService";
import HrmsCustomField from '../../utils/HrmsCustomField'

export default function Filter({ clickEvent }) {
  const [jobPosition, setJobPosition] = useState([]);
  const [workTypes, setWorkTypes] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getJobPositions()
      .then((result) => setJobPosition(result.data.data));
    let workTypeService = new WorkTypeService();
    workTypeService
      .getWorkType()
      .then((result) => setWorkTypes(result.data.data));
    let cityService = new CityService();
    cityService.getCities().then((result) => setCities(result.data.data));
  }, []);

  const [cityIndexs, setCityIndexs] = useState([]);
  const handleChangeCity = (e) => {
    var {value} = e.target
    setCityIndexs([...cityIndexs,value])
    console.log([...cityIndexs,value]);
  };

  const [jobPositionIndexs, setJobPositionIndexs] = useState([]);
  const handleJobPosition = (e) => {
    var {value} = e.target
    setJobPositionIndexs([...jobPositionIndexs,value]);
    console.log([...jobPositionIndexs,value]);
  };

  const [workTypeIndexs, setWorkTypeIndexs] = useState([]);
  const handleWorkType = (e) => {
    var {value} = e.target
    setWorkTypeIndexs([...workTypeIndexs,value]);
    console.log([...workTypeIndexs,value]);
  };
  function handleChange(e) {
    console.log(e.target.value);
  }

  function refresh()
  {
    window.location.assign("http://localhost:3000/advertList")
  }

  return (
    <div>
      <aside className="component--job-filter shadow-sm">
        <form>
          <div className="search mb-3">
            <input
              type="text"
              className="form-control shadow-sm"
              placeholder="Kelime İle Ara"
              onChange={handleChange}
            />
          </div>
          <hr className="mt-0" />
          <h5 className="font-weight-bold primary-color-text">
            <FontAwesomeIcon icon={faFilter} />
            İş Türleri
          </h5>
          <ul className="filter-form">
            <li>
              <select onChange={handleWorkType} value={workTypeIndexs}>
                <option>Çalışma Tipi Seçin</option>
                {workTypes.map((workType) => (
                  <option key={workType.id} value={workType.id}>
                    {workType.workTypeName}
                  </option>
                ))}
              </select>
            </li>
          </ul>
          <ul className="filter-form">
            <li>
              <label htmlFor="position">Pozisyon</label>
              <select
                onChange={handleJobPosition}
                value={jobPositionIndexs}
              >
                <option>Pozisyon Seçin</option>
                {jobPosition.map((position) => (
                  <option key={position.id} value={position.id}>
                    {position.name}
                  </option>
                ))}
              </select>
            </li>
          </ul>
          <hr />
          <h5 className="font-weight-bold primary-color-text">
            <FontAwesomeIcon icon={faLocationArrow} />
            Konum
          </h5>
          <ul className="filter-form">
            <li>
              <label htmlFor="country">Ülke</label>
              <select>
                <option value="">Türkiye</option>
              </select>
            </li>
            <li>
              <label htmlFor="city">Şehir</label>
              <select
                onChange={handleChangeCity}
                value={cityIndexs}
              >
                <option>Şehir Seçin</option>
                {cities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
              </select>
            </li>
            <li>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() =>
                  clickEvent({
                    cityId: cityIndexs,
                    jobPositionId: jobPositionIndexs,
                    workTypeId: workTypeIndexs,
                  })
                }
              >
                <FontAwesomeIcon icon={faCheckCircle} />
                Uygula
              </button>
            </li>
            <li>
            <button
                type="button"
                className="btn btn-danger"
                onClick={() =>
                  refresh()
                }
              >
                <FontAwesomeIcon icon={faCheckCircle} />
                Temizle
              </button>
            </li>
          </ul>
          
        </form>
      </aside>
    </div>
  );
}
