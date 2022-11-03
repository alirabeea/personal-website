import React, { useState } from 'react'
import './About.css'
import Navbar from './Navbar';
import AboutMe from './AboutMe';

const About = () => {

  const expanded = useState(true);
  const notMenu = useState("notmenu");

  return (
    <div>
      <Navbar type={notMenu} expanded={expanded}></Navbar>
      <AboutMe></AboutMe>
    </div>
  )
}

export default About