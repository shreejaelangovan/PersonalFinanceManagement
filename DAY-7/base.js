import React from "react";
import "./base.css";
import openim from '../assets/openImg.jpeg';
import {Link} from 'react-router-dom';
export default function Base(){
    return(
        <>
        <div className="whole">
            <div className="imgr">
                <img src={openim} style={{width:'1000px',height:'877px'}}></img>
            </div>
        <div className="imgl">
            <h1>MY WALLET</h1>
            <br></br>
            <h1>Finance management software</h1>
            <div className="containPara">
            <p className="para"> Personal finance, as a term, covers the concepts of managing your money, saving, and investing. It also includes banking, budgeting, mortgages, investments, insurance, retirement planning, and tax planning.</p>
            <p className="para">My Wallet can help track your spending, saving, investing, and bill payments while keeping you updated on credit score changes.</p>
            <div className="but">
            <Link to='/login'>Skip!!!</Link>
            </div>
            </div>
        </div>
        </div>
        </>
    );
};