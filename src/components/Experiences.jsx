import React, { useState } from 'react'
import './Experiences.css'
import Navbar from './Navbar';

const Experiences = () => {
    const expanded = useState(true);
    const notMenu = useState("notmenu");
  
    return (
      <div>
        <Navbar type={notMenu} expanded={expanded}></Navbar>
      </div>
    )
}

export default Experiences