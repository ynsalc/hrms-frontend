import axios from "axios";

export default class CandidateService
{
    getCandidates()
    {
        return axios.get("https://hrms-backend-heroku.herokuapp.com/api/candidates/getall")
    }

    getByFavorite(id)
    {
        return axios.get(`https://hrms-backend-heroku.herokuapp.com/api/candidates/getbyfavoritecandidateid?candidateId=${id}`)
    }

    addFavorities(userId,jobId)
    {
        return axios.post(`https://hrms-backend-heroku.herokuapp.com/api/candidates/addfavoriteadvert?candidateId=${userId}&jobAdvertId=${jobId}`)
    }

    removeFavorities(jobAdvertId)
    {
        return axios.delete(`https://hrms-backend-heroku.herokuapp.com/api/candidates/removefavoriteadvert?id=${jobAdvertId}`)
    }
}