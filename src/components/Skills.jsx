import React, { useState } from 'react'
import './Skills.css'
import Navbar from './Navbar';

const Skills = () => {
    const expanded = useState(true);
    const notMenu = useState("notmenu");
  
    return (
      <div>
        <Navbar type={notMenu} expanded={expanded}></Navbar>
      </div>
    )
}

export default Skills