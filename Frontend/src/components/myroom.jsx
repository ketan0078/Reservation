
import axios from 'axios'
import MyRoom from './Roomformyroom'
import Room from './room'
import React,{useState} from 'react'
import { Button } from '@material-ui/core'
import {useHistory} from 'react-router-dom'
import rooms from './roominfo'
import StripeButton from './StripeButton'


function createroom(room){

    return <MyRoom 
    id={room._id}
    number={room.number}
    key={room.id}
    name={room.name}
    type={room.type}
    description={room.details}
    floor={room.floor}
    price={room.price}
    url={room.url}
    capacity={room.max_capacity}
    />

    }

const Myroom = (props) => {
    const [roomstate,setstate]=useState({
        rooms:[]
        
    });
  //  const [total_price , setTotal] = useState('');
    
    

    

        axios.get('http://127.0.0.1:5000/room',{'headers':{'Authorization':"Bearer "+localStorage.getItem('token')}}).then((res)=>{
            setstate({rooms:res.data});
            
        })
        .catch((err)=>{
            console.log(err)
        })
    
    const history=useHistory();
    // const total_value = () => {
        
    // }
    // const total = total_value();
    return (
        <div style={{marginTop: '9rem'}}>

        
        <div>
            {roomstate.rooms.map(createroom)}
            
        </div>
        <div>
            
            
            {roomstate.rooms.length === 0  ? 

            <div className="myroom__mob">
                <p style={{marginTop:'100px',marginLeft:'32rem'}} className="myroom_para_mob">There are No Rooms in your cart.  </p>
                <div className="purchase__button">
                <Button  variant='contained' color='secondary'  onClick={(e) => {
                    e.preventDefault();
                    history.push("/home")
                }}>Continue Your Purchase</Button>
                </div>
                
                
            </div>
             : 
                <div className="total__expenses" >
                     <p style={{marginTop: '4rem'}} className='total__para'>Total amount of your expenses on room:   ${roomstate.rooms.map((room)=>room.price).reduce((sum,value)=>{
            const total = sum+value;
           // setTotal(total);
            return total;
        } , 0)}</p>
                <div className="total__stripe">
                <StripeButton 
                        
                        name='your Favorite Rooms' 
                        price = {roomstate.rooms.map((room)=>room.price).reduce((sum,value)=>{
                            const total = sum+value;
                            
                            return total;
                        } , 0)}
                     >
            
                </StripeButton>
                </div>
                 

                       



                
                </div>

}
        </div>
        
        </div>
    ) 
}

export default Myroom




      
      
 