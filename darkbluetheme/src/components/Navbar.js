import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/"></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutTxt}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">{props.contactTxt}</Link>
        </li>
       
        
      </ul>


      <div className="form-check form-switch">
  <input className ="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.darkMode} />
  <label className={`form-check-label text-${props.mode==="light"?"dark":"white"}`} htmlFor="flexSwitchCheckDefault">DarkMode </label>
</div>

      <div className="form-check form-switch">
  <input className ="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.blueMode} />
  <label className={`form-check-label text-${props.mode==="light"?"dark":"white"}`} htmlFor="flexSwitchCheckDefault">BlueMode </label>
</div>






      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    
    </>
  )
}
