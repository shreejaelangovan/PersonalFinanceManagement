import { useRef } from "react";
import 'react-calendar/dist/Calendar.css';
import "./home.css";
import {Link} from 'react-router-dom';
import { Container } from "@mui/system";
import profile from '../assets/profile.png';
import Calendar from 'react-calendar';
import {useState} from 'react';
import {userResults} from 'react';
import {useSelector} from 'react-redux';
import UserLogout from "../logout";
import user from "../features/user";


function Home() {
	const navRef = useRef();
	const user=useSelector(state => state.user.value)
	const [value, onChange] = useState(new Date());
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
				<Link to='/budget'><a href="/#">Budget</a></Link>
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
						<h4>PROFILE</h4>
						<br></br>
					<img src={profile} style={{width:'6rem',height:'25%'}}></img>
					<br></br>
					<br></br>
					<p>Welcome!!!</p>
					</center>
					<div className="am">
					{/* <h4>Amount:</h4>  */}
					</div>

					<div className="navi">
					<Link to='/report'><a className="nav2" href="/#" style={{color:'black',display:'flex',flexDirection:'column'}}>Reports</a><br></br></Link>
					<a className="nav2" href="/#" style={{color:'black',display:'flex',flexDirection:'column'}}>Settings</a><br></br>
					{!user.email?
					<Link to="/Login" ><a className="nav2" href="/#" style={{color:'black'}}>Logout</a></Link>:
					<h5>{user.email}<UserLogout/></h5>
					}
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

					<div className="tr">
					<div className="details">
						<div className="sep">
						<div className="inc">
							<h4 className="t">Balance Details</h4>
							<h3 className="s">Rs.67,560</h3>
						</div>
						</div>
						<div className="b4"><br></br>
							<h3>Transactions history</h3>
							<div className="sep">
							<div className="n"><br></br>
								<div className="n1">
								<div className="n12">
								<p>Pharmacy</p>
								</div>
								<div className="n22">
								<p>Rs.1000</p>
								</div>
								</div>
								<br></br>
								<div className="n1">
								<div className="n12">
								<p>Food Market</p>
								</div>
								<div className="n24">
								<p>Rs.2000</p>
								</div>
								</div><br></br>
								<div className="n1">
								<div className="n12">
								<p>Social needs</p>
								</div>
								<div className="n24">
								<p>Rs.2000</p>
								</div>
								</div><br></br>
								<div className="n1">
								<div className="n12">	
								<p>Rent</p>
								</div>
								<div className="n23">
								<p>Rs.2000</p>
								</div>
								</div><br></br>
							</div>
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