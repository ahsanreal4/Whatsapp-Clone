import React from "react";
import styles from "./Signin.module.css";
import { useNavigate } from "react-router-dom";
function SignIn() {

  const navigate =useNavigate()
  function handleNavigate(){
    navigate('/chat')
  }

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1>SignIn </h1>

        <input type="text" placeholder="Enter Your Email" />
        <input type="password" placeholder="Enter Your Password" />
        <button onClick={handleNavigate}>Login</button>
      </div>
    </div>
  );
}

export default SignIn;
