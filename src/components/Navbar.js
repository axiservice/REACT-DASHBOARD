import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg " color-on-scroll="500">
        <div className="container-fluid">
          <i><a className="navbar-brand" href="/">Dashboard</a></i>
          <i><a className="navbar-brand" href="/"> --- </a></i>
          <i><a className="navbar-brand" href="/profile">Profile</a></i>
          
          
          
          <div className="collapse navbar-collapse justify-content-end" id="navigation">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to='/'>
                  <span className="no-icon">Log out</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar