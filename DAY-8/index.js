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
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from './features/user';
const store=configureStore({
  reducer:{
    user:userReducer
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}>
    <App/>
    {/* <LoginPage/> */}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
