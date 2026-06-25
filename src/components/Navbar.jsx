import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">

        <Link className="navbar-brand" to="/">
          TextUtils
        </Link>

        <Link className="nav-link" to="/">
          Home
        </Link>

        <Link className="nav-link" to="/about">
          About
        </Link>

        <div className="form-check form-switch ms-auto">
          <input
            className="form-check-input"
            type="checkbox"
            onClick={props.toggleMode}
          />

          <label
            className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`}
          >
            Dark Mode
          </label>
        </div>

      </div>
    </nav>
  )
}