
import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import {Link} from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () =>{
   const [btnNameReact, setbtnNameReact] =useState("Login");
    
   const {loggedInUser} = useContext(UserContext);
   
   //selector 
   const cartItems = useSelector((store) => store.cart.items);
   const totalCartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

   
   return(
       <div className="flex justify-between shadow-lg">

          <div className="header-logo">
             <img className="w-56" src = {LOGO_URL}/>
          
          </div>
          <div className ="flex items-center">
             <ul className="flex p-3 m-3 list-none">
                <li className="px-4"> <Link to ="/"> Home
                </Link></li>
                <li className="px-4">
                  <Link to ="/about">  About Us
                  </Link>
                  </li>
                <li className="px-4"> <Link to ="/contact">  Contact Us
                </Link></li>
                <li className="px-4"><Link to ="/Cart">
                Cart - {totalCartQuantity}
                </Link></li>
               <button className="login" onClick={() => { btnNameReact ==="Login"? setbtnNameReact("Logout"): setbtnNameReact("login");}}>{btnNameReact}</button> 
               <li className="px-4">{loggedInUser}</li>
            
             </ul>
          </div>
       </div>
    )
 }


 export default Header;