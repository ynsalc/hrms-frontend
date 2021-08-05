import axios from "axios";

export default class CvService
{
    getCv()
    {
        return axios.get("https://hrms-backend-heroku.herokuapp.com/api/cvmain/getall")
    }

    getById(id)
    {
        return axios.get("https://hrms-backend-heroku.herokuapp.com/api/cvmain/getById?id="+id)
    }

    getByCandidateId(id)
    {
        return axios.get("https://hrms-backend-heroku.herokuapp.com/api/cvmain/getByCandidateId?candidateId="+id)
    }

    update(coverLetter,resumeId,githubLink,linkedinLink)
    {
        return axios.put(`https://hrms-backend-heroku.herokuapp.com/api/cvmain/update?coverLetter=${coverLetter}&cvMainId=${resumeId}&githubLink=${githubLink}&linkedinLink=${linkedinLink}`)
    }
}