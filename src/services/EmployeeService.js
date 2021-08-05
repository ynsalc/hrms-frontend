import axios from "axios"

export default class EmployeeService
{
    getEmployees()
    {
        return axios.get("https://hrms-backend-heroku.herokuapp.com/api/employees/getall");
    }
}