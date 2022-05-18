import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './Auth.scss';
import adminlogo from '../images/admin-logo-black.png';

const Login = ({ setCanLogin, setIsAdminPage }) => {

    let navigate = useNavigate();
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [iInfo, setIInfo] = useState(false);
    const [accountExist, setAccountExist] = useState(false);

    setIsAdminPage(true);

    const checklogin = () => {
        const LUsername = sessionStorage.getItem('admin-username');
        const LPassword = sessionStorage.getItem('admin-password');
        if (LPassword != null && LUsername != null){
            setAccountExist(true);
            if(password === LPassword && username.includes(LUsername)){
                setCanLogin(true);
                navigate('/');
                setIsAdminPage(false);
            }else {
                setIInfo(true);
                setCanLogin(false);
                setIsAdminPage(true);
            }
        }else {
            setAccountExist(false);
            setIInfo(true);
            setCanLogin(false);
            setIsAdminPage(true);
        }
    }

    return (
        <div className='sign_up_main'>
            <div className="sign_up_container">
                <img className='sign_up_img' src={adminlogo} alt="adminlogo"/>
                <h2 className='sign_up_txt_top'>Admin Dashboard</h2>
                <form id='login_form' className='sign_up_form' onSubmit={(e) => e.preventDefault()}>

                    <h4 id='login_first_input'>Username</h4>
                    <input
                    className='sign_up_input'
                    type={'text'}
                    placeholder={'Username'}
                    required
                    maxLength={10}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />

                    <h4>Password</h4>
                    <input className='sign_up_input'
                    type={'password'}
                    placeholder={'Password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                    <button onClick={checklogin} className='sign_up_button'>Login</button>

                    { iInfo && <h3 style={{ color: "red" }}>{ accountExist ? 'Incorrect Info' : 'account does not exist'}</h3>}

                    <h3 className='sign_up_text'>don't have an account, <span style={{ color: "rgb(100, 100, 255)", cursor: "pointer" }} onClick={() => navigate('/signup')}>sign up</span></h3>

                </form>
            </div>
        </div>
    )
}

export default Login