import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/academic'>Academic</Link>
            </li>
            <li>
              <Link to='/jobskills'>Job Skills</Link>
            </li>
            <li>
              <Link to='/safety'>Safety</Link>
            </li>
            <li>
              <Link to='/driving'>Driving & Heavy Equipment</Link>
            </li>
         
          </ul>
          <div className='start'>
            <div className='button'>VIEW COMMON COURSES</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
