import React, { useContext, useState } from "react";
import UserContext from "../utils/UserContext";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState('')
    // set context value 
    const {setUserName} = useContext(UserContext)
    // navigation
    let navigate = useNavigate();
    const handleSubmit = () =>  {
        console.log('username', username)
        // set User Context
        setUserName(username)
        // navigate to home after login
        navigate('/',  {state: {isLoggedIn: true}})
    }
  return (
    <div className="login-container">
      <div className="login-form">
        <div className="form-controls">
          <label className="form-label">Username</label>
          <input className="form-item" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-controls">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            className="form-item"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <button className="btn-login-block" onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
}

export default Login;
