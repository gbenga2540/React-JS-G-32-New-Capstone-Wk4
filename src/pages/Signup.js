import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import './Auth.scss';
import adminlogo from '../images/admin-logo-black.png';

const Signup = ({ setCanLogin, setIsAdminPage }) => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');
    const [iPassword, setIPassword] = useState(false);
    const [redirect, setRedirect] = useState(false);
    let navigate = useNavigate();

    setIsAdminPage(true);

    const checksignup = () => {
        if (password === cPassword) {
            setIPassword(false);
            sessionStorage.setItem('admin-username', `${username}`);
            sessionStorage.setItem('admin-password', `${password}`);
            setCanLogin(true);
            navigate("/");
            setIsAdminPage(false);
        } else {
            setCanLogin(false);
            setIPassword(true);
            setPassword('');
            setCPassword('');
        }
    }

    useEffect(() => {
        const ses_username = sessionStorage.getItem('admin-username');
        const ses_password = sessionStorage.getItem('admin-password');
        if (ses_password != null && ses_username != null) {
            setRedirect(true);
            setTimeout(() => {
                setCanLogin(true);
                navigate("/");
                setIsAdminPage(false);
                setRedirect(false);
            }, 2000);
        } else {
            setCanLogin(false);
            setIsAdminPage(true);
        }
    }, [navigate, setCanLogin, setIsAdminPage]);

    return (
        <div className='sign_up_main'>
            <div className="sign_up_container">
                <img className='sign_up_img' src={adminlogo} alt="adminlogo" />
                <h2 className='sign_up_txt_top'>Admin Dashboard</h2>
                <form className='sign_up_form' onSubmit={(e) => e.preventDefault()}>

                    <h4 id='sign_up_first_input'>Username</h4>
                    <input className='sign_up_input'
                        type={'text'}
                        placeholder={'Username (max: 10)'}
                        required
                        maxLength={10}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />

                    <h4>Email</h4>
                    <input className='sign_up_input'
                        type={'email'}
                        placeholder={'Email'}
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />

                    <h4>Password</h4>
                    <input className='sign_up_input'
                        type={'password'}
                        placeholder={'Password'}
                        required
                        value={password}
                        onChange={(e) => { setPassword(e.target.value); setIPassword(false); }} />

                    <h4>Confirm Password</h4>
                    <input className='sign_up_input'
                        type={'password'}
                        placeholder={'Confirm Password'}
                        required
                        value={cPassword}
                        onChange={(e) => { setCPassword(e.target.value); setIPassword(false); }} />

                    <button className='sign_up_button' onClick={checksignup}>Sign Up</button>

                    {iPassword && <h3 style={{ color: 'red', maxHeight: "30px" }}>Passwords do not match!!!</h3>}

                    {redirect && <h3 style={{ color: 'red', maxHeight: "22px", marginTop: "5px", fontSize: "17px" }}>Account found, Redirecting...</h3>}

                    <h3 className='sign_up_text'>already have an account, <span style={{ color: "rgb(100, 100, 255)", cursor: "pointer" }} onClick={() => navigate('/login')}>login</span></h3>
                </form>
            </div>
        </div>
    )
}

export default Signup;