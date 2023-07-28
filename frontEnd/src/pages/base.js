import React from "react";
import { useRef } from "react";
import "./base.css";
import openim from '../assets/basevi.gif';
import {Link} from 'react-router-dom';
export default function Base(){
    const navRef = useRef();
    return(
        <>
        <header id="head">
			<h1>MY WALLET</h1><span></span>
			<nav ref={navRef}>
				{/* 
				<a href="/#">Login</a>
			 */}
			 	<Link to='/aboutUs'><a href="/#">ABOUT US</a></Link>
				<Link to='/registration'><a href="/#">SIGN UP </a></Link>
				<Link to='/Login'><a href="/#">SIGN IN</a></Link>
				{/* <Link to='/goals'><a href="/#">Goals</a></Link>
				<Link to='/budget'><a href="/#">Budget</a></Link>
				<Link to='/debt'><a href="/#">Debt</a></Link> */}
			</nav>
		</header>
        <div className="whole">
            <div className="imgr">
                <img src={openim} style={{width:'125%',height:'125%'}}></img>
            </div>
        <div className="imgl">
            <h1><i><b>MY WALLET</b></i></h1>
            <br></br>
            <h1><i>Finance management software</i></h1>
            <br></br>
            <div className="containPara">
            
            <p className="para"> Personal finance, as a term, covers the concepts of managing your money, saving, and investing. It also includes banking, budgeting, mortgages, investments, insurance, retirement planning, and tax planning.</p>
            <br></br>
            <p className="para">My Wallet can help track your spending, saving, investing, and bill payments while keeping you updated on credit score changes.</p>
            <br></br>
            <p className="para">Probably the biggest benefit of financial apps is their accessibility. Whether at work, traveling, or far from a computer, users can make changes and updates right from their mobile device, as long as they have an internet connection.</p>
            <br></br>
            <div className="but">
            <h5><Link to='/aboutUs' style={{color:"slateblue"}}>Read more!!!</Link></h5>
            </div>
            </div>
        </div>
        </div>
        </>
    );
};