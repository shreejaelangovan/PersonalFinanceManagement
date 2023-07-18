import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Registration from './Pages/registration';
import Login from './pages/login';
import Registration from './pages/registration';
import Base from './pages/base';
import Home from './pages/home';
import Income from './pages/income';
import Expenses from './pages/expenses';
import Budget from './pages/budget';
import Goals from './pages/goals';
import Debt from './pages/debt';
import Lend from './pages/lend';
import Borrow from './pages/borrow';
import Report from './pages/report';


function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Base/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/base" element={<Base/>}/>
        <Route path='/income' element={<Income/>}/>
        <Route path='/expenses' element={<Expenses/>}/>
        <Route path='/budget' element={<Budget/>}/>
        <Route path='/goals' element={<Goals/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/debt" element={<Debt/>}/>
        <Route path="/lend" element={<Lend/>}/>
        <Route path="/borrow" element={<Borrow/>}/>
        <Route path="/report" element={<Report/>}/>
      </Routes>
    </Router>
  );
}

export default App;
