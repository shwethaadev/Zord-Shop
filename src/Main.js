import React from 'react';
import { Navbar } from './components/Navbar';
import { Carousel } from './components/Carousel';
import { Footer } from './components/Footer';
import About from './components/About';


const Main = () => {

    const connectWallet = async () => {
        if (window.ethereum) {
          console.log('Detected');
          try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          } catch (error) {
            console.log('Error connecting');
          }
        } else {
          console.log('Not detected');
        }
    };
    

    return (   
        <div className="main">
            <Navbar />
            <Carousel />
            <div className="content" id="content">
               <button className="cn cn1" onClick={connectWallet}>Become a Seller</button>
               <button className="cn cn2" onClick={connectWallet}>Start buying</button>
            </div>
            <About />
            <Footer />
        </div>     

  )
}

export default Main;