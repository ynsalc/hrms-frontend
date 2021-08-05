import axios from "axios";

export default class JobTitleService
{
    getJobTitle()
    {
        return axios.get("https://hrms-backend-heroku.herokuapp.com/api/jobPositions/getall")
    }
}