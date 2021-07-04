import axios from "axios";

export default class CvService
{
    getCv()
    {
        return axios.get("http://localhost:8080/api/cvmain/getall")
    }

    getById(id)
    {
        return axios.get("http://localhost:8080/api/cvmain/getById?id="+id)
    }
}