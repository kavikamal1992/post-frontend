import React from 'react'
import { useCookies } from 'react-cookie'
import {Link, useNavigate} from 'react-router-dom'
import { getUserName } from './customHook'

const Navbar = () => {
  const [cookie,setCookie]=useCookies(['access_token'])

  const name = getUserName()

  const nav = useNavigate()

  const handleLogout =()=>{
    setCookie("access_token","")
    window.localStorage.clear()
    nav('/login')
  }
  return (
    <div>
      <ul>
        {/* <li><Link to='/'>Home</Link></li> */}
        {cookie.access_token
         ? 
        <><h3>{name} <button onClick={handleLogout}>Logout</button> </h3></> 
        : 
        <><li><Link to='/login'>Login</Link></li></>
        }
      </ul>
    </div>
  )
}

export default Navbar
