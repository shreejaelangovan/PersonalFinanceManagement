import React from "react";
import './borrow.css';
import {Link} from 'react-router-dom';
import { useRef } from "react";
export default function Borrow(){
    const navRef=useRef();
    return(
        <>
        <div className="qd">
        <header>
			    <h1>MY WALLET</h1><span></span>
			    <nav ref={navRef}>
			 	    <Link to='/home'><a href="/#">Home</a></Link>
                    <Link to='/income'><a href="/#">Income</a></Link>
				    <Link to='/expenses'><a href="/#">Expenses</a></Link>
				    <Link to='/goals'><a href="/#">Goals</a></Link>
				    <Link to='/budget'><a href="/#">Budget</a></Link>
                    <Link to='/debt'><a href="/#">Debt</a></Link>
			    </nav>
		    </header>
        </div>
        </>
    );
};