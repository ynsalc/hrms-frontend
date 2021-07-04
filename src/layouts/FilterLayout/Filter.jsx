import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faFilter, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import "./Filter.css";
import JobPositionService from "../../services/JobPositionService";
import CityService from "../../services/CityService";

export default function Filter() {
  const [jobPosition, setJobPosition] = useState([]);
  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getJobPositions()
      .then((result) => setJobPosition(result.data.data));
  }, []);

  const [cities, setCities] = useState([]);
  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => setCities(result.data.data));
  }, []);
  return (
    <div>
      <aside className="component--job-filter shadow-sm">
        <form action="">
          <div className="search mb-3">
            <input
              type="text"
              className="form-control shadow-sm"
              placeholder="Kelime İle Ara"
            />
          </div>
          <hr className="mt-0" />
          <h5 className="font-weight-bold primary-color-text">
           <FontAwesomeIcon icon={faFilter} />İş Türleri
          </h5>
          <ul className="checkbox-list">
              <li>
                <label>
                  <input type="checkbox" />
                  <span className="checkbox"></span>
                  <span className="text">Tam zamanlı</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  <span className="checkbox"></span>
                  <span className="text">Yarı zamanlı</span>
                </label>
              </li>
          </ul>
          <ul className="filter-form">
            <li>
              <label htmlFor="position">Pozisyon</label>
              <select name="position" id="position">
                {jobPosition.map((position) => (
                  <option key={position.id} value={position}>
                    {position.name}
                  </option>
                ))}
              </select>
            </li>
          </ul>
          <hr />
          <h5 className="font-weight-bold primary-color-text">
           <FontAwesomeIcon icon={faLocationArrow} />Konum
          </h5>
          <ul className="filter-form">
            <li>
              <label htmlFor="country">Ülke/Şehir</label>
              <select name="country" id="country">
                <option value="">Türkiye</option>
              </select>
            </li>
            <li>
              <label htmlFor="city">Şehir</label>
              <select name="city" id="city">
                {cities.map((city) => (
                  <option key={city.id} value={city}>
                    {city.name}
                  </option>
                ))}
              </select>
            </li>
            <li>
              <button type="submit">
              <FontAwesomeIcon icon={faCheckCircle} />Uygula
              </button>
            </li>
          </ul>
        </form>
      </aside>
    </div>
  );
}
