import React, { useState, useEffect } from 'react'
import './Banner.css'
import CityService from '../../services/CityService'
import WorkTypeService from '../../services/WorkTypeService'

export default function Banner() {

  const [cities, setCities] = useState([])
  const [workTypes, setWorkTypes] = useState([])

  useEffect(() => {
    let cityService = new CityService();
    let workTypeService = new WorkTypeService()

    cityService.getCities().then((result) => setCities(result.data.data))
    workTypeService.getWorkType().then((result) => setWorkTypes(result.data.data))
  }, [])

    return (
        <div>
            <section className="banner-section">
          <div className="container rounded shadow-lg bg-light p-3">
            <div className="form-row">
              <div className="col-5">
                <input
                type="text"
                className="form-control form-control-md font-weight-light"
                placeholder="Pozisyon Ara"
              />
              </div>
            
              <div className="col-3">
              <select
                className="form-control-md font-weight-light form-control mr-sm-2"
                id="inlineFormCustomSelect"
              >
                <option>İş Tipi Seçiniz</option>
                {workTypes.map((workType => 
                  <option key={workType.id} value={workType.id}>
                    {workType.workTypeName}
                  </option>
                ))}
                  
              </select>
              </div>
              <div className="col-3">
              <select
                className="form-control-md font-weight-light form-control mr-sm-2"
                id="inlineFormCustomSelect"
              >
                <option>Şehir Seçiniz</option>
                
                {cities.map((city => 
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
              </select>
              </div>
              <div className="col-1 h-100">
              <button className="btn btn-block btn-warning font-weight-bold my-auto btn-md btn-main shadow">
                Ara
              </button>
            </div>
            </div>
          </div>
        </section>
        </div>
    )
}
