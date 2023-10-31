import React from "react";
import styles from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";
import { PAGES } from "../../data/pages";

function SignUp() {
  const navigate = useNavigate();

  function handleNavigation() {
    navigate(PAGES.SIGN_IN);
  }

  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <h1>Sign Up</h1>
        <input type="text" placeholder="Enter Your Name" />

        <input type="text" placeholder="Enter Your Email" />
        <input type="password" placeholder="Enter Your Password" />
        <button onClick={handleNavigation}>Submit</button>
      </div>
    </div>
  );
}

export default SignUp;
