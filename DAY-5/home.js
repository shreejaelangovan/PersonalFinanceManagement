import { useRef } from "react";
import "./home.css";
import {Link} from 'react-router-dom';
import { Container } from "@mui/system";
import profile from '../assets/profile.png'
function Home() {
	const navRef = useRef();

	return (
        <>
		<header>
			<h1>MY WALLET</h1><span></span>
			<nav ref={navRef}>
				{/* 
				<a href="/#">Login</a>
			 */}
				<a href="/#">Income</a>
				<a href="/#">Ivestments</a>
				<a href="/#">Expenses</a>
				<a href="/#">Budget</a>
				<Link to="/Login"><a href="/#">Logout</a></Link>
			</nav>
		</header>
		<body>
			<div className="b">
				<div className="b1">
					<center>
						<br></br>
						<br></br>
						<h4>DASHBOARD</h4>
						<br></br>
					<img src={profile} style={{width:'6rem',height:'25%'}}></img>
					<br></br>
					<p>Welcome |Name| !!!</p>
					</center>
					<h4>Amount:</h4> 
					<nav className="navi">
					<a href="/#">Settings</a>
					<a href="/#">Logout</a>
					</nav>
				</div>
				<div className="b2">
					{/* <h1>My wallet</h1> */}
				</div>

			</div>
			
		</body>
		<footer>
			<p>Contact</p>
		</footer>
        </>
	);
}

export default Home;