
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
  const handlePasswordChange = (event) => {
    const inputPassword = event.target.value;
    setAge(inputPassword);

    // Perform age validation logic
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
      errors.password='Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character.';
    } else if(!inputPassword) {
      errors.password='Password required';
    }
    else{
      errors.password='Valid Password';
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the form
    const validationErrors = {};
    // if (!name) {
    //   validationErrors.name = 'Name is required';
    // }
    // if(!mobileNumber){
    //     validationErrors.mobileNumber='Phone number is required';
    // }
    // else if(!/^\d{10}$/.test(mobileNumber)){
    //     validationErrors.mobileNumber='Invalid phone number';   
    // }  
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
      {/* <header id="g">
        <h1>WallO</h1>
      </header> */}
    <div className='main'>
      <div className='container'>
        <div className='js'></div>
    <form onSubmit={handleSubmit}>
      <br></br>
        <h4>Welcome onboard!!!</h4>
        <br></br>
      <div>
        <TextField id="outlined-basic" label="Name" variant="outlined" required onChange={(e) => setName(e.target.value)} />
        <br></br>
        {/* {errors.name && <span className="error" style={{color:'red'}}>{errors.name}</span>} */}
      </div>
      <br></br>
      <div>
        <TextField id="outlined-basic" label="Age" variant="outlined" required onChange={handleAgeChange} />
        <br></br>
        {errors.age && <span className="error" style={{color:'red'}}>{errors.age}</span>}
      </div>
      <br></br>
      {/* <div>
        <TextField id="outlined-basic" label="Phone Number" variant="outlined" onChange={(e) => setMobileNumber(e.target.value)} />
        <br></br>
        {errors.mobileNumber && <span className="error" style={{color:'red'}}>{errors.mobileNumber}</span>}
      </div> */}
      <br></br>
      <div>
        <TextField id="outlined-basic" label="Email" variant="outlined" type="email" required onChange={(e) => setEmail(e.target.value)} />
        <br></br>
        {/* {errors.email && <span className="error" style={{color:'red'}}>{errors.email}</span>} */}
      </div>
      <br></br>
      <div>
      
        <TextField id="outlined-basic" label="Password" variant="outlined" type="password" required onChange={handlePasswordChange} />
        <br></br>
        
        {errors.password && <span className="error" style={{color:'red'}}>{errors.password}</span>}
      </div>
      <br></br>
      <div>
        <TextField id="outlined-basic" label="Confirm Password" required variant="outlined" type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
        <br></br>
        {errors.confirmPassword && <span className="error" style={{color:'red'}}>{errors.confirmPassword}</span>}
      </div>
      <br></br>
        <center>
            <Link to="/home"><button id="l" type="submit">Register</button></Link>
        </center>
        
        <Link to='/login'>Already have an account? LOGIN HERE</Link>
        <br></br>
        <br></br>
    </form>
    </div>
    </div>
      </>
  );
};

export default Registration;


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import IconButton from '@mui/material/IconButton';
// import Input from '@mui/material/Input';
// import FilledInput from '@mui/material/FilledInput';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormControl from '@mui/material/FormControl';
// import TextField from '@mui/material/TextField';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

// export default function InputAdornments() {
//   const [showPassword, setShowPassword] = React.useState(false);

//   const handleClickShowPassword = () => setShowPassword((show) => !show);

//   const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault();
//   };

//   return (
//     <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
//       <div>
//         <TextField
//           label="With normal TextField"
//           id="outlined-start-adornment"
//           sx={{ m: 1, width: '25ch' }}
//           InputProps={{
//             startAdornment: <InputAdornment position="start">kg</InputAdornment>,
//           }}
//         />
//         <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
//           <OutlinedInput
//             id="outlined-adornment-weight"
//             endAdornment={<InputAdornment position="end">kg</InputAdornment>}
//             aria-describedby="outlined-weight-helper-text"
//             inputProps={{
//               'aria-label': 'weight',
//             }}
//           />
//           <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
//         </FormControl>
        
//         <FormControl fullWidth sx={{ m: 1 }}>
//           <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
//           <OutlinedInput
//             id="outlined-adornment-amount"
//             startAdornment={<InputAdornment position="start">$</InputAdornment>}
//             label="Amount"
//           />
//         </FormControl>
//       </div>
//       <div>
//         <TextField
//           label="With normal TextField"
//           id="filled-start-adornment"
//           sx={{ m: 1, width: '25ch' }}
//           InputProps={{
//             startAdornment: <InputAdornment position="start">kg</InputAdornment>,
//           }}
//           variant="filled"
//         />
//         <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
//           <FilledInput
//             id="filled-adornment-weight"
//             endAdornment={<InputAdornment position="end">kg</InputAdornment>}
//             aria-describedby="filled-weight-helper-text"
//             inputProps={{
//               'aria-label': 'weight',
//             }}
//           />
//           <FormHelperText id="filled-weight-helper-text">Weight</FormHelperText>
//         </FormControl>
//         <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
//           <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
//           <FilledInput
//             id="filled-adornment-password"
//             type={showPassword ? 'text' : 'password'}
//             endAdornment={
//               <InputAdornment position="end">
//                 <IconButton
//                   aria-label="toggle password visibility"
//                   onClick={handleClickShowPassword}
//                   onMouseDown={handleMouseDownPassword}
//                   edge="end"
//                 >
//                   {showPassword ? <VisibilityOff /> : <Visibility />}
//                 </IconButton>
//               </InputAdornment>
//             }
//           />
//         </FormControl>
//         <FormControl fullWidth sx={{ m: 1 }} variant="filled">
//           <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
//           <FilledInput
//             id="filled-adornment-amount"
//             startAdornment={<InputAdornment position="start">$</InputAdornment>}
//           />
//         </FormControl>
//       </div>
//       <div>
//         <TextField
//           label="With normal TextField"
//           id="standard-start-adornment"
//           sx={{ m: 1, width: '25ch' }}
//           InputProps={{
//             startAdornment: <InputAdornment position="start">kg</InputAdornment>,
//           }}
//           variant="standard"
//         />
//         <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
//           <Input
//             id="standard-adornment-weight"
//             endAdornment={<InputAdornment position="end">kg</InputAdornment>}
//             aria-describedby="standard-weight-helper-text"
//             inputProps={{
//               'aria-label': 'weight',
//             }}
//           />
//           <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText>
//         </FormControl>
//         <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
//           <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
//           <Input
//             id="standard-adornment-password"
//             type={showPassword ? 'text' : 'password'}
//             endAdornment={
//               <InputAdornment position="end">
//                 <IconButton
//                   aria-label="toggle password visibility"
//                   onClick={handleClickShowPassword}
//                   onMouseDown={handleMouseDownPassword}
//                 >
//                   {showPassword ? <VisibilityOff /> : <Visibility />}
//                 </IconButton>
//               </InputAdornment>
//             }
//           />
//         </FormControl>
//         <FormControl fullWidth sx={{ m: 1 }} variant="standard">
//           <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
//           <Input
//             id="standard-adornment-amount"
//             startAdornment={<InputAdornment position="start">$</InputAdornment>}
//           />
//         </FormControl>
//       </div>
//     </Box>
//   );
// }
