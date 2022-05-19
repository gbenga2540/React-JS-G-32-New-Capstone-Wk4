import React from 'react';
import "./Clients.scss";

const Clients = ({ setPageNumber, clientApiData }) => {
  setPageNumber(4);

  return (
    <div className='clients_main'>
      <h1>Clients</h1>
      <table className='clients_table'>
        <thead className='clients_thead'>
          <tr>
            <th>S/N</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Gender</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody className='clients_tbody'>
          {clientApiData.map(data => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{`${data.contact.firstname} ${data.contact.lastname}`}</td>
              <td>{data.contact.email}</td>
              <td>{data.contact.phone}</td>
              <td>{data.contact.gender}</td>
              <td><img src={data.contact.image} alt={data.name}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Clients;