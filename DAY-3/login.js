import React, { useState } from 'react';
import './login.css'
import {Link} from 'react-router-dom';
// import { Link } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the form
    const validationErrors = {};
    if (!email) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Email is invalid';
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
        validationErrors.password='Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character.';
      } else if(!password) {
        validationErrors.password='Password required';
    }

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, do something with the data (e.g., submit to a server)
      console.log('Login data:', { email, password });
      // Reset form
      setEmail('');
      setPassword('');
      setErrors({});
    } else {
      // Form is invalid, update the errors state
      setErrors(validationErrors);
    }
  };

  return (
    <>
    <div className='imgleft'></div>
    <div className='mainClass'>
    <div className='cont'>
        <h2>Welcome back!</h2>
        <p>Login to continue</p>
    <form onSubmit={handleSubmit}>
        <br></br>
      <div>
        <label>Email</label><br></br>
        <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
        <br></br>
        {errors.email && <span className="error" style={{color:'red'}}>{errors.email}</span>}
      </div>
      <br></br>
      <div>
        <label>Password</label><br></br>
        <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
        <br></br>
        {errors.password && <span className="error" style={{color:'red'}}>{errors.password}</span>}
      </div>
      <br></br>
        {/* <center> */}
            <button type="submit">LOGIN</button>
        {/* </center> */}
        <br></br>
        <br></br>
        <center>

        <Link to='/registration'>New User? REGISTER</Link>
        </center>
    </form>
    </div>
     </div>
     </>
  );
};

export default Login;


