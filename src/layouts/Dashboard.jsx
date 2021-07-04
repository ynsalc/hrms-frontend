import React from 'react'
import EmployersList from '../pages/EmployersList';

import { Route } from "react-router";
import EmployeeList from '../pages/EmployeeList';
import CandidateList from '../pages/CandidateList';
import Homepage from '../pages/HomePage/Homepage';
import AdvertDetail from './AdvertDetail/AdvertDetail';
import CvList from '../pages/CvList';
import CvMain from './CvMainLayout/CvMain';
import CvDetail from './CvDetailLayout/CvDetail';
import Home from './HomeLayout/Home';

export default function Dashboard() {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/advertList" component={Homepage} />
            <Route exact path="/employerList" component={EmployersList} />
            <Route exact path="/advertisement/:id" component={AdvertDetail} />
            <Route exact path="/employeeList" component={EmployeeList} />
            <Route exact path="/candidateList" component={CandidateList} />
            <Route exact path="/cvList" component={CvList} />
            <Route exact path="/cvresume/:id" component={CvDetail} />
        </div>
    )
}
