import './Sidebar.scss';
import openicon from '../images/menu-icon.png';
import closeicon from '../images/exit-icon.png';
import { Link } from 'react-router-dom';

const Sidebar = ({ pageNumber, sidebar, setSideBar, setIsAdminPage }) => {

    const username  = sessionStorage.getItem('admin-username');

    return (
        <div className={ sidebar ? 'sidebar_main_active' : 'sidebar_main'} id="slide_menu">
            <div className='sidebar_logos' onClick={() => setSideBar(!sidebar)}>
                <div className='sidebar_logo_s'>{sidebar ? <img style={{maxWidth: '42px', maxHeight: '42px'}} src={closeicon} alt='close' /> : <img src={openicon} alt='open' />}</div>
                <div style={sidebar ? {opacity: 1} : {opacity: 0}} className='sidebar_logo_l' id='s_logo_l'></div>
                <h2 style={sidebar ? {opacity: 1} : {opacity: 0}} className='s_username'>{username}</h2>
            </div>
            <div className='sidebar_links' onClick={() => {if(sidebar){setSideBar(false)}}}>
                <button className="sidebar_buttons">
                    { pageNumber === 1 && sidebar && <div className='s_link_active_1'></div>}
                    <Link className='sidebar_inner_links' to={"/"}>
                        <h3>Home</h3> 
                        <div className='s_dynamic_links'>
                            { pageNumber === 1  && !sidebar && <div className='s_link_active_2'></div>}
                            <div className='s_link_icons' id='s_home'></div>
                        </div>
                    </Link>
                </button>

                <button className="sidebar_buttons">
                    { pageNumber === 2 && sidebar &&<div className='s_link_active_1'></div>}
                    <Link className='sidebar_inner_links' to={"/products"}>
                        <h3>Products</h3>
                        <div className='s_dynamic_links'>
                            { pageNumber === 2 && !sidebar && <div className='s_link_active_2'></div>}
                            <div className='s_link_icons' id='s_products'></div>
                        </div>
                    </Link>
                </button>

                <button className="sidebar_buttons">
                    { pageNumber === 3 && sidebar &&<div className='s_link_active_1'></div>}
                    <Link className='sidebar_inner_links' to={"/teams"}>
                        <h3>Team Members</h3>
                        <div className='s_dynamic_links'>
                            { pageNumber === 3 && !sidebar && <div className='s_link_active_2'></div>}
                            <div className='s_link_icons' id='s_team'></div>
                        </div>
                    </Link>
                </button>

                <button className="sidebar_buttons">
                    { pageNumber === 4 && sidebar &&<div className='s_link_active_1'></div>}
                    <Link className='sidebar_inner_links' to={"/clients"}>
                        <h3>Clients</h3>
                        <div className='s_dynamic_links'>
                            { pageNumber === 4 && !sidebar && <div className='s_link_active_2'></div>}
                            <div className='s_link_icons' id='s_clients'></div>
                        </div>
                    </Link>
                </button>
            </div>
            <button id="sidebar_logout" onClick={() => { setSideBar(false); setIsAdminPage(true); }}>
                <Link className='sidebar_logout_links' to={"/login"}>
                    <h3>Log Out</h3>
                    <div className='s_logout_icons' id='s_logout'></div>
                </Link>
            </button> 
        </div>    
    )
};

export default Sidebar;