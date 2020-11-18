import React from 'react'
import Room from './room'

import room1 from './homeRoom/homeroom1'
import room2 from './homeRoom/homeroom2'
import room3 from './homeRoom/homeroom3'


function createroom(room){

return <Room 
    number={room.num}
    key={room.id}
    name={room.name}
    type={room.type}
    description={room.description}
    floor={room.floor}
    price={room.price}
    url={room.url}
    capacity={room.capacity}
    
/>

}


function Renderroom(){
return <div> <h2 className="header featured">Featured Rooms</h2> <div className='multiplerooms1'>{room1.map(createroom)}</div><br />
<div className='multiplerooms'>{room2.map(createroom)}</div><br />
<div className='multiplerooms'>{room3.map(createroom)}</div>
</div>



}
export default Renderroom