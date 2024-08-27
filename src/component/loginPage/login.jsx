import React from 'react'
import './login.css';
import { FaUserAlt , FaLock , FaRegEyeSlash } from "react-icons/fa";

const login = () => {
  return (
    <div className = 'wrapper'>
      <form action=''>
      <h1> Login </h1>
      {/* INPUT ID  */}
        <div className="input-box">        
            <input type='text' placeholder ='UserName or Id' required />
            <FaUserAlt className = 'icon' />
        </div>
        <div className="input-box">
            <input type = 'text' placeholder= 'Password' required></input>
            <FaLock className = 'icon'/>
        </div>
        <div className="remember_forgate">
            <label ><input type='checkbox' ></input>Remember me </label>

            <a href = "#" >Frogate Password</a>
        </div>
        
        <button type="submit" > Login </button>

        <div className="register-link">
            <p>Don't have an Account? <a href='#' >Regestion</a></p>
        </div>
      </form>
    </div>
  )
}

export default login

