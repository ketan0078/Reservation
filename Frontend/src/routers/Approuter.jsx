import React from 'react'
import {BrowserRouter,Route,Switch , Redirect} from 'react-router-dom'

import Loginform from '../components/LoginPage'
import Signupform from '../components/Signup'
import Home from '../components/Home'
import Detailpage from '../components/DetailPage'
import Myroom from '../components/myroom'
import About from '../components/About'
import Allrooms from "../components/Allrooms"
import PrivateRoute from './Privateroute'
import Navbar from '../components/Navbar'
import ScrollToTop from '../components/ScrollToTop'

const Approuter=()=>{
    
    let isLoggedIn = Boolean(localStorage.getItem('token'));  
    if(isLoggedIn) {
        <Redirect to="/home" />
    }
    
    return <BrowserRouter>
    <ScrollToTop />
    <Navbar />
    <div>
    <Switch>
        <Route path='/' component={Loginform}  exact={true}></Route>
        <Route path='/signup' component={Signupform}></Route>
        <PrivateRoute path='/home' component ={Home}></PrivateRoute>
        <PrivateRoute path='/room/:id'  component={Detailpage} ></PrivateRoute>
        <PrivateRoute path='/myrooms' component={Myroom}></PrivateRoute>
        <PrivateRoute path='/Allrooms' component={Allrooms}></PrivateRoute>
        <PrivateRoute path='/About' component={About}></PrivateRoute>

    </Switch>




    </div>
    
    
    
    
    
    </BrowserRouter>
}
export default Approuter