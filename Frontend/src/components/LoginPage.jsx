import React , {useState} from 'react'
import {  Button } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import axios from 'axios';
import { Link , useHistory } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const LoginPage = () => {
    const history = useHistory();
    const [formData , setFormData] = useState({
        email: '',
        password: '',
        error: ''

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
           
            email: formData.email,
            password: formData.password, 

        };

        axios.post("http://127.0.0.1:5000/user/login" , data)
            .then((res) => {
                console.log(res.data)
                localStorage.setItem('token', res.data.token);
                // console.log("success");
                // console.log(res.daa);
                history.push("/home");

            })
            .catch((err) => setFormData({
                email: '',
                password: '',
                error: 'Please provide valid Credentials'
            }));
    }

    return (
        <div className='form'>
            <div className="form__box">
            <ValidatorForm  onSubmit={handleSubmit}>
            <AccountCircleIcon fontSize="large" className="login__icon"/>
            <h1 className="header__login">Log In </h1>
            <h1 className="error">{ formData.error }</h1>
                <div className="formcomponent">
                    <TextValidator  
                        variant="outlined"  
                        onChange={handlechange}
                        type="email" 
                        autoFocus
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
                <Button color="primary" variant="contained" type="submit" >Submit</Button>

              
                </div>
                  <p className="login__para">Don't Have an account?  
                    
                        <Link to="/signup" style={{ color: 'purple'  }}>Sign up</Link>
                    
                </p>


            </ValidatorForm>

            </div>
            
        </div>
    )
}

export default LoginPage;
