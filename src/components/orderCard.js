import React from 'react'

const orderCard = ({ card }) => {
  let data;

    switch ( card )
    {
        case 'google':
            data =
            {
                orderNo: 345, 
                company: 'Google',
                date: '12/3/22',
                dueDate: '9/4/22',
                amt: 300
            };
            break;
        
        case 'scrum':
          data =
          {
              orderNo: 34, 
              company: 'Scrum',
              date: '17/1/21',
              dueDate: '8/11/22',
              amt: 1000
          };
            break;
        
        case 'cabin':
          data =
          {
              orderNo: 76, 
              company: 'Cabin',
              date: '21/12/19',
              dueDate: '6/4/23',
              amt: 300
          };
            break;

        default:
            break;
    }
    
  return (
    <div className='border shadow-lg rounded my-4 mx-1 p-3 w-100 h-100 text-center'>
        <p>{data.orderNo}</p>
        <p>{data.company}</p>
        <p>{data.date}</p>
        <p>{data.dueDate}</p>
        <p>{data.amt}</p>
    </div>
  )
}

export default orderCard;