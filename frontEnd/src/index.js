import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Registration from './pages/registration';
import Login from './pages/login';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Base from './pages/base';
import Home from './pages/home';
import Income from './pages/income';
import Expenses from './pages/expenses';
import LoginPage from './pages/primary';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import About from './pages/aboutUs';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from './features/user';
import About from './pages/aboutUs';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './pages/userContext';
const store=configureStore({
  reducer:{
    user:userReducer
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <UserProvider>
          <App/>
          <ToastContainer />
        </UserProvider>
    {/* <About/> */}
    {/* <LoginPage/> */}
    {/* <Home/> */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
