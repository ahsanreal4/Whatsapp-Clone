import React from "react";
import { Link } from "react-router-dom";
import styles from "./Welcome.module.css";
function Welcome() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.welcome_title}>Welcome To My Chat App</h1>
        <div className={styles.button_container}>
          <Link to="/signup" className={styles.nav_link}>
            <button className={styles.button_style}>Sign Up</button>
          </Link>
          <Link to="/signin" className={styles.nav_link}>
            <button className={styles.button_style}>Sign In</button>
          </Link>
        </div>
      </div>
      <footer>Made by Ahsan And Faizan</footer>
    </div>
  );
}

export default Welcome;
