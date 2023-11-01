import React  from "react";
import styles from "./SignUp.module.css";
import { PAGES } from "../../data/pages";
import { useRef } from "react";
import useSignupMutaion from "../../hooks/mutators/useSignupMutaion";
import { Link } from "react-router-dom";

function SignUp() {
 
  const nameRef = useRef(null)
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const { signup, loading } = useSignupMutaion();

  function handleSubmit(e) {
    e.preventDefault();
    const name =nameRef.current.value 
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
  
    signup(name,email, password,loading);
  }
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <h1>Sign Up</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
        <input
            type="text"
            ref={nameRef}
            placeholder="Enter Your name"
            required
          />
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
          <button disabled={loading}>Submit</button>
          <Link to={PAGES.SIGN_IN} className={styles.form}>Already Register Sign In </Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
