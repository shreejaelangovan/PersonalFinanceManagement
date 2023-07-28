import React from "react";
import { useState,useRef,useEffect } from "react";
import "./aboutus.css";
import phoneIcon from "../assets/phoneIcon.png";
import emailIcon from "../assets/email.jpeg";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter1.svg";
import youtube from "../assets/youtube1.png";
import {Link} from 'react-router-dom';
export default function About(){
    const navRef = useRef();
    const text = '“Success is doing what you want, when you want, where you want, with whom you want, as much as you want.”';
  const [displayText, setDisplayText] = useState('');
    useEffect(() => {
      let charIndex = 0;
      const typingInterval = setInterval(() => {
        if (charIndex <= text.length) {
          setDisplayText(text.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 100); // Adjust typing speed by changing the interval duration
    }, []);
  
    return (
        <div>
          {/* Header */}
          <header className="header">
            <h1>About Us - Personal Finance App</h1>
            <nav ref={navRef}>
			 	
			</nav>
          </header>
    
          {/* Content */}
          <div className="ash">
            <div className="content">
              <section>
                <h1 className="section-title">Our Vision</h1>
                <p className="section-description">
                  Our vision is to empower individuals and families to take control of their finances
                  and achieve their financial goals. We believe that financial literacy and effective
                  money management are essential skills that can lead to a more secure and prosperous future
                  for individuals and their loved ones.
                </p>
              </section>
    
              <section>
                <h2 className="section-title">Key Features</h2>
                <ul className="section-description">
                  <li>Budgeting Made Easy</li>
                  <li>Expense Tracking</li>
                  <li>Goal Setting</li>
                  <li>Income Management</li>
                  <li>Financial Insights</li>
                  <li>Secure and Private</li>
                  <li>Educational Resources</li>
                </ul>
              </section>
    
              <section>
                <h2 className="section-title">Why Choose Us</h2>
                <p className="section-description">
                  With our Personal Finance App, you get a comprehensive and intuitive platform to manage
                  your finances effectively. Here are some reasons why our app stands out:
                  <ul>
                    <li>User-friendly interface for easy navigation.</li>
                    <li>Advanced budgeting tools for better financial planning.</li>
                    <li>Secure and private data protection.</li>
                    <li>Insightful financial reports and analysis.</li>
                    <li>Access to educational resources for financial literacy.</li>
                  </ul>
                </p>
              </section>
            </div>
            <Link to='/base'><button id="b0">BACK</button></Link>
            {/* <Link to='/base'><a href="/#">BACK</a></Link> */}
          </div>

          {/* Footer */}
          <footer className="footer">
            <div className="jay">
              <div className="shy">
            <br></br>
            <h2 className="sections">Contact Us</h2>
                <div className="contact-info">
                  <div className="contact-info-item">
                    <img className="contact-info-icon" src={emailIcon} alt="Email" />
                    <div className="contact-info-text">contact@financeapp.com</div>
                  </div>
                  <div className="contact-info-item">
                    <img className="contact-info-icon" src={phoneIcon} alt="Phone" />
                    <div className="contact-info-text">123-456-7890</div>
                  </div>
                  <div className="sdg">
                  <img src={facebook} style={{width:'6.5%',height:'6.5%',paddingRight:'1%'}}></img><span></span><span></span>
                  <img src={instagram} style={{width:'6%',height:'6%',paddingRight:'1%'}}></img><span></span><span></span>
                  <img src={twitter} style={{width:'6%',height:'6%',paddingRight:'1%'}}></img><span></span><span></span>
                  <img src={youtube} style={{width:'9%',height:'9%',paddingRight:'1%'}}></img><span></span><span></span>
                  </div>
                  {/* Add more contact information as needed */}
                </div>
              </div>
              <div className="ela">
                  <h4>{displayText}</h4>
               </div>
            </div>
                <center>
            <p>© {new Date().getFullYear()} Personal Finance App. All rights reserved.</p>
                </center>
          </footer>
        </div>
      );
};
