import React from 'react';
import { TextField } from '@mui/material';
import './income.css';
import { useRef } from "react";
import {Link} from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
const source = [
    {
      value: 'Salary',
      label: 'Salary',
    },
    {
      value: 'Freelancing',
      label: 'Freelancing',
    },
    {
      value: 'Allowance',
      label: 'Allowance',
    },
    {
        value: 'Bonus',
        label: 'Bonus',
    },
    {
      value: 'Others',
      label: 'OTHERS',
    },
  ];
export default function Income(){
    const navRef = useRef();
    return(
        <>
        <div className='home'>
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
            <br></br>
            <body>
                <center>
                <br></br>
                <h1>Income Details</h1>
                <br></br>
                <div className='o'>
                    <div className='o1'>
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
                        <label>SOURCE</label>
                        </div>
                        <div className='k2'>
                        <TextField
                        id="standard-select-currency"
                        select
                        label="Select"
                        // defaultValue="S"
                        helperText="Select source of income"
                        variant="standard">
                        {source.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                        ))}
                        </TextField>
                        </div>
                        </div>
                        <br></br>

                        <div className='w'>
                        <div className='w3'>
                        <label>NOTES</label>
                        </div>
                        <div className='k3'>
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

