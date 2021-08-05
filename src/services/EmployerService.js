import axios from "axios";

export default class EmployerService
{
    getEmployers()
    {
        return axios.get("https://hrms-backend-heroku.herokuapp.com/api/employers/getall")
    }

    getById(id)
    {
        return axios.get("https://hrms-backend-heroku.herokuapp.com/api/employers/getbyid?id="+id)
    }
}