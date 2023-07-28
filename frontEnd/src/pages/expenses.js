import React from "react";
import { useRef,useState,useEffect } from "react";
import axios from 'axios';
import './expenses.css';
import { TextField } from '@mui/material';
import {Link,useNavigate} from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import { useUser } from './userContext';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Expenses(){
    const[expenseData,setExpenseData]=useState({});
    const { userEmail } = useUser();
    const handleChange=(e)=>{
    e.preventDefault();
    
    const {id,value}=e.target;
    setExpenseData({...expenseData,[id]:value});
    console.log(expenseData);
    }
    
    const handleAddExpense=()=>{
        axios.post(`http://localhost:8080/expense/${userEmail}`,expenseData)
        window.location.reload();
        // toast.info("budget added succesfully")
      }
    

    const[expense,addExpense]=useState([]);
      useEffect(() => {
          axios.get(`http://localhost:8080/expense/getExpense/${userEmail}`).then(function (response) {
              addExpense(response.data);
            });
    }, []);

    const [editing, setEditing] = useState(false);
    const [editData, setEditData] = useState({});
      const handleEdit = (expenseData) => {
        setEditData(expenseData);
        setEditing(true);
      };
      const handleUpdateExpense = () => {
        axios
          .put(`http://localhost:8080/expense/updateExpense/${editData.expenseId}`, editData)
          .then((response) => {
            alert('Record Updated');
            setEditing(false);
            window.location.reload(false);
          })
          .catch((error) => {
            console.log(error);
          });
      };

    const navigation = useNavigate();
    const deletecontent = (expenseId) => {
        if (window.confirm('Do you want to delete')) {
          axios
            .delete(`http://localhost:8080/expense/${expenseId}`)
            .then((res) => {
              alert('Record Deleted');
              navigation('/expenses');
              window.location.reload(false);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      };
    
    const navRef = useRef();
    return(
        <>
        <ToastContainer/>
        <div className="hw">
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
                <center>

                <h1>Expenses</h1>
                </center>
                <br></br>
                {editing?(<div className='o'>
                    <div className='p'>
                        <div className='w'>
                        <div className='w1'>
                        <label>AMOUNT</label>
                        </div>
                        <div className='k1'>
                        <input
                  id='expenseAmt'
                  type='text'
                  value={editData.expenseAmt}
                  onChange={(e) => setEditData({ ...editData, expenseAmt: e.target.value })}
                />
                        </div>
                        </div>
                        <div className='w'>
                        <div className='w2'>
                        <label>SOURCE</label>
                        </div>
                        <div className='k2'>
                        <input
                  id='expenseSource'
                  type='text'
                  value={editData.expenseSource}
                  onChange={(e) => setEditData({ ...editData, expenseSource: e.target.value })}
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
                  id='expenseDate'
                  type='text'
                  value={editData.expenseDate}
                  onChange={(e) => setEditData({ ...editData, expenseDate: e.target.value })}
                />

                            </div>
                        </div>
                        <div className='w'>
                        <div className='w3'>
                        <label>NOTES</label>
                        </div>
                        <div className='k3'>
                        <input
                  id='expenseDesc'
                  type='text'
                  value={editData.expenseDesc}
                  onChange={(e) => setEditData({ ...editData,expenseDesc: e.target.value })}
                />

                        </div>
                        </div>
                        <button id="bu5"
                //   className='button'
                  variant='contained'
                  style={{ color: 'black' }}
                  onClick={handleUpdateExpense}
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
                </div>):(
                <div className='o'>
                    
                    <div className='p'>
                        <div className='w'>
                        <div className='w1'>
                        <label>AMOUNT</label>
                        </div>
                        <div className='k1'>
                        <TextField id="expenseAmt" 
                        label="amount" 
                        value={editData.incomeDate}
                        variant="standard" 
                        onChange={handleChange}/>
                        </div>
                        </div>
                        <div className='w'>
                        <div className='w2'>
                        <label>SOURCE</label>
                        </div>
                        <div className='k2'>
                        <TextField
                        id="expenseSource"
                        // select
                        label="Select"
                        // defaultValue="S"
                        // helperText="Select expense category"
                        variant="standard"
                        onChange={handleChange}>
                        {/* {category.map((option) => (
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
                                <input type="date" id="expenseDate" name="dob" style={{backgroundColor:'#b9bece'}} onChange={handleChange}></input>
                            </div>
                        </div>
                        <div className='w'>
                        <div className='w3'>
                        <label>NOTES</label>
                        </div>
                        <div className='k3'>
                        <TextField
                        id="expenseDesc"
                        label="Notes"
                        multiline
                        // rows={}
                        variant="standard"
                        onChange={handleChange}/>
                        </div>
                        </div>
                        <br></br>
                        <br></br>
                        <button id="bu" onClick={handleAddExpense}>ADD</button>
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
                    {expense.map((d)=>(
                        <tr>
                        <td>{d.expenseAmt}</td>
                            <td>{d.expenseSource}</td>
                            <td>{d.expenseDesc}</td>
                            <td>{d.expenseDate}</td>
                            <td>
                            <div className='ta'>
                                <button id='two' onClick={() => handleEdit(d)}>Edit</button>
                                <button id='three' onClick={() => deletecontent(d.expenseId)}>Delete</button>
                                {/* <a onClick={() => deletecontent(item.id)} className='btn btn-danger' style={{ fontSize: '15px', height: '70%', width: '40%' }}>
                                  Delete
                                </a> */}
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