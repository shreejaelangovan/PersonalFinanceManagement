import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { TextField,Button } from '@mui/material';
import './income.css';
import { useRef,useEffect } from "react";
import {Link,useNavigate} from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import { useUser } from './userContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Income(){
    const[incomeData,setIncomeData]=useState({});
    const { userEmail } = useUser();
    const handleChange=(e)=>{
    e.preventDefault();

    const {id,value}=e.target;
    setIncomeData({...incomeData,[id]:value});
    console.log(incomeData);
    }
    // const handleAddIncome=()=>{
    //     axios.post("http://localhost:8080/income",incomeData)
    //     window.location.reload();
    //   }
    const handleAddIncome = async () => {
        try {
    console.log(`${userEmail}`);
    await axios.post(`http://localhost:8080/income/${userEmail}`, incomeData);

    // Show toast notification for successful income addition
    toast.success('Income added successfully', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000, // Time duration for toast message to automatically close (in milliseconds)
    });

    // Redirect to the home page with the income amount as a parameter
    window.location.href = `/home?incomeAmt=${incomeData.incomeAmt}`;
  } catch (error) {
    console.log(error);
  }
      };  
      
      const[income,addIncome]=useState([]);
      useEffect(() => {
          axios.get(`http://localhost:8080/income/get/${userEmail}`).then(function (response) {
              addIncome(response.data);
            });
        }, []);

        const navigation = useNavigate();
        const deletecontent = (incomeId) => {
        if (window.confirm('Do you want to delete')) {
          axios
            .delete(`http://localhost:8080/income/${incomeId}`)
            .then((res) => {
              alert('Record Deleted');
              navigation('/income');
              window.location.reload(false);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      };
      const [editing, setEditing] = useState(false);
    const [editData, setEditData] = useState({});
      const handleEdit = (lendData) => {
        setEditData(lendData);
        setEditing(true);
      };
      
      const handleUpdateIncome = () => {
        axios
          .put(`http://localhost:8080/income/update/${editData.incomeId}`, editData)
          .then((response) => {
            alert('Record Updated');
            setEditing(false);
            window.location.reload(false);
          })
          .catch((error) => {
            console.log(error);
          });
      };
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
				    {/* <Link to='/budget'><a href="/#">Budget</a></Link> */}
            <Link to='/debt'><a href="/#">Debt</a></Link>
			    </nav>
		    </header>
            <br></br>
            <body>
                <center>
                <br></br>
                <h1>Income Details</h1>
                <br></br>
                {editing?(<div className='o'>
                    <div className='p'>
                        <div className='w'>
                        <div className='w1'>
                        <label>AMOUNT</label>
                        </div>
                        <div className='k1'>
                        <input
                  id='incomeAmt'
                  type='text'
                  value={editData.incomeAmt}
                  onChange={(e) => setEditData({ ...editData, incomeAmt: e.target.value })}
                />
                        </div>
                        </div>
                        <div className='w'>
                        <div className='w2'>
                        <label>SOURCE</label>
                        </div>
                        <div className='k2'>
                        <input
                  id='incomeSource'
                  type='text'
                  value={editData.incomeSource}
                  onChange={(e) => setEditData({ ...editData, incomeSource: e.target.value })}
                />
                        </div>
                        </div>
                        <br></br>
                        <div className="w">
                            <div className="w4">
                                <label>DATE</label>
                            </div>
                            <div className="k4">
                            <input
                  id='incomeDate'
                  type='text'
                  value={editData.incomeDate}
                  onChange={(e) => setEditData({ ...editData, incomeDate: e.target.value })}
                />

                            </div>
                        </div>
                        <div className='w'>
                        <div className='w3'>
                        <label>NOTES</label>
                        </div>
                        <div className='k3'>
                        <input
                  id='incomeDesc'
                  type='text'
                  value={editData.incomeDesc}
                  onChange={(e) => setEditData({ ...editData,incomeDesc: e.target.value })}
                />

                        </div>
                        </div>
                        <button id="bu5"
                //   className='button'
                  variant='contained'
                  style={{ color: 'black' }}
                  onClick={handleUpdateIncome}
                >
                  Update
                </button>
                <button id="bu5"
                //   className='button'
                  variant='contained'
                  style={{ color: 'black' }}
                  onClick={() => setEditing(false)}
                >
                  Cancel
                </button>
                        <br></br>
                        <br></br>
                        {/* <button id="bu" onClick={handleAddIncome}>ADD</button> */}
                    </div>
                </div>):(<div className='o'>
                    <div className='p'>
                        <div className='w'>
                        <div className='w1'>
                        <label>AMOUNT</label>
                        </div>
                        <div className='k1'>
                        <TextField id="incomeAmt" label="amount" variant="standard" onChange={handleChange}/>
                        </div>
                        </div>
                        <div className='w'>
                        <div className='w2'>
                        <label>SOURCE</label>
                        </div>
                        <div className='k2'>
                        <TextField
                        id="incomeSource"
                        // select
                        label="Select"
                        // defaultValue="S"
                        // helperText="Select source of income"
                        variant="standard"
                        onChange={handleChange}
                        >
                        {/* {source.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                        ))} */}
                        </TextField>
                        </div>
                        </div>
                        <br></br>
                        <div className="w">
                            <div className="w4">
                                <label>DATE</label>
                            </div>
                            <div className="k4">
                                <input type="date" id="incomeDate" name="dob" style={{backgroundColor:'#b9bece'}} onChange={handleChange}></input>
                            </div>
                        </div>
                        <div className='w'>
                        <div className='w3'>
                        <label>NOTES</label>
                        </div>
                        <div className='k3'>
                        <TextField
                        id="incomeDesc"
                        label="Notes"
                        multiline
                        // rows={}
                        variant="standard"
                        onChange={handleChange}/>
                        </div>
                        </div>
                        
                        <br></br>
                        <br></br>
                        <button id="bu" onClick={handleAddIncome}>ADD</button>
                    </div>
                </div>)}
                    
                </center>
                <br></br>
                <br></br>
                <br></br>
                <div className='ta'>
                <table>
                    <thead>
                            <th>AMOUNT</th>
                            <th>SOURCE</th>
                            <th>NOTES</th>
                            <th>DATE </th>
                            <th>ACTION</th>
                    </thead>
                    <tbody>
                    {income.map((d)=>(
                        <tr>
                        <td>{d.incomeAmt}</td>
                            <td>{d.incomeSource}</td>
                            <td>{d.incomeDesc}</td>
                            <td>{d.incomeDate}</td>
                            <td>
                            <div className='ta'>
                                <button id='two' onClick={() => handleEdit(d)}>Edit</button>
                                <button id='three' onClick={() => deletecontent(d.incomeId)}>Delete</button>
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

