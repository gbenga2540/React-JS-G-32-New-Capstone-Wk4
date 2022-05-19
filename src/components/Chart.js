import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LineChart, Line, XAxis, YAxis, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        month: 'January',
        orders: 450,
        purchases: 550
    },
    {
        month: 'Feburary',
        orders: 600,
        purchases: 800
    },
    {
        month: 'March',
        orders: 500,
        purchases: 705
    },
    {
        month: 'April',
        orders: 720,
        purchases: 600
    },
    {
        month: 'May',
        orders: 700,
        purchases: 900
    },
    {
        month: 'June',
        orders: 400,
        purchases: 610
    },
    {
        month: 'July',
        orders: 650,
        purchases: 780
    }
];


const Chart = () => {


  return (
    <div className='border shadow-lg rounded p-3 w-100 h-100 text-center'>
        <p>Monthly Purchases</p>
        <div style={{ width: "100%", 
                  height: "400px" }}>
        <ResponsiveContainer>
        <LineChart
          width={500} 
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="orders"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#order)"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" 
                dataKey="purchases" 
                stroke="#82ca9d" 
                fillOpacity={1}
                fill="url(#purchase)"
          />
        </LineChart>
        </ResponsiveContainer>
        </div>
    </div>
  )
}

export default Chart;