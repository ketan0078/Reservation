import StripeCheckout from 'react-stripe-checkout';
import React,{useState} from 'react'
import axios from 'axios'
import StripeSuccessPage  from "./StripeSuccessPage";
import ShopIcon from '@material-ui/icons/Shop';
// import { Button } from '@material-ui/core';
import CustomButton from "./Button"
import { requirePropFactory } from '@material-ui/core';

require('dotenv').config();


const StripeButton = (props) => {
    const [product , setProduct] = useState({
        
        price: props.price,
        name:props.name
       
    })

    const makePayment = token => {
        const body = {
            token,
            product
        };

        return axios.post("http://127.0.0.1:5000/payment" , body , {'headers' : {'Authorization' : 'Bearer ' + localStorage.getItem('token')}})
                    .then((response) => console.log(response))
                    .catch( err => console.log(err))
    }

    return (
        
            <StripeCheckout 
                stripeKey="pk_test_51HmBQwB8R8hmbYXgLARjEJCMTIKWdbVNR8mgIT3mgPv1rncGA7hDOro9Ih8BiNVFHAIW7UUKLRFFTgJ3tohXqyd800ZB5CB7Yl"
                amount={props.price * 100}
                name={`BUY ${props.name}`}
                
                token={makePayment}

            >
                <CustomButton 
                    buttonSize="btn--medium"
                    buttonColor="blue" 
                   
                    >
                        <ShopIcon  style={{marginTop:'1px' , marginRight: '3px'}} />
                    Buy this Room in just ${props.price} 

                
                </CustomButton>
            </StripeCheckout>
        
    )
}

export default StripeButton