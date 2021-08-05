import axios from "axios"

export default class CvLanguageService
{
    getByCvId(resumeId)
    {
        return axios.get("https://hrms-backend-heroku.herokuapp.com/api/cvlanguage/getbycvid?cvMainId="+resumeId)
    }

    add(language)
    {
        return axios.post("https://hrms-backend-heroku.herokuapp.com/api/cvlanguage/add",language)
    }

    delete(id)
    {
        return axios.delete("https://hrms-backend-heroku.herokuapp.com/cvlanguage/delete?id="+id)
    }
}