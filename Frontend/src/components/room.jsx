import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import { Button } from '@material-ui/core'



function Room(props){

const id=props.number
const history=useHistory()
function setclick(){

history.push(`/room/${id}`)

}


return (
    
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
    
    
)







}
export default Room