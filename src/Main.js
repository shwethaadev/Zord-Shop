import React from 'react';
import { Navbar } from './components/Navbar';
import { Carousel } from './components/Carousel';
import { Footer } from './components/Footer';
import About from './components/About';



const Main = () => {
    return (   
        <div className="main">
            <Navbar />
            <Carousel />
            <div className="content" id="content">
               <button className="cn cn1">Become a Seller</button>
               <button className="cn cn2">Start buying</button>
            </div>
            <About />
            <Footer />
            
            

        </div>     

  )
}

export default Main;