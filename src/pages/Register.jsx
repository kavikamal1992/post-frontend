import React, { useState } from "react";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setuserName] = useState("");
  
  const [emailID, setemailID] = useState("");
  const [mobileNum, setmobileNum] = useState("");
  const [password, setpassword] = useState("");

  const nav = useNavigate()
  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
        await axios.post("https://post-backend-server.onrender.com/register",{
            username, emailID, mobileNum, password
        })
        alert("User Registered Successfully")
        nav('/login')
    } catch (error) {
       console.log(error); 
    }
  };
  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">UserName : </label>
        <input
          id="username"
          value={username}
          type="text"
          onChange={(e) => setuserName(e.target.value)}
          placeholder="Enter UserName"
        />
        <br /> <br />
        <label htmlFor="mail">Email ID : </label>
        <input
          id="mail"
          value={emailID}
          type="email"
          onChange={(e) => setemailID(e.target.value)}
          placeholder="Enter E-mail ID"
        />
        <br /> <br />
        <label htmlFor="mobile">Mobile Number : </label>
        <input
          id="mobile"
          value={mobileNum}
          type="number"
          onChange={(e) => setmobileNum(e.target.value)}
          placeholder="Enter Mobile Number"
        />
        <br /><br />
        <label htmlFor="pswd">Password : </label>
        <input
          id="pswd"
          value={password}
          type="password"
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Enter Password"
        />
        <br /><br />
        <button>Register</button>
        <p>Already having an account ?  <Link to="/login">Click here </Link> to Login</p>
      </form>
    </div>
  );
};

export default Register;
