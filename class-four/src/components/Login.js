import React from "react";

function Login() {
  return (
    <div>
      <div>
        <label>Username</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>  
        <input type="password" name="password" id="password" />
    </div>
    </div>
  );
}

export default Login;
