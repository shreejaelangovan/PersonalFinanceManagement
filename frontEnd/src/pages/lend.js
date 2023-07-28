import React from "react";
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useRef ,useState,useEffect} from "react";
import './lend.css';
import { TextField } from '@mui/material';
import { useUser } from './userContext';

export default function Lend(){
    const navRef=useRef();
    const { userEmail } = useUser();
    const[lendData,setLendData]=useState({});
    const handleChange=(e)=>{
        e.preventDefault();
        
        const {id,value}=e.target;
        setLendData({...lendData,[id]:value});
        console.log(lendData);
        }
        const handleAddLend=()=>{
            axios.post(`http://localhost:8080/lend/${userEmail}`,lendData)
            window.location.reload();
        }
        const[lend,addLend]=useState([]);
        useEffect(() => {
          axios.get(`http://localhost:8080/lend/getLend/${userEmail}`).then(function (response) {
              addLend(response.data);
            });
    }, []);

    const navigation = useNavigate();
    const deletecontent = (lendId) => {
        if (window.confirm('Do you want to delete')) {
          axios
            .delete(`http://localhost:8080/lend/${lendId}`)
            .then((res) => {
              alert('Record Deleted');
              navigation('/lend');
              window.location.reload(false);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      };

      const [editing, setEditing] = useState(false);
        const [editData, setEditData] = useState({});
      const handleEdit = (expenseData) => {
        setEditData(expenseData);
        setEditing(true);
      };

      const handleUpdateIncome = () => {
        axios
          .put(`http://localhost:8080/lend/updatelend/${editData.lendId}`, editData)
          .then((response) => {
            alert('Record Updated');
            setEditing(false);
            window.location.reload(false);
          })
          .catch((error) => {
            console.log(error);
          });
      };
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
                        {/* <div className='w'>
                        <div className='i1'>
                        <label>ID</label>
                        </div>
                        <div className='s1'>
                        <TextField id="lendingId" label="id" variant="standard" 
                        onChange={handleChange}/>
                        </div>
                        </div> */}
                        <div className='w'>
                        <div className='i1'>
                        <label>NAME</label>
                        </div>
                        <div className='s1'>
                        <TextField id="lendName" label="name" variant="standard" 
                        onChange={handleChange}/>
                        </div>
                        </div>
                        <div className='w'>
                        <div className='i2'>
                        <label>AMOUNT</label>
                        </div>
                        <div className='s2'>
                        <TextField id="lendAmount" label="amount" variant="standard" 
                        onChange={handleChange}/>
                        </div>
                        </div>
                        <div className="w">
                            <div className="i3">
                                <label>DATE</label>
                            </div>
                            <div className="s3">
                            <input type="date" id="lendDate" name="dob" style={{backgroundColor:'#b9bece'}}
                            onChange={handleChange}></input>
                            </div>
                        </div>
                        <div className="w">
                            <div className="i4">
                                <label>DUE DATE</label>
                            </div>
                            <div className="s4">
                            <input type="date" id="lendDueDate" name="dob" style={{backgroundColor:'#b9bece'}}
                            onChange={handleChange}></input>
                            </div>
                        </div>
                        {/* <br></br> */}
                        <div className='w'>
                        <div className='i5'>
                        <label>NOTES</label>
                        </div>
                        <div className='s5'>
                        <TextField
                        id="lendDesc"
                        label="Notes"
                        multiline
                        // rows={}
                        variant="standard"
                        onChange={handleChange}/>
                        </div>
                        </div>
                        <br></br>
                        <br></br>
                        <button id="bu" onClick={handleAddLend}>ADD</button>
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
                        {lend.map((l)=>(
                        <tr>
                            <td>{l.lendName}</td>
                            <td>{l.lendAmount}</td>
                            <td>{l.lendDate}</td>
                            <td>{l.lendDueDate}</td>
                            <td>{l.lendDesc}</td>
                            <td>

                            <div className='ta'>
                                {/* <button id='two' onClick={()=>handleEdit(l)}>Edit</button> */}
                                <button id='three1' onClick={() => deletecontent(l.lendId)}>Delete</button>
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