import axios from "axios"

export default class WorkTypeService
{
    getWorkType()
    {
        return axios.get("https://hrms-backend-heroku.herokuapp.com/api/worktypes/getall")
    }
}