import React from 'react'
import EmployersList from '../pages/EmployersList';
import { Route } from "react-router";
import EmployeeList from '../pages/EmployeeList';
import CandidateList from '../pages/CandidateList';
import Homepage from '../pages/HomePage/Homepage';
import EmployerDetail from '../pages/EmployerDetail/EmployerDetail';
import AdvertDetail from './AdvertDetail/AdvertDetail';
import CvList from '../pages/CvList';
import CvDetail from './CvDetailLayout/CvDetail';
import Home from './HomeLayout/Home';
import AdvertAdd from '../pages/AdvertAdd/AdvertAdd';
import UpdateCvMain from '../pages/updateCv/UpdateCvMain';
import { ToastContainer } from "react-toastify";
import Profile from '../pages/Profile/Profile';

export default function Dashboard() {
    return (
        <div>
            <ToastContainer position="bottom-right"/>
            <Route exact path="/" component={Home} />
            <Route exact path="/advertList" component={Homepage} />
            <Route exact path="/employerList" component={EmployersList} />
            <Route exact path="/advertisement/:id" component={AdvertDetail} />
            <Route exact path="/employeeList" component={EmployeeList} />
            <Route exact path="/candidateList" component={CandidateList} />
            <Route exact path="/cvList" component={CvList} />
            <Route exact path="/cvresume/:id" component={CvDetail} />
            <Route exact path="/employerdetail/:id" component={EmployerDetail} />
            <Route exact path="/advert/add" component={AdvertAdd} />
            <Route exact path="/updatecvmain" component={UpdateCvMain} />
            <Route exact path="/profile" component={Profile} />
        </div>
    )
}
