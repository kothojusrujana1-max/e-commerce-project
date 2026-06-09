import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
function Register() {
  const[name, setName] = useState('')
  const[email, setEmail] =useState('')
  const[phone, setPhone] = useState('')
  const[password, setPassword] =useState('')
  const[confirmPassword, setConfirmPassword] =useState('')

  let navigate=useNavigate();
  
  function handleSubmit(event){
    event.preventDefault();
    if(password !== confirmPassword){
      alert("passwords do not match");
      return;
    }
    if(name.trim()=== '' || email.trim() === '' || phone.trim() === '' || password.trim() === '' || confirmPassword.trim() === ''){
      alert("please fill in all fields");
      return;
    }
    if(password.length < 6){
      alert("password must be at least 6 characters long");
      return;
    }

    let obj={
      name,
      email,
      phone,
      password,
      confirmPassword
    }
    console.log(obj);
    alert("registration successful");
    //redirect to login page
    navigate("/login");

    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setConfirmPassword("");
  }
  return (


    <div className='register-page'>
      <form className='form-register' onSubmit={handleSubmit}>
        <h2 className='form-register-title'>Register</h2>
        <input type="text" placeholder='Username'onChange={(event)=>setName(event.target.value)} value={name} />
        <input type="email" placeholder='Email' onChange={(event)=>setEmail(event.target.value)} value={email} />
        <input type="number" placeholder='Phone' onChange={(event)=>setPhone(event.target.value)} value={phone} />
        <input type="password" placeholder='Password' onChange={(event)=>setPassword(event.target.value)} value={password} />
        <input type="password" placeholder='Confirm Password' onChange={(event)=>setConfirmPassword(event.target.value)} value={confirmPassword} />
        <button className='btn-register'>Register Now</button>
        <p>
          Already have an account?
          <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  )
}

export default Register
