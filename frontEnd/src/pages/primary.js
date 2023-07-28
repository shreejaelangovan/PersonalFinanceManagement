// import React, { useState } from 'react';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import './primary.css';

// const LoginPage = (props) => {
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const[trigger,setTrigger]=useState(false);

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform login logic here
//   };

//   return props.trigger?(
//     <div className="login-container">
      
//       <h1 id="close" onClick={()=> props.setTrigger(false)} >❌</h1>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={handleUsernameChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <div className="password-input-container">
//             <input
//               type={passwordVisible ? 'text' : 'password'}
//               id="password"
//               value={password}
//               pattern="(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}"
//               onChange={handlePasswordChange}
//             />
//             <div className="password-icon" onClick={togglePasswordVisibility}>
//               {passwordVisible ? <FaEyeSlash /> : <FaEye />}
//             </div>
//           </div>
//         </div>
//         <button type="submit" id='login' >Login</button>
//       </form>
//     </div>
//   ):"";
// };

// export default LoginPage;