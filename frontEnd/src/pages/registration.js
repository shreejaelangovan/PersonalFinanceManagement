import React, { useState } from 'react';
import "./registration.css";
import { useFormik } from "formik";
import { SignUpSchema } from './schema/registerSchema';
import UserAuthService from '../services/userAuthService';

import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { login } from '../features/user';
// import { login } from '../features/user';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';

const Registration = () => {
  // const navigate = useNavigate();
  const navigate = useNavigate();
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userName: "",
  };

  
  const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues: initialState,
      validationSchema: SignUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        eventRegister();
        action.resetForm();
      }
    })
    const eventRegister = async () => {
      try {
        const response = await UserAuthService.saveUser(values);
        console.log(response);
        const target = "Error";
        const target1 = "Email Already Exists !!";
        if (response.data === target) {
          throw target;
        } else if (response.data === target1) {
          throw target1;
        } else {
          setTimeout(() => {
            // Navigate to the home page after successful registration
            navigate("/login");
          });
        }
      } catch (error) {
        console.log(error);
      }
    };    
  
  return (
    <>
      {/* <header id="g">
        <h1>WallO</h1>
      </header> */}
      <div className='main'>
        <div className='kl'></div>
        
        <div className='container'>
        <div className='js'></div>
        <form onSubmit={handleSubmit}>
          <br></br>
          <h4>Welcome onboard!!!</h4>
          <br></br>
          <div className='m1'>
            <label htmlFor="firstName">FirstName</label>
            <input
              type="text"
              id="firstName" // Unique id for the first name input
              value={values.firstName}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <br></br>
            {errors.firstName && touched.firstName ? (
              <span className="error" style={{ color: 'red' }}>{errors.firstName}</span>
            ) : null}
          </div>
          {/* <br></br> */}
          <div>
            <label htmlFor="lastName">LastName</label>
            <input
              type="text"
              id="lastName" // Unique id for the last name input
              value={values.lastName}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <br></br>
            {errors.lastName && touched.lastName ? (
              <span className="error" style={{ color: 'red' }}>{errors.lastName}</span>
            ) : null}
          </div>
          {/* <br></br> */}
          <div>
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              id="userName" // Unique id for the username input
              value={values.userName}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <br></br>
            {errors.userName && touched.userName ? (
              <span className="error" style={{ color: 'red' }}>{errors.userName}</span>
            ) : null}
          </div>
          <div>
              <label>Email ID</label>
              <input
                type="text"
                id="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <br></br>
              {errors.email && touched.email?(<span className="error" style={{ color: 'red' }}>{errors.email}</span>):null}
            </div>
            {/* <br></br> */}
            <div>
              <label>Password</label>
              <input
                type="password"
                id="password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <br></br>
              {errors.password && touched.password?(<span className="error" style={{ color: 'red' }}>{errors.password}</span>):null}
            </div>
            {/* <br></br> */}
            <div>
              <label>Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={values.confirmPassword}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <br></br>
              {errors.confirmPassword && touched.confirmPassword?(<span className="error" style={{ color: 'red' }}>{errors.confirmPassword}</span>):null}
            </div>
            {/* <br></br> */}
            <center>
              <button id="bu9"type="submit">Register</button>
            </center>
            <br></br>
            <center>
            <p>
            Already have an account ?{" "}
            <span>
            <a href="#" onClick={() => navigate("/login")} style={{ cursor: "pointer", color: "green" }}>
            Sign In
            </a>

            </span>{" "}
          </p>
              {/* <Link to='/login'>Already have an account? LOGIN HERE</Link> */}
            </center>
            {/* <br></br>
            <br></br> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;

