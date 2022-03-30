import React from "react";
import './home.css'
import './App.css';
import Nav from "./nav";
import Home from "./home"
import About from "./about";
import Shop from "./shop";
import ItemDetail from "./ItemDetail";
import {
    BrowserRouter as Router,
     Route
  } from "react-router-dom";
import { Routes } from "react-router-dom";


function App(){
    return(
        <Router>
       
            <Nav /> 
            <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route exact path="/shop"  element={<Shop />} />
            <Route path="/shop/:id" element={<ItemDetail />} />
            </Routes>
         
        </Router>
    )
}
export default App

