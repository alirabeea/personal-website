import React, { useState } from 'react'
import './Projects.css'
import Navbar from './Navbar';

const Projects = () => {
    const expanded = useState(true);
    const notMenu = useState("notmenu");
  
    return (
      <div>
        <Navbar type={notMenu} expanded={expanded}></Navbar>
      </div>
    )
}

export default Projects