import axios from "axios";

export default class JobAdvertisementService
{
    getJobAdvertisements()
    {
        return axios.get("http://localhost:8080/api/jobadvertisement/getall")
    }

    getAdvertisment(id) 
    {
        return axios.get("http://localhost:8080/api/jobadvertisement/getbyid?id=" + id);
    }

    add(advertisement)
    {
        let advertisements = axios.post("http://localhost:8080/api/jobadvertisement/add", advertisement);
        return advertisements;
    }
}