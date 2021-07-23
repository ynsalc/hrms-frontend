import axios from "axios";

export default class WorkTimeType
{
    getWorkTimeType()
    {
        return axios.get("http://localhost:8080/api/worktimetypes/getall")
    }
}