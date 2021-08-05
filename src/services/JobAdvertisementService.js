import axios from "axios";

export default class JobAdvertisementService
{
    getJobAdvertisements()
    {
        return axios.get("https://hrms-backend-heroku.herokuapp.com/api/jobadvertisement/getall")
    }

    getAdvertisment(id) 
    {
        return axios.get("https://hrms-backend-heroku.herokuapp.com/api/jobadvertisement/getbyid?id=" + id);
    }

    add(advertisement)
    {
        let advertisements = axios.post("https://hrms-backend-heroku.herokuapp.com/api/jobadvertisement/add", advertisement);
        return advertisements;
    }

    getByEmployerId(id)
    {
        return axios.get("https://hrms-backend-heroku.herokuapp.com/api/jobadvertisement/getbyemployerid?employerId=" +id)
    }

    getAllByFilteredAndPaged(pageNo, pageSize, filterOption) {
        return axios.post(`https://hrms-backend-heroku.herokuapp.com/api/jobadvertisement/getAllByFilteredAndPaged?pageNo=${pageNo}&pageSize=${pageSize}`, filterOption)
    }
}