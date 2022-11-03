import React, {useState} from 'react'
import './Navbar.css';
import Menu from './Menu';
import './Menu.css'

const Navbar = (props) => {

  const expanded = useState(true);
  const notMenu = useState("notmenu");

  if(props.type[0] === 'notmenu' && props.expanded[0]){
    return (
      <div className='navbar--container'>
        <div className='navbar--box--expanded'>
          <a href='/' className='navbar--text'>Ali Rabeea</a>
          <Menu type={notMenu} expanded={expanded}></Menu>
        </div>
      </div> 
      
    )
  }
  else{
    return (
      <div className='navbar--container'>
        <div className='navbar--box'>
          <a href='/' className='navbar--text'>Ali Rabeea</a>
        </div>
      </div>
    )
  }
}

export default Navbar