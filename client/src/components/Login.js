import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

function Login() {
  const [userData, setUserData] = useState({
    u_pass: '',
    u_email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // 
    if (name === "u_name" ) {
      setUserData({
        ...userData,
        [name]: value,
      });
    } else {
      setUserData({
        ...userData,
        [name]: value,
      });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Submit logic code here
    console.log("Form submitted:", userData);
  };

  return (
      <div className="app">
        <div className="registration-container">
          <h1>IEEE APSIT</h1>
          <div className="registration-form">
            <div className='header'></div>
            <h2>Register Here</h2>
            <form onSubmit={handleLogin}>
              <div>
                <label>E-Mail</label>
                <input
                  type="email"
                  name="u_email"
                  value={userData.u_email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  type="password"
                  name="u_pass"
                  value={userData.u_pass}
                  onChange={handleChange}
                  required
                />
              </div>
              <br></br>
              <div id="fg">
                <Link to="/register">Register Here</Link>
              </div>
              <div>
                <button type="login">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}

export default Login;
