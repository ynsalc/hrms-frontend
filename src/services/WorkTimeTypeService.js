import axios from "axios";

export default class WorkTimeType
{
    getWorkTimeType()
    {
        return axios.get("https://hrms-backend-heroku.herokuapp.com/api/worktimetypes/getall")
    }
}