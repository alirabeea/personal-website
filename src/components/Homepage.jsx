import React, { useState } from 'react'
import Navbar from './Navbar';
import './Homepage.css';
import Menu from './Menu';

const Homepage = (props) => {

  const expanded = useState(true);
  const menu = useState("home");

  return (
    <div className="home">
        <Navbar type={menu} expanded={expanded}></Navbar>
        <Menu type={menu} expanded={expanded}></Menu>
    </div>
  )
}

export default Homepage