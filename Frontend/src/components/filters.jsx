import React,{useState} from 'react'
// import {sortbycapacity,sortbypriceLowtoHigh,sortbypriceHightoLow,sortbyfloor} from './sorting'
import {sortroom,sortbypriceLowtoHigh,sortbypriceHightoLow} from './sorting'
import Room from './room'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import room1 from './homeRoom/homeroom1'
import room2 from './homeRoom/homeroom2'
import room3 from './homeRoom/homeroom3'


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(1)
    },
    gridContainer: {
        width:'100vw',
        position: 'absolute',
        // top: '0',
        // bottom: '-14rem',
        left: '-20rem',
        
       
        
        
        // paddingRight: '2rem',
        // height: '20rem',
        // width: '150rem'
        // overflowX: 'hidden'

    },
    
}))

function Filter(){
    const {root , gridContainer} = useStyles();

const [inputstate,setstate]=useState({
    cap:'',
    floor:'',
    rooms:[],
    sortby:'lowtohigh'
})


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

function handlefloor(e){

const value=e.target.value
const sortedrooms=sortroom(value,inputstate.cap,inputstate.sortby)
setstate((prev)=>{return {...prev,floor:value,rooms:sortedrooms}})



}
// function handleprice(e){
//     const value=e.target.value
//     setstate((prev)=>{return {...prev,price:value}})
//     const sortedrooms=sortbyprice()
//     setstate({rooms:sortedrooms})
// }
function handlecap(e){
    const value=e.target.value
    const sortedrooms=sortroom(inputstate.floor,value,inputstate.sortby)
    setstate((prev)=>{return {...prev,cap:value,rooms:sortedrooms}})
    
   
}
const isStyled = inputstate.rooms.length !== 0  ;

return (
    <div>

    
<div className='filterinput' style={{backgroundColor: " #1c2237"}} >
            <input className='filtercomponent' type='number' name='cap' onChange={handlecap} value={inputstate.cap}  placeholder='No. of Guests'></input>
            <input className='filtercomponent' type='text'  name='floor' value={inputstate.floor} onChange={handlefloor} placeholder='floor '></input>
    {/* <input className='filtercomponent' type='text' name='price' value={inputstate.price} onChange={handleprice} placeholder='price'></input> */}

            <select className='filtercomponent' value={inputstate.sortby} onChange={(e)=>{
                    if(e.target.value==='lowtohigh'){
                    setstate((prev)=>{return {...prev,rooms:sortroom(inputstate.floor,inputstate.cap,'lowtohigh'),sortby:'lowtohigh'}});
                    }
                    else if(e.target.value==='hightolow'){
                        setstate((prev)=>{return{...prev,rooms:sortroom(inputstate.floor,inputstate.cap,'hightolow'),sortby:'hightolow'}})
                    }
            }}>
                <option  value='lowtohigh'>Price Low to high</option>
                <option  value='hightolow' >Price High to low</option>
            </select>
            <div className='multiplerooms' 
className={root} >
                
                {inputstate.rooms.length !== 0 ? <div  >
<Grid container direction="row"
className={gridContainer}
// className="gridContainer"
id="gridfs"
justify="center"
alignItems="center"
alignContent="center"


 >
{inputstate.rooms.map((room) => {
     return (
        <Grid xs={6} sm={6} md={4}  item >
    <Room 
        
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
    </Grid>
    

    )
})}

</Grid> 
</div>: 
    <div  style={{position:'absolute',width: "100%" ,  color: 'red' ,lineHeight: '1.2', marginTop: '3rem' ,  marginLeft: '1rem'}} >
      <h2>Oops! , No results for Your current Search.</h2>
    </div>
}
            </div>

        </div>
        <div> <h2 className="header featured">Featured Rooms</h2> <div className={isStyled ? 'multiplerooms1' : 'multiplerooms'} >{room1.map(createroom)}</div><br />
<div className='multiplerooms'>{room2.map(createroom)}</div><br />
<div className='multiplerooms'>{room3.map(createroom)}</div>
</div>
        </div>)



}

export default Filter