import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Widget from '../components/Widget.js';
import Navbar from '../components/Navbar.js';
import Chart from '../components/Chart.js';
import OrderCard from '../components/orderCard.js';
import Bchart from '../components/Bchart.js';
import Map from '../components/Map.js';

const Home = ({ setPageNumber}) => {
    setPageNumber(1);

  return (
    <div className='w-100 overflow-auto'>
      <div className='container'>

        <div className='mt-3 mb-5 col-12'>
        <Navbar />
        </div>

        <div className='row mb-4'>
        <div className='d-sm-flex col-12 col-lg-8 h-25'>
        <Widget box='dashboard' />
        <Widget box='videos' />
        <Widget box='orders' />
        <Widget box='purchases' />
        <Widget box='trends' />
        </div>
        <div className='col-12 col-lg-4'>
          <Bchart />
        </div>
        </div>

        <div className='row mb-4'>
        <div className='col-12 col-lg-8'>
        <Chart />
        </div>
        <div className='col-12 col-lg-4 mt-4 mt-md-0'>
          <Map />
        </div>
        </div>

        <div className='d-sm-flex col-12 '>
          <OrderCard card='google'/>
          <OrderCard card='scrum'/>
          <OrderCard card='cabin'/>
          <OrderCard card='scrum'/>
        </div>

      </div>
    </div>
  )
}

export default Home