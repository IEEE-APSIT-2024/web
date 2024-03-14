import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/RegistrationForm.css';

function CreateUser() {
  const [userData, setUserData] = useState({
    u_name: '',
    u_pass: '',
    u_moodleID: '',
    u_email: '',
    u_dep: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // 
    if (name === "u_name" ) {
      setUserData({
        ...userData,
        [name]: value,
        u_dep: "",
      });
    } else {
      setUserData({
        ...userData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Submit logic code here
    console.log("Form submitted:", userData);
  };

  return (
    <>
      <div className="App">
        <div className="registration-container">
          <h1>IEEE APSIT</h1>
          <div className="registration-form">
            <div className='header'></div>
            <h2>Register Here</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Name</label>
                <input
                  type="text"
                  name="u_name"
                  value={userData.u_name}
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
              <div>
                <label>Moodle ID</label>
                <input
                  type="text"
                  name="u_moodleID"
                  value={userData.u_moodleID}
                  onChange={handleChange}
                  required
                />
              </div>
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
                <label>Deparment:</label>
                <select
                  name="u_dep"
                  value={userData.u_dep}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '10px',
                    marginBottom: '15px',
                    border: '1px solid #ccc',
                    borderRadius: '3px',
                  }}
                >
                  <option></option>
                  <option value="IT">IT</option>
                  <option value="CS">CS</option>
                  <option value="DS">DS</option>
                  <option value="AIML">AIML</option>
                  <option value="CIVIL">CIVIL</option>
                  <option value="MECH">MECH</option>
                </select>
              </div>

              <br></br>
              <div id="fg">
                <Link to="/">Login</Link>
              </div>
              <div>
                <button type="submit">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateUser;
