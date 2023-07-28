// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { Paper } from "@mui/material";
// import { FaCircleUser } from "react-icons/fa6";
// import AOS from "aos";
// // import "../Styles/profile.css";
// // import VoterPage from "./VoterPage";

// const Profile = () => {
//   const { userDetails } = useSelector((state) => state.master);
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   console.log(userDetails);
//   return (
//     <>
//       <div className="pro">
//         <div id="side" style={{ height: "100vh", display: "flex" }}>
//           <main style={{ height: "100vh" }}>
//             <h1 style={{ color: "white" }}>User Profile</h1>
//             <div className="profile-root">
//               <div>
//                 <div
//                   style={{ display: "flex", justifyContent: "center" }}
//                   data-aos="fade-up"
//                 >
//                   <div
//                     layout
//                     transition={{ layout: { duration: 1 }, type: "spring" }}
//                     className="card"
//                   >
//                     <div elevation={16}>
//                       <div layout="position" id="profile-head">
//                         <FaCircleUser size={100} />
//                       </div>
//                       <div className="profile-card-content">
//                         <table className="profile-table">
//                           <tbody>
//                             <tr>
//                               <td className="profile-field">FirstName</td>
//                               <td className="profile-value">{userDetails.firstName}</td>
//                             </tr>
//                             <tr>
//                               <td className="profile-field">LastName:</td>
//                               <td className="profile-value">{userDetails.lastName}</td>
//                             </tr>
//                             <tr>
//                               <td className="profile-field">UserName</td>
//                               <td className="profile-value">{userDetails.userName}</td>
//                             </tr>
//                             <tr>
//                               <td className="profile-field">Email ID:</td>
//                               <td className="profile-value">{userDetails.email}</td>
//                             </tr>
                            
//                           </tbody>
//                         </table>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </main>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Profile;