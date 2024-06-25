import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {useCookies} from 'react-cookie'

const Login = () => {
    const [emailID, setemailID] = useState("");
    const [password, setpassword] = useState("");
    const [cookie,setCookie]=useCookies(['access_token'])

    const nav = useNavigate()

    const handleSubmit = async(e)=>{
      e.preventDefault()
      try {
        const loginResult = await axios.post("https://post-backend-server.onrender.com/login",{
           emailID, password
        })
        // console.log(loginResult.data);
        setCookie('access_token',loginResult.data.token)
        window.localStorage.setItem("token",loginResult.data.token)
        window.localStorage.setItem("userID",loginResult.data.userID)
        window.localStorage.setItem("username",loginResult.data.username)
        alert("login Successfully")
        nav('/')
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        
        <label htmlFor="mail">Email ID : </label>
        <input
        required
          id="mail"
          value={emailID}
          type="email"
          onChange={(e) => setemailID(e.target.value)}
          placeholder="Enter E-mail ID"
        />
        <br /> <br />
        <label htmlFor="pswd">Password : </label>
        <input
        required
          id="pswd"
          value={password}
          type="password"
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Enter Password"
        />
        <br /><br />
        <button>Login</button>
        <p>Don't have an account ?  <Link to="/register">Click here </Link> to Register</p>
      </form>
    </div>
  )
}

export default Login
