import axios from "axios";

export default class CityService
{
    getCities()
    {
        return axios.get("https://hrms-backend-heroku.herokuapp.com/api/cities/getall")
    }
}