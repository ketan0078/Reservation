import  React,{useState} from 'react'
import Navbar from './Navbar'
import Renderroom from './homerooms'
import Filter from './filters'
import {NavLink} from 'react-router-dom'
import Slideshow from "./ImagesSlideshow";


function Home(){
  return <div className='home'>
  
  <Navbar></Navbar>
  {/* <NavLink to='/myrooms'>myrooms</NavLink> */}
  <img className="home__img" src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
  <Filter />
  <Slideshow />
  {/* <Renderroom/> */}
  
  
  
  
  
   </div>
}
export default Home