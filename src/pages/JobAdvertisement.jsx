import React,{useState,useEffect} from "react";
import JobAdvertisementService from '../services/JobAdvertisementService'
import { Link } from "react-router-dom";

export default function JobAdvertisement() {
  const [advert, setAdvert] = useState([])
  useEffect(() => {
    let advertService = new JobAdvertisementService()
    advertService.getJobAdvertisements().then((result)=>setAdvert(result.data.data))
    return () => {
      
    }
  }, [])
  return (
    <div>
      <div className="section-title text-center">
                <div className="title-text mb50">
                  <h2>Öne Çıkan İş İlanları</h2>
                </div>
              </div>
    
      <div class="row">
      {advert.map((advertisement) => (
        <div class="col-3 mb-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{advertisement.jobPosition?.name}</h5>
              <p class="card-text">{advertisement.employer?.companyName}</p>
              <Link to={`/advertisement/${advertisement.id}`}>
                <a href="#" class="btn btn-primary">Detaya Git</a>
              </Link>
            </div>
          </div>
        </div>
      ))}
      </div>
      
    </div>
  );
}
