import React from "react";
import { useState,useRef } from "react";
import { Link } from "react-router-dom";
import './budget.css';
import { TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
const category = [
    {
      value: 'Rent',
      label: 'Rent',
    },
    {
      value: 'Education',
      label: 'Education',
    },
    {
      value: 'Food',
      label: 'Food',
    },
    {
        value: 'Social Life',
        label: 'Social Life',
    },
    {
        value: 'Bills',
        label: 'Bills',
    },
    {
        value: 'Transport',
        label: 'Transport',
    },
    {
      value: 'Others',
      label: 'OTHERS',
    },
  ];

export default function Budget(){
    const navRef=useRef();
    return(
        <>
        <div className='sh'>

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
                <h1>Budgeting</h1><br></br>
                <div className="c">
                <p style={{color:'grey'}}>BUDGET SETTINGS</p>
                </div>
                <p></p>
                <br></br>
                <div className='o'>
                    <div className='l2'>
                        <div className='w'>
                        <div className='w1'>
                        <label>AMOUNT</label>
                        </div>
                        <div className='k1'>
                        <TextField id="standard-basic" label="amount" variant="standard" />
                        </div>
                        </div>
                        <div className='w'>
                        <div className='w2'>
                        <label>CATEGORY</label>
                        </div>
                        <div className='k2'>
                        <TextField
                        id="standard-select-currency"
                        select
                        label="Select"
                        // defaultValue="S"
                        helperText="Select expense category"
                        variant="standard">
                        {category.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                        ))}
                        </TextField>
                        </div>
                        </div>
                          <br></br>
                          <br></br>
                        <div className="l1">
                        <label for="points">Range</label>
                        <input type="range" min='0' max='10' step='1'></input>
                        </div>
                        <div className="y">
                        <Link to='/home'><button id="bu">ADD</button></Link>
                        </div>
                    </div>
                </div>
                </center>
            </body>
       
        </div>
        </>
    );
};
