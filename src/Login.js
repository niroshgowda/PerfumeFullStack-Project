import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
export default function Login() {
  const navigate=useNavigate("");
  const[username,setusername]=useState("");
  const[password,setpassword]=useState("");
  const[user,setUser]=useState('');
  const fetchData = () => {
    return fetch("http://localhost:8080/getlogin")
    .then((response) => response.json())
    .then((data) => setUser(data));
  }
  useEffect(() => {
    fetchData();
  },[])
  const authenticate=(e)=>{
    e.preventDefault();
  const usercheck = user.find(user => (user.username === username && user.password === password));
 if(username.length==0){
  alert("Enter Username")
 }
 else if(password.length==0){
  alert("Enter password")
 }
  else if(!usercheck){
    alert("Wrong Username or Password!")
  }
  else {
    navigate("/")
  }
}

  return (
   
    <div id="bodys">
  <link
    href="https://fonts.googleapis.com/css?family=Ubuntu:500"
    rel="stylesheet"
    type="text/css"
  />
  
  <div className="login">
    <div className="login-header">
      <h1>Login</h1>
    </div>
    <div className="login-form">
      <h3>Username:</h3>
      <input onChange={(e)=>setusername(e.target.value)} type="text" placeholder="Username" />
      <br />
      <h3>Password:</h3>
      <input onChange={(e)=>setpassword(e.target.value)} type="password" placeholder="Password" />
      <br />
      <Link to="/"><input onClick={authenticate}  type="button" defaultValue="Login" className="login-button" /></Link>
      <br />
      <Link to="/signup"><div className="sign-up">Sign Up!</div></Link>
      <br />
      
    </div>
  </div>
  
  </div>


    
  )
}
