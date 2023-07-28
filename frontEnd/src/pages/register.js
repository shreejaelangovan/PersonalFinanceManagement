import React from "react";
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Checkbox, Typography } from "@mui/material";
import { useFormik } from "formik";
import { SignUpSchema } from './schema/registerSchema';
import UserAuthService from '../services/userAuthService';
import "./register.css";
import { useState } from "react";

export default function Registration() {
  const navigate = useNavigate();
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
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
      if (values.email !== "") {
        const response = await UserAuthService.saveUser(values);
        console.log(response);
        const target = "Error";
        const target1 = "Email Already Exists !!";
        if (response.data === target) {
          throw target;
        } else if (response.data === target1) {
          throw target1;
        }
        else {
          setTimeout(() => {
            navigate("/home");
          }, 1000);
        }
      }}
    catch (error) {
      console.log(errors);
    }
  };
  return (
    <div className="regform" >
      <div className="regcontainer" style={{ paddingTop: '30%' }}>
        <div className="uform">
          <h1 >USER REGISTRATION FORM</h1>
        </div>
        <form className="uregister" style={{ position: 'relative', top: '-40px' }} onSubmit={handleSubmit} >
          <TextField
            id="standard-number"
            label="First Name"
            name="firstName"
            type="text"
            variant="standard"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            size="small"
            style={{ marginTop: "20px" }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          {errors.firstName && touched.firstName ? (
            <p style={{ color: "red" }}>{errors.firstName}</p>
          ) : null}
          <TextField
            id="standard-basic"
            label="Last Name"
            name="lastName"
            type="text"
            variant="standard"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            size="small"
            style={{ marginTop: "20px" }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          {errors.lastName && touched.lastName ? (
            <p style={{ color: "red" }}>{errors.lastName}</p>
          ) : null}
          <TextField
            id="standard-basic"
            label="Username"
            name="username"
            type="text"
            variant="standard"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            size="small"
            style={{ marginTop: "20px" }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          {errors.username && touched.username ? (
            <p style={{ color: "red" }}>{errors.username}</p>
          ) : null}
          <TextField
            id="standard-basic"
            label="Email"
            name="email"
            type="text"
            variant="standard"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            size="small"
            style={{ marginTop: "20px" }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          {errors.email && touched.email ? (
            <p style={{ color: "red" }}>{errors.email}</p>
          ) : null}
          <TextField
            id="standard-basic"
            label="Password"
            name="password"
            type="password"
            variant="standard"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            size="small"
            style={{ marginTop: "20px" }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          {errors.password && touched.password ? (
            <p style={{ color: "red" }}>{errors.password}</p>
          ) : null}
          <TextField
            id="standard-basic"
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            variant="standard"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            size="small"
            style={{ marginTop: "20px" }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          {errors.confirmPassword && touched.confirmPassword ? (
            <p style={{ color: "red" }}>{errors.confirmPassword}</p>
          ) : null}

         
          <span style={{ display: "flex", alignItems: "center" }}>
            {" "}
            <Checkbox />
            <Typography sx={{ fontSize: "12px" }}>
              {" "}
              By agreeing to the Terms of Service and Privacy Policy
            </Typography>
          </span>
          <Button
            style={{
              marginTop: "10px",
              width: "100%",
              marginBottom: "10px",
              backgroundColor: "gray",
              color: "black"
            }}

            type="submit"
          >
            Register
          </Button>
          <h5>
            Already have an account ?{" "}
            <span>
              <a onClick={() => navigate("/login")}
                style={{ cursor: "pointer", color: "green" }}>
                Sign In
              </a>
            </span>{" "}
          </h5>
        </form>
      </div>
    </div>
  )
}