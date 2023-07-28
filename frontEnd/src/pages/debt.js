import React from "react";
import {Link} from 'react-router-dom';
import { useRef } from "react";
import './debt.css';
export default function Debt(){
    const navRef=useRef();
    return(
        <>
        <div className="qw">
            <header>
			    <h1>MY WALLET</h1><span></span>
			    <nav ref={navRef}>
			 	    <Link to='/home'><a href="/#">Home</a></Link>
                    <Link to='/income'><a href="/#">Income</a></Link>
				    <Link to='/expenses'><a href="/#">Expenses</a></Link>
				    <Link to='/goals'><a href="/#">Goals</a></Link>
				    {/* <Link to='/budget'><a href="/#">Budget</a></Link> */}
                    <Link to='/debt'><a href="/#">Debt</a></Link>
			    </nav>
		    </header>
            <body>
            <center>
                <br></br>
                <br></br>
                <h1>Debt Management</h1>
                <br></br>
            </center>
                <div className="qw1">
                    <div className="qw11">
                        <center>
                        <div className="qw111">
                        <br></br>
                            <br></br>
                            <br></br>
                            <div className='qs'>
                                <Link to='/lend'><button id='qs'>Lending</button></Link>
                            </div>
                        </div>
                        </center> 

                    </div>
                    <div className="qw12">
                    <center>
                        <div className="qw111">
                        <br></br>
                            <br></br>
                            <br></br>
                            <div className='qs'>
                                <Link to='/borrow'><button id='qs'>Borrowing</button></Link>
                            </div>
                        </div>
                        </center> 
                    </div>
                </div>
            </body>
            <br></br>
        </div>
        </>
    );
};