import { useRef } from "react";
import 'react-calendar/dist/Calendar.css';
import "./home.css";
import {Link} from 'react-router-dom';
import { Container } from "@mui/system";
import profile from '../assets/profile.png';
import Calendar from 'react-calendar';
import {useState} from 'react';
import {userResults} from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserService from '../services/userService'
import { addUserDetails } from './store/reducer'
// import {useSelector} from 'react-redux';
import UserLogout from "../logout";
import user from "../features/user";
import { useUser } from './userContext';
import { useLocation } from 'react-router-dom';
import axios from "axios";

function Home() {
// 	const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const incomeAmtParam = searchParams.get('incomeAmt');
  const [balance, setBalance] = useState(0);
  const[expense,setExpenses]=useState([]);
  const { userEmail } = useUser();

//   useEffect(() => {
//     axios.get(`http://localhost:8080/getBalance/${userEmail}`).then((res)=>{setBalance(res.data)})
//   }, []);
useEffect(() => {
    // Fetch balance
    axios.get(`http://localhost:8080/getBalance/${userEmail}`)
      .then((res) => {
        setBalance(res.data);
      })
      .catch((error) => {
        // Handle error, if needed
        console.error(error);
      });

    // Fetch expenses
    axios.get(`http://localhost:8080/expense/getExpense/${userEmail}`)
      .then((response) => {
        setExpenses(response.data);
      })
      .catch((error) => {
        // Handle error, if needed
        console.error(error);
      });
  }, [userEmail]); 
	const navRef = useRef();
	const [currentDateTime, setCurrentDateTime] = useState(new Date().toLocaleString());
	// const user=useSelector(state => state.user.value)
	const [value, onChange] = useState(new Date());
	// const [balance, setBalance] = useState(0);
	// const setBalanceToZero = () => {
	// 	setBalance(0);
	//   };
	// const {user} = useSelector(state => state.master)

	return (
        <>
		<div className="home">
		<header>
			<h1>MY WALLET</h1><span></span>
			<nav ref={navRef}>
				{/* 
				<a href="/#">Login</a>
			 */}
			 	<Link to='/home'><a href="/#">Home</a></Link>
				<Link to='/income'><a href="/#">Income</a></Link>
				<Link to='/expenses'><a href="/#">Expenses</a></Link>
				<Link to='/goals'><a href="/#">Goals</a></Link>
				{/* <Link to='/budget'><a href="/#">Budget</a></Link> */}
				<Link to='/debt'><a href="/#">Debt</a></Link>
				{/* {!user.email?
				<Link to='/login'>Login</Link>:
				<h5>{user.email}<UserLogout/></h5>
				} */}
			</nav>
		</header>
		<body>
			<div className="b">
				<div className="b1">
					<center>
						<br></br>
						<br></br>
						<h3>PROFILE</h3>
						<br></br>
					<img src={profile} style={{width:'6rem',height:'25%'}}></img>
					<br></br>
					<br></br>
					<h4>Welcome!!!</h4>
					<p>{userEmail}</p>

					<br></br>
					<br></br>
					</center>
					<div className="par">
						<h4><b>ABOUT</b></h4>
						
						<h8>The personal finance app allows in keeping track of how much money is spent on certain purchases, analyzing incomes & expenses, and making overall smart decisions.</h8>
						<br></br>
						<br></br>
						<h8>It provides users with an array of features that enable them to track their expenses and make informed decisions about where to invest their money.</h8>
					</div>
					<div className="am">
					{/* <h4>Amount:</h4>  */}
					</div>

					<div className="navi">
					<Link to='/profile' style={{color:"blue"}}>PROFILE</Link>
					<br></br>
					<br></br>
					<Link to='/FeedBack' style={{color:"blue"}}>FEEDBACK</Link>
					<br></br>
					<br></br>
					<Link to='/aboutus' style={{color:"blue"}}>ABOUT US</Link>
					<br></br>
					<br></br>
					<Link to='/base' style={{color:"blue"}}>LOGOUT</Link>
					
					{/* <Link to='/report'><a className="nav2" href="/#" style={{color:'black',display:'flex',flexDirection:'column'}}>Reports</a><br></br></Link> */}
					{/* <a className="nav2" href="/#" style={{color:'black',display:'flex',flexDirection:'column'}}>Aboutus</a><br></br>
					{!user.email?
					<Link to="/Login" ><a className="nav2" href="/#" style={{color:'black'}}>Logout</a></Link>:
					<h5>{user.email}<UserLogout/></h5>
					} */}
					{/* <Link to="/Login" ><a className="nav2" href="/#" style={{color:'black'}}>Logout</a></Link> */}
					</div>
				</div>
				<div className="b2">
					<br></br>
					<div className='q'>
					</div>
					<br></br>
					<div id="q1">
					<h3>Welcome to the <b>Dashboard!!</b></h3>
					<p style={{color:'grey'}}>Payment updates</p>
					<br></br>
					<div className="tr">
					<div className="details">
						<div className="sep">
						<div className="inc">

							<center>
							<h2 className="t">Balance Details</h2>
							{/* <br></br> */}
							<h3 className="s">Rs.{balance}</h3>
							</center>
						</div>
						</div>
						<div className="b4"><br></br>
							<h3>Transactions history</h3>
							<div className="sep">
							{expense.length === 0 ? (
      						<h5>Start adding expenses ...</h5>
    						) : (
      						<table class="n">
        					{expense.slice(-5).map((d) => (
         					<tr key={d.id}> 
            				<td>{d.expenseSource}</td>
            				<td>{d.expenseAmt}</td>
          					</tr>
        					))}
      						</table>
    						)}

							</div>
							<br></br>
						</div>

					</div>
					&nbsp;
					<div className="i">
						<div className="ca">
						<div className="sep1">
						<div className="result-calendar">
						<center>
			 			<h3>Calendar</h3><br></br>
      					<Calendar onChange={onChange} value={value} />
						</center>
						</div>
						</div>
						</div>
						<br></br>
						<div className="ca2">
							<center>

							<h4>To View your finance Reports</h4>
							<p style={{color:"red"}}>Click button!!!</p>
							
							<Link to='/report'><button id="bu2">Reports</button></Link>
							</center>
						</div>
						<div className="ca1">
							<h5>Date and time</h5>
						{currentDateTime}
						</div>
						{/* <div className="d">
						<div className="sep">
						<div className="d2">						
			 			<p>Investments</p>
						</div>
						</div>
						<div className="sep">
						<div className="d3">
			 			<p>Entertainment</p>
						</div>
						</div>
						</div> */}
						<br></br>
					
					</div>
					</div>

					</div>
				</div>
				</div>
					
			
		</body>
		</div>
        </>
	);
}

export default Home;