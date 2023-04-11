import React, { useState } from "react";
import './Login.css';
import { auth } from "../../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login = ({ loginUser }) => {

  const googleSignIn = (event) => {
    event.preventDefault()
    const provider = new GoogleAuthProvider();
    
    signInWithPopup(auth, provider)
    .then(result => {
      console.log(result)
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      loginUser(result.user);
    })
    .catch(err => console.log(err))
  };

  return (
    <main className="login-page">
      <form className="login-form">
        <div className="email-input">
          <label for='email'>Email</label>
          <input type='text' id='email' placeholder="Email"></input>
        </div>
        <div className="pass-input">
          <label for='pass'>Password</label>
          <input type='text' id='pass' placeholder="Password"></input>
        </div>
        <button type='submit' className="login-submit">Login</button>
        <div className="line-break"></div>
        <button className="google fa-brands fa-google" onClick={(event) => googleSignIn(event)}></button>
        <p>Don't have an account? Sign up <span>here</span></p>
      </form>
    </main>
  );
};

export default Login;