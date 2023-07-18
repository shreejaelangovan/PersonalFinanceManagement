import React from "react";
import { TextField } from '@mui/material';
import './goals.css';
import { useRef } from "react";
import {Link} from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
const source = [
    {
        value: 'Paying off Debt',
        label: 'Paying off Debt',
    },
    {
      value: 'New Home',
      label: 'New Home',
    },
    {
      value: 'New Car',
      label: 'New Car',
    },
    {
      value: 'Others',
      label: 'OTHERS',
    },
  ];
export default function Goals(){
    const navRef=useRef();
    // const[dob,setDob]=useState('');
    // const handleSubmit=(e)=>{
    // }
    return(
        <>
        <div className="hv">
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
                <h1>Goal Setting</h1>
                <br></br>
                <div className='o'>
                    <div className='p'>
                        <div className='w'>
                        <div className='v1'>
                        <label>TARGET AMOUNT</label>
                        </div>
                        <div className='r1'>
                        <TextField id="standard-basic" label="amount" variant="standard" />
                        </div>
                        </div>
                        <div className='w'>
                        <div className='v2'>
                        <label>SAVED AMOUNT</label>
                        </div>
                        <div className='r2'>
                        <TextField id="standard-basic" label="amount" variant="standard" />
                        </div>
                        </div>
                        <div className='w'>
                        <div className='v3'>
                        <label>CATEGORY</label>
                        </div>
                        <div className='r3'>
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
                        <div className="w">
                            <div className="v4">
                                <label>DATE</label>
                            </div>
                            <div className="r4">
                                <input type="date" id="dob" name="dob" style={{backgroundColor:'#b9bece'}}></input>
                            </div>
                        </div>
                        <div className='w'>
                        <div className='v5'>
                        <label>NOTES</label>
                        </div>
                        <div className='r5'>
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


