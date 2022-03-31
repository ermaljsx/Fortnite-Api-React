import React from "react";
import {Link} from 'react-router-dom'
import "./App.css"
function Nav(){
    return(
        <nav>
             <h2 className="navbar-brand brand-name">
       <a href="index.html"
       ><img className="image1" src="fortnite.jpg" /></a>
   </h2>
            <ul className="nav-links">
            <Link to="/Blog">Blog List</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: 'purple',
          borderRadius: '20px' 
        }}>New Blog</Link>
            </ul>
        </nav>
    )
}

export default Nav