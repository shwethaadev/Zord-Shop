import React from 'react';
import Upper from './Upper';
import { Carousel } from '../Carousel';
import Bottom from './Bottom';
import Example from './Example';
import Detailes from './Detailes';
import Workmodel from './Workmodel';



const Impt = () => {
  return (
      <div className='impt-container'>
          <Upper />
          <Example />
          <Carousel />
          <Workmodel />
          <Detailes />
          <Bottom />
     </div>     
  )
}

export default Impt;