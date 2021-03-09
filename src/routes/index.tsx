import React from 'react'
import {Route} from 'react-router-dom';

import Dashboard from '../pages/Dashboard/index'
import UserDetails from '../pages/UserDetails/index'

const Routes:React.FC =()=>(
    <>
    <Route path="/" exact component={Dashboard} />
    <Route path="/details"  component={UserDetails} />
    </>

)

export default Routes