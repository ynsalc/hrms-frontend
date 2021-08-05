import axios from "axios";

export default class JobPositionService
{
    getJobPositions()
    {
        return axios.get("https://hrms-backend-heroku.herokuapp.com/api/jobPositions/getall")
    }
}