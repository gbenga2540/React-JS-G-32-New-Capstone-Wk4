import React from 'react';
import { Search } from 'react-bootstrap-icons';
import { ChatLeftDots } from 'react-bootstrap-icons';
import { Gear } from 'react-bootstrap-icons';
import { PersonCircle } from 'react-bootstrap-icons';

const Navbar = () => {
  return (
    <div >
        <nav className='navbar'>
            <div className='w-75 mx-auto'>
                <form className="d-flex border rounded p-1 w-100" role="search">
                <input id='search' className="form-control border-0 " type="search" placeholder="Search" aria-label="Search" />
                <button className="btn" type="submit"><Search /></button>
                </form>
            </div>
            <div className='d-none d-lg-block'>
                <button className='btn'><ChatLeftDots /></button>
                <button className='btn'><Gear /></button>
                <button className='btn'><PersonCircle /></button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;