import axios from "axios"

export default class CvSkillService
{
    getByCvId(resumeId)
    {
        return axios.get("https://hrms-backend-heroku.herokuapp.com/api/cvskills/getbycvid?cvMainId="+resumeId)
    }

    add(skill)
    {
        return axios.post("https://hrms-backend-heroku.herokuapp.com/api/cvskills/add",skill)
    }

    delete(id)
    {
        return axios.delete("https://hrms-backend-heroku.herokuapp.com/api/cvskills/delete?id="+id)
    }
}