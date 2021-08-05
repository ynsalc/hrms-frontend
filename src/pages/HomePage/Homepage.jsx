import React, { useState, useEffect } from "react";
import "./HomePage.css";
import Advert from "../../layouts/JobAdvertLayout/Advert";
import Filter from "../../layouts/FilterLayout/Filter";
import JobAdvertisementService from "../../services/JobAdvertisementService";
import Pagination from "../Pagination";

export default function Homepage() {
  const [adverts, setAdverts] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [filterOption, setFilterOption] = useState({});
  const [pageSize, setPageSize] = useState(2);
  const [totalPageSize, setTotalPageSize] = useState(0);

  useEffect(() => {
    let advertService = new JobAdvertisementService();
    advertService
      .getAllByFilteredAndPaged(activePage, pageSize, filterOption)
      .then((result) => {
        setAdverts(result.data.data);
        setTotalPageSize(parseInt(result.data.message));
      });
  }, [activePage, pageSize, filterOption]);

  const handleFilterClick = (filterOption) => {
    if (filterOption.cityId.length === 0) filterOption.cityId = null;
    if (filterOption.jobPositionId.length === 0)
      filterOption.jobPositionId = null;
    if (filterOption.workTypeId.length === 0) filterOption.workTypeId = null;
    console.log(filterOption);
    setFilterOption(filterOption);
  };

  const handlePaginationChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const handleSelectChange = (e) => {
    let {value} = e.target
    setPageSize(value)
  }
  const paginationOptions = [
    { key:2, text: "2 İlan", value: 2 },
    { key:10, text: "10 İlan", value: 10 },
    { key:20, text: "20 İlan", value: 20 },
    { key:50, text: "50 İlan", value: 50 },
    { key:100, text: "100 İlan", value: 100 }
  ];

  return (
    <div>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-3 d-none d-lg-block">
            <strong>
              <h4 className="font-weight-bold primary-color-text">Filtreler</h4>
            </strong>
            <Filter clickEvent={handleFilterClick} />
          </div>
          <div className="col-lg-9">
            <div className="container">
              <strong>
                <h4 className="font-weight-bold primary-color-text">İlanlar</h4>
              </strong>

              <div className="advertisements">
                <ul className="component--job-items">
                  {adverts.map((advert) => (
                    <Advert key={advert.id} advertisement={advert} />
                  ))}
                  <div className="row">
                    <div className="col-9">
                      <Pagination totalPage={Math.ceil(totalPageSize/pageSize)} paginate={handlePaginationChange}/>
                    </div>
                    <div className="col-3">
                      <select className="form-control" onChange={handleSelectChange} defaultValue={pageSize}>
                        {paginationOptions.map((paginate) => (
                          <option key={paginate.key} value={paginate.value}>{paginate.text}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
