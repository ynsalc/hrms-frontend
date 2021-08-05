import axios from "axios";

export default class CvExperienceService
{
    getByCvId(resumeId)
    {
        return axios.get("https://hrms-backend-heroku.herokuapp.com/api/cvexperience/getbycvid?cvMainId="+resumeId)
    }

    add(experience)
    {
        return axios.post("https://hrms-backend-heroku.herokuapp.com/api/cvexperience/add",experience)
    }

    delete(id)
    {
        return axios.delete("https://hrms-backend-heroku.herokuapp.com/api/cvexperience/delete?id="+id)
    }
}