import React from 'react'
import './Banner.css'

export default function Banner() {
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
                  <option>
                    Remote
                  </option>
                  <option>
                    Tam zamanlı
                  </option>
              </select>
              </div>
              <div className="col-3">
              <select
                className="form-control-md font-weight-light form-control mr-sm-2"
                id="inlineFormCustomSelect"
              >
                <option>Şehir Seçiniz</option>
                  <option>
                    Adana
                  </option>
                  <option>
                    İzmir
                  </option>
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
