
import React, { useState } from 'react';
import "./registration.css";
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom';

const Registration = () => {
  const [name, setName] = useState('');
  const[age,setAge]=useState('');
  const [mobileNumber,setMobileNumber]=useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const handleAgeChange = (event) => {
    const inputAge = event.target.value;
    setAge(inputAge);

    // Perform age validation logic
    if(!inputAge){
      errors.age='Age is required';
    }
    else if (inputAge >= 18 && inputAge <= 120) {
      errors.age='You are eligible to proceed.';
    } else {
      errors.age='You age must be greater than 18';
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the form
    const validationErrors = {};
    if (!name) {
      validationErrors.name = 'Name is required';
    }
    if(!mobileNumber){
        validationErrors.mobileNumber='Phone number is required';
    }
    else if(!/^\d{10}$/.test(mobileNumber)){
        validationErrors.mobileNumber='Invalid phone number';   
    }  
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
    if (!confirmPassword) {
      validationErrors.confirmPassword = 'Confirm Password is required';
    } else if (password !== confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, do something with the data (e.g., submit to a server)
      console.log('Registration data:', { name,age,mobileNumber, email, password });
      // Reset form
      setName('');
      setAge('');
      setMobileNumber('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setErrors({});
    } else {
      // Form is invalid, update the errors state
      setErrors(validationErrors);
    }
  };

  return (
      <>
    <div className='main'>
      <div className='container'>
    <form onSubmit={handleSubmit}>
        <h4>Welcome onboard!!!</h4>
        <br></br>
      <div>
        <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(e) => setName(e.target.value)} />
        <br></br>
        {errors.name && <span className="error" style={{color:'red'}}>{errors.name}</span>}
      </div>
      <br></br>
      <div>
        <TextField id="outlined-basic" label="Age" variant="outlined" onChange={handleAgeChange} />
        <br></br>
        {errors.age && <span className="error" style={{color:'red'}}>{errors.age}</span>}
      </div>
      <br></br>
      <div>
        <TextField id="outlined-basic" label="Phone Number" variant="outlined" onChange={(e) => setMobileNumber(e.target.value)} />
        <br></br>
        {errors.mobileNumber && <span className="error" style={{color:'red'}}>{errors.mobileNumber}</span>}
      </div>
      <br></br>
      <div>
        <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
        <br></br>
        {errors.email && <span className="error" style={{color:'red'}}>{errors.email}</span>}
      </div>
      <br></br>
      <div>
        <TextField id="outlined-basic" label="Password" variant="outlined" type="password" onChange={(e) => setPassword(e.target.value)} />
        <br></br>
        {errors.password && <span className="error" style={{color:'red'}}>{errors.password}</span>}
      </div>
      <br></br>
      <div>
        <TextField id="outlined-basic" label="Confirm Password" variant="outlined" type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
        <br></br>
        {errors.confirmPassword && <span className="error" style={{color:'red'}}>{errors.confirmPassword}</span>}
      </div>
      <br></br>
        <center>
            <button type="submit">Register</button>
        </center>
        
        <Link to='/login'>Already have an account? LOGIN HERE</Link>
    </form>
    </div>
    </div>
      </>
  );
};

export default Registration;


