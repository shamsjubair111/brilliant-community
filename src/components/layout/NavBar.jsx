import { useState } from "react"
import userImage from "../../assets/images/user.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faUser, faBell, faMoon, faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";





const NavBar = () => {



 
    return (


        <div className="flex justify-between items-center pr-16 pl-8 py-9" style={{height:"60px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)"}} >

          <div className="mr-8 flex align-center">
            <Link><img alt="app_logo" src={logo}/></Link>

            <FontAwesomeIcon icon={faBars} className="ml-40 mt-1.5"  style={{color: "#17177b" , cursor: "pointer"}}/>
          </div>


         <div className="flex items-center">
         <div className="relative w-full max-w-sm mr-16">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
                </span>
                <input
                type="text"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Start search here"
                />
            </div>


      
            <FontAwesomeIcon icon={faMoon} className="mr-4"  style={{color: "#17177b" , cursor: "pointer"}}/>
            <FontAwesomeIcon icon={faUser} className="mr-4"  style={{color: "#17177b" , cursor: "pointer"}}/>
            <FontAwesomeIcon icon={faBell} className="mr-4"  style={{color: "#17177b" , cursor: "pointer"}}/>
            <FontAwesomeIcon icon={faMessage} className="mr-4"  style={{color: "#17177b" , cursor: "pointer"}}/>
        

        <img alt="user_image" src={userImage} className="ml-16" style={{height: "40px", width: "40px", borderRadius: "50%", cursor: "pointer"}} />  
         </div>

       

     


        
            
        </div>
    );
};

export default NavBar;