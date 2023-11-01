import React, { useRef } from "react";
import styles from "./Signin.module.css";
import useLoginMutation from "../../hooks/mutators/useLoginMutation";
import { Link } from "react-router-dom";
import { PAGES } from "../../data/pages";

function SignIn() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { login, loading } = useLoginMutation();

  function handleSubmit(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    login(email, password);
  }

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1>Sign In</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            ref={emailRef}
            placeholder="Enter Your Email"
            required
          />
          <input
            required
            type="password"
            ref={passwordRef}
            placeholder="Enter Your Password"
          />
          <button disabled={loading}>Login</button>
        </form>
        <p className={styles.sign_up}>
          Don't have an account? <Link to={PAGES.SIGN_UP}>Register</Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
