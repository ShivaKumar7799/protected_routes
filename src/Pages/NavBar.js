import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div style={{display : "flex", columnGap : "20px"}} >
        <Link to ="/" ><span>Home</span></Link>
        <Link to="/about" ><span>About</span></Link>
        <Link to="/contact"><span>Contact</span></Link>
    </div>
  )
}

export default NavBar