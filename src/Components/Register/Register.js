import React from 'react'
import { useState } from 'react'
import './Register.css'
import { updateProfile, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import { useHistory } from 'react-router-dom'

function Register() {

    const history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [error, setError] = useState('')

    const createAccount = (event) => {
        event.preventDefault()

        const { user } = createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
          console.log(user.user)
          console.log(`User ${user} created`)
          updateProfile( user.user, {
            displayName: `${firstName}, ${lastName}`
          })
        })
        .catch(err => {
          console.log(err.message)
          if(err.message === 'Firebase: Error (auth/invalid-email).') {
            console.log('invalid email')

          }
        })
      }

  return (
    <main className="register-page">
      <form className="register-form">
        <div className="first-name-input">
          <label htmlFor='first-name'>First Name</label>
          <input type='text' id='first-name' placeholder="First Name" required onInput={(e) => setFirstName(e.target.value)}></input>
        </div>
        <div className="last-name-input">
          <label htmlFor='last-name'>Last Name</label>
          <input type='text' id='last-name' placeholder="Last Name" required onInput={(e) => setLastName(e.target.value)}></input>
        </div>
        <div className="email-input">
          <label htmlFor='email'>Email</label>
          <input type='text' id='email' placeholder="Email" required onInput={(e) => setEmail(e.target.value)}></input>
        </div>
        <div className="pass-input">
          <label htmlFor='pass'>Password</label>
          <input type='text' id='pass' placeholder="Password" required onInput={(e) => setPassword(e.target.value)}></input>
        </div>
        <button type='submit' className="register-submit" onClick={(event) => createAccount(event)}>Register</button>
        <div className="line-break"></div>
      </form>
    </main>
  )
}

export default Register