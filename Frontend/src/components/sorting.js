import React,{useState} from 'react'
import rooms from './roominfo'




    function sortbypriceLowtoHigh(){
      
           return rooms.sort((a,b) => a.price-b.price);
        
        }
        
        
        function sortbypriceHightoLow(){
        
           return rooms.sort((a,b) => b.price-a.price);
        
        }
        




// function sortbyfloor(value){

   

// return rooms.filter((room)=>(room.floor==value))

// }


// function sortbycapacity(value){

// return rooms.filter((room)=>(room.capacity==value))

// }

function sortroom(floor,capacity,sortby){
   
   let Rooms=[]
   if(floor&&capacity){
    Rooms= rooms.filter((room)=>(room.floor==floor&&room.capacity==capacity))}

   else if(floor===''&&capacity!==''){
    Rooms= rooms.filter((room)=>(room.capacity==capacity))
   }

   else if(floor!==''&&capacity===''){
    Rooms= rooms.filter((room)=>(room.floor==floor))
   }

   if(sortby==='lowtohigh'){return Rooms.sort((a,b) => a.price-b.price)}
   else if(sortby==='hightolow'){
   return  Rooms.sort((a,b) => b.price-a.price)
   }
}

// export {sortbycapacity,sortbypriceLowtoHigh,sortbypriceHightoLow,sortbyfloor}

 export {sortroom,sortbypriceLowtoHigh,sortbypriceHightoLow}