import React from 'react'
import {Route,Redirect} from 'react-router-dom'

function Privateroute({component:Component,...rest}){
return <Route {...rest} component={(props)=>(localStorage.getItem('token')?
(<div><Component {...props}></Component></div>):(<Redirect to='/'/>))}/>


}




export  default Privateroute