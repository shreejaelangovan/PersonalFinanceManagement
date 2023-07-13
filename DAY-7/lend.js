import React from "react";
import {Link} from 'react-router-dom';
import { useRef } from "react";
import './lend.css';
export default function Lend(){
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