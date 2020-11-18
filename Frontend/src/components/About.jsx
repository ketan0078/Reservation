import React from 'react'

function About(){
    return (
        <div className="myvideo">
            <video  autoPlay muted loop id="myvideo" width="100%">
                <source src="/videos/video.mp4" type="video/mp4"/>
            </video>
        </div>
       
    )
     

    
}
export default About