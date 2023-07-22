import React from 'react';
import { Navbar } from './components/Navbar';
import { Carousel } from './components/Carousel';
import { Footer } from './components/Footer';
import About from './components/About';
import { Link } from 'react-router-dom';



const Main = () => {

    // const connectWallet = async () => {
    //     if (window.ethereum) {
    //       console.log('Detected');
    //       try {
    //         const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    //       } catch (error) {
    //         console.log('Error connecting');
    //       }
    //     } else {
    //       console.log('Not detected');
    //     }
    // };
  
    

    return (   
        <div className="main">
            <Navbar />
            <Carousel />
        <div className="content" id="content">
          <Link to ='impt'>
            <button className="cn cn1">Become a Seller</button>
            </Link>
               <button className="cn cn2">Start buying</button>
            </div>
            <About />
            <Footer />
        </div>     

  )
}

export default Main;