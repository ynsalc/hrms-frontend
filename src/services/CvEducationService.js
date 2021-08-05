import axios from "axios"

export default class CvEducationService
{
    getByCvId(resumeId)
    {
        return axios.get("https://hrms-backend-heroku.herokuapp.com/api/cveducation/getbycvid?cvMainId="+resumeId)
    }

    add(education)
    {
        return axios.post("https://hrms-backend-heroku.herokuapp.com/api/cveducation/add",education)
    }

    delete(id)
    {
        return axios.delete("https://hrms-backend-heroku.herokuapp.com/api/cveducation/delete?id="+id)
    }
}