import React from "react";
import { TextField } from '@mui/material';
import axios from 'axios';
import './goals.css';
import { useRef,useState,useEffect } from "react";
import {Link,useNavigate} from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import { useUser } from './userContext';
export default function Goals(){
    const navRef=useRef();
    const[goalData,setGoalData]=useState({});
    const { userEmail } = useUser();
    const handleChange=(e)=>{
    e.preventDefault();
    
    const {id,value}=e.target;
    setGoalData({...goalData,[id]:value});
    console.log(goalData);
    }
    
    const handleAddGoal=()=>{
        axios.post(`http://localhost:8080/goal/${userEmail}`,goalData)
        window.location.reload();
        // toast.info("budget added succesfully")
      }
      const[goal,addGoal]=useState([]);
        useEffect(() => {
          axios.get(`http://localhost:8080/goal/getGoal/${userEmail}`).then(function (response) {
              addGoal(response.data);
            });
    }, []);

    const navigation = useNavigate();
    const deletecontent = (goalId) => {
        if (window.confirm('Do you want to delete')) {
          axios
            .delete(`http://localhost:8080/goal/delete/${goalId}`)
            .then((res) => {
              alert('Record Deleted');
              navigation('/goals');
              window.location.reload(false);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      };
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
				    {/* <Link to='/budget'><a href="/#">Budget</a></Link> */}
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
                        <TextField id="targetAmount" label="amount" variant="standard" 
                        onChange={handleChange}/>
                        </div>
                        </div>
                        <div className='w'>
                        <div className='v2'>
                        <label>SAVED AMOUNT</label>
                        </div>
                        <div className='r2'>
                        <TextField id="savedAmount" label="amount" variant="standard" 
                        onChange={handleChange}/>
                        </div>
                        </div>
                        <div className='w'>
                        <div className='v3'>
                        <label>CATEGORY</label>
                        </div>
                        <div className='r3'>
                        <TextField
                        id="goalSource"
                        // select
                        label="Source"
                        // defaultValue="S"
                        // helperText="Select source of income"
                        variant="standard"
                        onChange={handleChange}>
                        </TextField>
                        </div>
                        </div>
                        <br></br>
                        <div className="w">
                            <div className="v4">
                                <label>DATE</label>
                            </div>
                            <div className="r4">
                                <input type="date" id="desiredDate" name="dob" style={{backgroundColor:'#b9bece'}}
                                onChange={handleChange}></input>
                            </div>
                        </div>
                        <div className='w'>
                        <div className='v5'>
                        <label>NOTES</label>
                        </div>
                        <div className='r5'>
                        <TextField
                        id="goalDesc"
                        label="Notes"
                        multiline
                        // rows={}
                        variant="standard"
                        onChange={handleChange}/>
                        </div>
                        </div>
                        <br></br>
                        <br></br>
                        <button id="bu" onClick={handleAddGoal}>ADD</button>
                    </div>
                </div>
                </center>
                <br></br>
                <br></br>
                <br></br>
                <div className='ta'>
                <table>
                    <thead>
                            <th>TARGET AMOUNT</th>
                            <th>SAVED AMOUNT</th>
                            <th>CATEGORY</th>
                            <th>DATE </th>
                            <th>NOTES</th>
                            <th>ACTION</th>
                    </thead>
                    <tbody>
                    {goal.map((g)=>(
                        <tr>
                            <td>{g.goalSource}</td>
                            <td>{g.targetAmount}</td>
                            <td>{g.savedAmount}</td>
                            <td>{g.goalDesc}</td>
                            <td>{g.desiredDate}</td>
                            <td>

                            <div className='ta'>
                                {/* <button id='two' onClick={()=>handleEdit(l)}>Edit</button> */}
                                <button id='three1' onClick={() => deletecontent(g.goalId)}>Delete</button>
                            </div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </body>
            </div>
        
        </>
    );
};


