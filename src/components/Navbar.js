import { Link } from "react-router-dom"

// style

import './navbar.css'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <ul>
        <li className='title'>myMoney</li>
        
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
    </nav>
  )
}