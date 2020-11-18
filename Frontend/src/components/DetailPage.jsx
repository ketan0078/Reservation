import React from 'react'
import rooms from './roominfo'
import axios from 'axios'
import CustomButtom from "./Button"
import { Button } from "@material-ui/core";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import StripeButton from './StripeButton'
import { NavLink, useHistory } from 'react-router-dom'

function Detailpage(props){
    const history = useHistory();

function addtocart(){
const data={
    name:rooms[props.match.params.id-1].name,
    price:rooms[props.match.params.id-1].price,
    max_capacity:rooms[props.match.params.id-1].capacity,
    floor:rooms[props.match.params.id-1].floor,
    details:rooms[props.match.params.id-1].info,
    url:rooms[props.match.params.id-1].url,
    number:rooms[props.match.params.id-1].num,
    key:rooms[props.match.params.id-1].key,
    id:rooms[props.match.params.id-1].id
    
}
axios.post('http://127.0.0.1:5000/room',data,{'headers' : {'Authorization': "Bearer " + localStorage.getItem('token')}}).then((res)=>{
    history.push("/home");
    alert("Your Room has been added to the cart!")
}).catch((e)=>{
    console.log(e)
})

}



return <div className='detail'>
    <img className='detail__img' src={rooms[props.match.params.id-1].url}></img>
    <Button variant="contained" className="detail__redirect__button" color="secondary">
    <KeyboardBackspaceIcon /><NavLink className="detail__navlink"  to="/home">  Go Back to Home</NavLink>
    </Button>
    <h1 className="detail__name">{rooms[props.match.params.id-1].name}</h1>

    <div className="float__container">

    
    <div className="float__one">
        <h2 className="detail__desc" >description: {rooms[props.match.params.id-1].description}</h2>
        <h2 className="detail__cap">capacity: {rooms[props.match.params.id-1].capacity}</h2>
        <h2 className="detail__price">price:  ${rooms[props.match.params.id-1].price}</h2>
        <h2 className="detail__floor">floor: {rooms[props.match.params.id-1].floor}</h2>
    </div>
    
    <div className="float__two">
        <h2 >Details: {rooms[props.match.params.id-1].info}</h2>
    </div>
    </div>

    <div className="btn__section">

    
    <div className="add_to_cart">
        {/* <Button className='cartbutton' variant="outlined" color="#00284d"  ></Button> */}
        
        <CustomButtom
             buttonSize="btn--medium"
             buttonColor="blue"
             onClick={addtocart}
        >
            <AddShoppingCartIcon  style={{marginTop:'1px' , marginRight: '3px'}} />
        ADD TO CART
        </CustomButtom>
    </div>
       {/* <button className='cartbutton' onClick={deletecart}>Delete from Cart</button>  */}
    <div className="stripe__button">
    
        <StripeButton 
            price={rooms[props.match.params.id-1].price} 
            name={rooms[props.match.params.id-1].name} 
            description={rooms[props.match.params.id-1].description}
            
            >
            
        </StripeButton>
    </div>
    </div>
</div>




}

export default Detailpage