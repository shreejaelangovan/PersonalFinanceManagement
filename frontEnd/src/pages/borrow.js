import React from "react";
import './borrow.css';
import axios from 'axios';
import {Link,useNavigate} from 'react-router-dom';
import { useRef,useState,useEffect } from "react";
import { TextField } from '@mui/material';
import { useUser } from './userContext';

export default function Borrow(){
    const navRef=useRef();
    const { userEmail } = useUser();
    const[borrowData,setBorrowData]=useState({});
    const handleChange=(e)=>{
        e.preventDefault();
        
        const {id,value}=e.target;
        setBorrowData({...borrowData,[id]:value});
        console.log(borrowData);
        }
        const handleAddBorrow=()=>{
            axios.post(`http://localhost:8080/borrow/${userEmail}`,borrowData)
            window.location.reload();
        }
        const[borrow,addBorrow]=useState([]);
        useEffect(() => {
          axios.get(`http://localhost:8080/borrow/getborrow/${userEmail}`).then(function (response) {
              addBorrow(response.data);
            });
    }, []);

    const navigation = useNavigate();
    const deletecontent = (borrowId) => {
        if (window.confirm('Do you want to delete')) {
          axios
            .delete(`http://localhost:8080/borrow/${borrowId}`)
            .then((res) => {
              alert('Record Deleted');
              navigation('/borrow');
              window.location.reload(false);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      };

    //   const [editing, setEditing] = useState(false);
    //     const [editData, setEditData] = useState({});
    //   const handleEdit = (expenseData) => {
    //     setEditData(expenseData);
    //     setEditing(true);
    //   };

    //   const handleUpdateIncome = () => {
    //     axios
    //       .put(`http://localhost:8080/borrow/updateborrow/${editData.borrowId}`, editData)
    //       .then((response) => {
    //         alert('Record Updated');
    //         setEditing(false);
    //         window.location.reload(false);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   };
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
                <h1>Borrowing</h1>
                </center>
                <br></br>
                <div className='o'>
                    <div className='yu'>
                        <div className='w'>
                        <div className='i1'>
                        <label>NAME</label>
                        </div>
                        <div className='s1'>
                        <TextField id="borrowName" 
                        label="name" 
                        variant="standard"
                        onChange={handleChange} />
                        </div>
                        </div>
                        <div className='w'>
                        <div className='i2'>
                        <label>AMOUNT</label>
                        </div>
                        <div className='s2'>
                        <TextField id="borrowAmount" 
                        label="amount" 
                        variant="standard"
                        onChange={handleChange}/>
                        </div>
                        </div>
                        <div className="w">
                            <div className="i3">
                                <label>DATE</label>
                            </div>
                            <div className="s3">
                            <input type="date" 
                            id="borrowDate" 
                            name="dob" 
                            onChange={handleChange}
                            style={{backgroundColor:'#b9bece'}}></input>
                            </div>
                        </div>
                        <div className="w">
                            <div className="i4">
                                <label>DUE DATE</label>
                            </div>
                            <div className="s4">
                            <input type="date" 
                            id="borrowDueDate" 
                            name="dob" 
                            onChange={handleChange}
                            style={{backgroundColor:'#b9bece'}}></input>
                            </div>
                        </div>
                        {/* <br></br> */}
                        <div className='w'>
                        <div className='i5'>
                        <label>NOTES</label>
                        </div>
                        <div className='s5'>
                        <TextField
                        id="borrowDesc"
                        label="Notes"
                        multiline
                        // rows={}
                        variant="standard"/>
                        </div>
                        </div>
                        <br></br>
                        <br></br>
                        <button id="bu" onClick={handleAddBorrow}>ADD</button>
                    </div>
                </div>
                </center>
                <br></br>
                <br></br>
                <br></br>
                <div className='ta'>
                <table>
                    <thead>
                            <th>NAME</th>
                            <th>AMOUNT</th>
                            <th>DATE </th>
                            <th>DUE DATE</th>
                            <th>NOTES</th>
                            <th>ACTION</th>
                    </thead>
                    <tbody>
                    {borrow.map((b)=>(
                        <tr>
                            <td>{b.borrowName}</td>
                            <td>{b.borrowAmount}</td>
                            <td>{b.borrowDate}</td>
                            <td>{b.borrowDueDate}</td>
                            <td>{b.borrowDesc}</td>
                            <td>

                            <div className='ta'>
                                {/* <button id='two'>Edit</button> */}
                                <button id='three1' onClick={() => deletecontent(b.borrowId)}>Delete</button>
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