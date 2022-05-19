import React from 'react';
import map from '../images/map.jpeg';

const Map = () => {
  return (
    <div className='border shadow-lg rounded p-3 w-100 h-100 text-center'>
        <h2>By Country</h2>            
        <img className='w-100 mt-5' src={map} alt='world map'></img>
    </div>
  )
}

export default Map;