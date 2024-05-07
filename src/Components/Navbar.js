import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
   <>
   <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">TextUtils</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/About">About</Link>
        </li>
       
        <li className="nav-item">
        </li>
      </ul>
      <div className="form-check form-switch">
  <input  className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"  onClick={props.toggleMode} />
  <label className="form-check-label"  htmlFor="flexSwitchCheckChecked">{props.mode==='light'?'Enable Dark Mode':'Enble Light Mode'}</label>
</div>    </div>
  </div>
</nav>
   </>
  )
}