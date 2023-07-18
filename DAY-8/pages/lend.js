import React from "react";
import {Link} from 'react-router-dom';
import { useRef } from "react";
import './lend.css';
import { TextField } from '@mui/material';

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
            <body>
                <center>
                <br></br>
                <br></br>
                <center>
                <h1>Lending</h1>
                </center>
                <br></br>
                <div className='o'>
                    <div className='yu'>
                        <div className='w'>
                        <div className='i1'>
                        <label>NAME</label>
                        </div>
                        <div className='s1'>
                        <TextField id="standard-basic" label="name" variant="standard" />
                        </div>
                        </div>
                        <div className='w'>
                        <div className='i2'>
                        <label>AMOUNT</label>
                        </div>
                        <div className='s2'>
                        <TextField id="standard-basic" label="amount" variant="standard" />
                        </div>
                        </div>
                        <div className="w">
                            <div className="i3">
                                <label>DATE</label>
                            </div>
                            <div className="s3">
                            <input type="date" id="dob" name="dob" style={{backgroundColor:'#b9bece'}}></input>
                            </div>
                        </div>
                        <div className="w">
                            <div className="i4">
                                <label>DUE DATE</label>
                            </div>
                            <div className="s4">
                            <input type="date" id="dob" name="dob" style={{backgroundColor:'#b9bece'}}></input>
                            </div>
                        </div>
                        <br></br>
                        <div className='w'>
                        <div className='i5'>
                        <label>NOTES</label>
                        </div>
                        <div className='s5'>
                        <TextField
                        id="standard-multiline-static"
                        label="Notes"
                        multiline
                        // rows={}
                        variant="standard"/>
                        </div>
                        </div>
                        <br></br>
                        <br></br>
                        <Link to='/home'><button id="bu">ADD</button></Link>
                    </div>
                </div>
                </center>
            </body>
        </div>
        </>
    );
};