import React from 'react'
import './About.css'

const About = () => {
  return (
    <div id="about" className='about' style={{ margin: { left: -10, right: -10 } }}>
      <div className='about-container'>
      <div className='about-image'>
      <img className='image' src='shirts.gif' alt='' />
        </div>
          <div className='about-text'>
            <h1 className='text'>
              The e-commerce Website<br />
            </h1>
            <div className='container-a'>
              <h1 className='text-animate'>
              That Cares!!!
              </h1>
            </div>
          </div>
          
          <div className='about-image'>
            <img className='image' src='about-img.gif' alt='' />  
          </div>
      
      </div>
      {/* <hr></hr> */}
    {/* <div className='about-container'>
    <div className='about-image'>
      <img className='image' src='shirts.gif' alt='' />
        </div>
        <div className='about-text'>
            <h1>
            The Amazing e-commerce <br>
            </br>platform that cares
            <br></br> for everyone..! 
            </h1>
          </div>
  </div> */}
    </div>
  )
}

export default About