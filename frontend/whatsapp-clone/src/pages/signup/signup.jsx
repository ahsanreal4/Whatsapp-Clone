import React from 'react';
import styles from './SignUp.module.css';
import { useNavigate } from 'react-router-dom';

function SignUp() {

    const navigate =useNavigate()

    function handleNavigation(){
        navigate('/signin')
    }


    return (
        <div className={styles.container}>
            <h1>SignUp Form</h1>
            <input type="text" placeholder='Enter Your Name' />
            
            <input type="text" placeholder='Enter Your Email' />
            <input type="password" placeholder='Enter Your Password' />
            <button onClick={handleNavigation}>Submit</button>
        </div>
    );
}

export default SignUp;
