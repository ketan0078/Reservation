import React , {useState} from 'react'
import {  Button } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import axios from 'axios';
import { Link , useHistory } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Signup = () => {
    const history = useHistory();
    const [formData , setFormData] = useState({
        name:'',
        email: '',
        password: ''

    });


    const handlechange = (e) => {
        const queryname=e.target.name
        const value=e.target.value
        setFormData((prev)=>{
            return {...prev,[queryname]:value}
        })
        
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        const data = {
            userName: formData.name,
            email: formData.email,
            password: formData.password, 

        };

        axios.post("http://127.0.0.1:5000/user" , data)
            .then((res) => {
                console.log("success");
                console.log(res.data);
                history.push("/");
            })
            .catch((err) => console.log(err));
        
        
    }

    return (
        <div className="form">
            <div className="form__box">
            <ValidatorForm  onSubmit={handleSubmit}>
                <AccountCircleIcon fontSize="large" className="login__icon"/>
                <h1 className="header">Sign Up</h1>
                <div className="formcomponent">
                    <TextValidator 
                        className="formcomponent"  
                        onChange={handlechange} 
                        variant="outlined" 
                        validators={['required']} 
                        errorMessages={['this field is required']}
                        type="text" 
                        name="name"
                        autoComplete="off"
                        value={formData.name}
                        label="Name" 
                        autoFocus 
                        placeholder="Enter Your Name Here" />
                </div>
                <div className="formcomponent">
                    <TextValidator  
                        variant="outlined"  
                        onChange={handlechange}
                        type="email" 
                        autoComplete="off"
                        value={formData.email}
                        validators={['required','isEmail']} 
                        errorMessages={['this field is required','email is invalid']}
                        label="email" 
                        name="email"
                        placeholder="Enter Your Email Here" />
                </div>
                <div className="formcomponent">
                    <TextValidator  
                        variant="outlined" 
                        onChange={handlechange} 
                        type="password" 
                        validators={['required']}
                        errorMessages={['this field is required']}
                        value={formData.password}
                        label="password"   
                        name="password"
                        placeholder="Enter Your Password Here" />
                </div>
                <div className="login__button">
                <Button color="primary" variant="contained" type="submit"  >Submit</Button>
              
                </div>
                  <p className="signup__para">Back to 
                    
                        <Link to="/" style={{ color: 'purple'  }}>    Login</Link>
                    
                </p>
            </ValidatorForm>
            </div>
        </div>
    )
}

export default Signup;
