import React, { useState } from 'react';
import './login.css';
import { useFormik } from "formik";
import { SignInSchema } from './schema/loginSchema';
import UserAuthService from '../services/userAuthService';
import { addEmails,addToken } from './store/reducer';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { login } from '../features/user';
import { useNavigate } from 'react-router-dom';
import { useUser } from './userContext';

const Login = () => {
  // const dispatch=useDispatch();
  // const navigate=useNavigate();
  const user=useSelector(state => state.user.value)
  const { userEmail, setUserEmail } = useUser();
  const [email, setEmail] = useState('');
  const dispatch=useDispatch();
  const initialState = {
    email: "",
    password: "",
  };
  const { values, errors,  handleBlur, handleChange,handleSubmit, touched } =
    useFormik({
      initialValues: initialState,
      validationSchema: SignInSchema,
      onSubmit: (values, action) => {
        console.log(values);
        eventLogin();
        action.resetForm();
      }
  })
  const eventLogin = async () => {
    try {
      const response = await UserAuthService.loginUserWithEmailAndPassword(values);
      console.log(response);
      var token = response.data.accessToken;
      var userEmail = response.data.email;

      if (response.message != "Request failed with status code 400") {
        setTimeout(() => {
          dispatch(addEmails(userEmail));
          dispatch(addToken(token));
          setUserEmail(userEmail);
          navigate("/home");
        }, 1000);
      }
      else {
        alert("Login Failed.Please enter valid details");
      }
    }
    catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();

  return (
    <>
      <div className='j1'>
        <div className='imgleft'></div>
        <div className='mainClass'>
          <div className='cont'>
            <h2>Welcome back!</h2>
            <p>Login to continue</p>
            <form onSubmit={handleSubmit}>
              <br></br>
              <div>
                <label>Email ID</label><br></br>
                <input
                  type="text"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email?(<span className="error" style={{color:'red'}}>{errors.email}</span>):null}
              </div>
              <br></br>
              <div>
                <label>Password</label><br></br>
                <input
                  type="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password?(<span className="error" style={{color:'red'}}>{errors.password}</span>):null}
              </div>
              <br></br>
              <center>
              {/* <button id="m1"onClick={()=> {dispatch(login({email}));navigate("/home")}} type="submit">Login</button> */}
                <button id="m1">Login</button>
              </center>
              <br></br>
              <center>
              <p><center>Don't have an account ?{" "}
          <span>
            <a
              onClick={() => navigate("/registration")}
              style={{ cursor: "pointer", color: "Red" }}
            >
              Sign Up
            </a>
          </span>{" "}</center></p>
                {/* <Link to='/registration'>New User? REGISTER</Link> */}
              </center>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

