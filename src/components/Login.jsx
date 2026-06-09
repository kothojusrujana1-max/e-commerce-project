import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  let navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if(email.trim() === '' || password.trim() === ''){
      alert("Please fill in all fields");
      return;
    }

    if(password.length < 6){
      alert("Password must be at least 6 characters long");
      return;
    }

    let obj = {
      email,
      password
    }

    console.log(obj);

    
    let token="qwertyuiokjhgfdsa"
    localStorage.setItem("token",token);

    alert("Login Successful");

    navigate("/userDashboard");

    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <div className='login-page'>
      <form className='form-login' onSubmit={handleSubmit}>
        <h2 className='form-login-title'>Login</h2>

        <input type="email"placeholder="Email"value={email}onChange={(event) => setEmail(event.target.value)}/>

        <input type="password"placeholder="Password"value={password}onChange={(event) => setPassword(event.target.value)}/>

        <button className='btn-login'>Login</button>

        <p>
          Don't have an account?
          <Link to="/register"> Register</Link>
        </p>

      </form>
      </div>
    </div>
  )
}

export default Login