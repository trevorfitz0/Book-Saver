import React from "react";
import { NavLink, useHistory } from 'react-router-dom';
import './Login.css';
import { auth } from "../../firebase";
import { 
  signInWithPopup, 
  GoogleAuthProvider ,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence
} from "firebase/auth";
import { useState } from "react";

const Login = ({ loginUser }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const history = useHistory();

  const googleSignIn = (event) => {
    event.preventDefault()
    const provider = new GoogleAuthProvider();
    
    signInWithPopup(auth, provider)
    .then(result => {
      console.log(result)
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      loginUser(result.user);
      history.push('/');
    })
    .catch(err => console.log(err))
  };

  const emailPasswordLogin = (event) => {
    event.preventDefault()

    setPersistence(auth, browserSessionPersistence)

    signInWithEmailAndPassword(auth, email, password)
    .then(result => {
      console.log(result)
      loginUser(result.user);
      history.push('/');
    })
    .catch(err => {
      console.log(err)
      setError('Invalid Username or Password')
    })
  };

  return (
    <main className="login-page">
      <form className="login-form">
        <div className="email-input">
          <label htmlFor='email'>Email</label>
          <input type='text' id='email' placeholder="Email" require onInput={(e) => setEmail(e.target.value)}></input>
        </div>
        <div className="pass-input">
          <label htmlFor='pass'>Password</label>
          <input type='text' id='pass' placeholder="Password" require onInput={(e) => setPassword(e.target.value)}></input>
        </div>
        <p className="error-code">{error}</p>
        <button type='submit' className="submit" onClick={(event) => emailPasswordLogin(event)}>Login</button>
        <div className="line-break"></div>
        <button className="google fa-brands fa-google" onClick={(event) => googleSignIn(event)}></button>
        <p>Don't have an account? Sign up <NavLink to='/register'>here</NavLink></p>
      </form>
    </main>
  );
};

export default Login;