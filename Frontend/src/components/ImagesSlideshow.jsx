import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
 
const images = [
 'https://previews.123rf.com/images/vadymvdrobot/vadymvdrobot1712/vadymvdrobot171200518/91706917-close-up-portrait-of-a-satisfied-pretty-girl-eating-french-fries-and-a-burger-isolated-over-white-ba.jpg',
 'https://previews.123rf.com/images/vadymvdrobot/vadymvdrobot1610/vadymvdrobot161001866/65119687-happy-bearded-man-enjoying-eating-hamburgers-isolated-on-white-background.jpg',
 'https://previews.123rf.com/images/belchonock/belchonock1907/belchonock190712356/127060952-young-happy-couple-with-burgers-in-street-cafe.jpg',
 'https://us.123rf.com/450wm/georgerudy/georgerudy1701/georgerudy170100016/68934918-happy-friends-are-eating-burgers-talking-and-smiling-while-spending-time-together-in-cafe.jpg?ver=6',
 'https://www.papercitymag.com/wp-content/uploads/2018/10/foodies.jpg',
 'https://media.istockphoto.com/photos/enjoying-lunch-with-friends-picture-id1125733916'
];
 
const Slideshow = () => {
    return (
      <div className="slide-container">
        <Zoom scale={0.1}>
          {
            images.map((each, index) => <img key={index} style={{width: "70vw " ,marginLeft: "12.3rem",  height: '100vh'}} src={each} />)
          }
        </Zoom>
      </div>
    )
}

export default Slideshow