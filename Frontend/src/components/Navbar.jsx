

import React, { useState } from "react";
import { Link , useHistory } from "react-router-dom";
import axios from 'axios'
import { FaBars, FaTimes, FaReact } from "react-icons/fa";
import { Button } from "@material-ui/core"
import { IconContext } from "react-icons/lib";
import {NavLink} from 'react-router-dom'


function Navbar() {
  
   const [welcomeName,setWelcomeName]=useState('')
    

  const [click, setClick] = useState(false);
 // const [pic , setPic] = useState();
  const [selectedFile , setSelectedFile] = useState(null);

  const history = useHistory();
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleLogout = () => {
    axios.post("http://127.0.0.1:5000/user/logout"  , {} , {'headers' : {'Authorization': 'Bearer ' + localStorage.getItem('token')}})
      .then((res) => {
       
      history.push("/");
      localStorage.removeItem('token');
        
      })
      .catch((e) => {
        console.log(e);
      })
  };

  
    axios.get("http://127.0.0.1:5000/user/me" , {'headers' : {'Authorization' : 'Bearer '+ localStorage.getItem('token')}})
      .then((res) => {
        setWelcomeName(res.data.userName);
      })
      .catch((e)=>{
        console.log(e);
      })
    
  
  // axios.get('http://127.0.0.1:5000/user/me',{'headers':{'Authorization':"Bearer "+localStorage.getItem('token')}}).then((res)=>{
  //     setstate({name:res.data.userName})
  //     console.log('successs')
  //  })
  

  const handleImage = (e) => {
    // console.log(e.target.value);
    // axios.post("127.0.0.1:5000/user/avatar" , {}, {'headers': {'Authorization': 'Bearer '+ localStorage.getItem('token')}} )
    //   .then((res) => {
    //     console.log("successfull");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })
    setSelectedFile(e.target.files[0])
    // console.log(e.target.files[0]);
  }
  const onClickHandler = () => {
    const data = new FormData();
    data.append('file' , selectedFile);
    axios.post("http://127.0.0.1:5000/user/me/avatar" ,data , {'headers': {'Authorization': 'Bearer ' + localStorage.getItem('token')}})
      .then((res) => {
        console.log(res.statusText)
        // axios.get("http://127.0.0.1:5000/user/me/avatar" , {'headers' : {'Authorization': 'Bearer ' + localStorage.getItem('token')}})
        //   .then((res) => {
        //     console.log(res.statusText);
        //   })
        //   .catch((e) => {
        //     console.log(e);
        //   })
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <div>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar sticky">
          <div className="navbar-container container">
            
              {/* <input type="file" name="file" onChange={handleImage} />
              <button type="button" style={{cursor: 'pointer'}}   onClick={onClickHandler}>Upload</button> */}
             <div className="welcome" ><h2>Welcome {welcomeName}!</h2></div>
           
            
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/About"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About Us
                </Link>

              </li>
              <li className="nav-item">
                <Link
                  to="/Allrooms"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  All Rooms
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/myrooms"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  My Rooms
                </Link>
              </li>
              <li className="nav-item">
                <Button style={{marginTop:'20px'}} variant="contained" color="secondary" onClick={handleLogout}> Logout </Button>
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;