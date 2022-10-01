import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "list-item",
  
};



function NavBar() {
  return (
  <div className="navbar">
  
    <NavLink
     to="/"
     exact
     style={linkStyles}
    
   >
     Home
   </NavLink>
   
   <NavLink
     to="/movies"
     exact
     style={linkStyles}
    
   >
     Movies
   </NavLink>

   <NavLink
     to="/directors"
     exact
     style={linkStyles}
    
   >
     Directors
   </NavLink>

   <NavLink
     to="/actors"
     exact
     style={linkStyles}
     
   >
     Actors
   </NavLink>
  </div>
  );
}

export default NavBar;
