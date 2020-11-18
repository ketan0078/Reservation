import React,{useState} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import { Button } from '@material-ui/core'
import CustomButton from "./Button"
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

function MyRoom(props){
    const id=props.number
    const history=useHistory()
function setclick(){

history.push(`/room/${id}`)

}

const ID=props.id
function deletecart(){
axios.delete(`http://127.0.0.1:5000/room/${ID}`, {'headers':{'Authorization':"Bearer "+localStorage.getItem('token')}}).then((res)=>{
    // console.log('deleted')
    window.location.reload();
}).catch((e)=>{
    console.log(e)
})

console.log(props)
}


return ( 
<div>
<div className="room">
<div className="room__img__container">
    
    <img className='room__img' src={props.url}></img>
   
    {/* <h4 className="room__desc" >description:{props.description}</h4> */}
    <h4 className="room__name" >{props.name}</h4> 
    {/* <h4 className="room__floor" >room floor:{props.floor}</h4>
    <h4 className="room__capacity" >capacity:{props.capacity}</h4>
    <h4 className="room__price" >price:{props.price}</h4> */}
</div>
    <div className="room__button"  onClick={setclick}>
        <Button variant='outlined' color="secondary"> Features </Button>
    </div>

   

</div>
<div className="deleteButton">
    <CustomButton 
        buttonSize="btn--medium"
        buttonColor="blue"  
        className='cartbutton' 
        onClick={deletecart}>
            <div>
                <DeleteOutlineIcon style={{marginTop:'2px'}} />  
               <p>Delete Room</p>
            </div>
           
    </CustomButton> 
    </div>
</div>
)

}
export default MyRoom
