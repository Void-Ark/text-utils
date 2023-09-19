import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {

  const toggleMode = () => {
    if (document.body.attributes["data-bs-theme"].nodeValue === 'dark') {
      document.body.attributes["data-bs-theme"].nodeValue = 'light';
      props.showAlert("success", "Light Mode is Enabled!");
    } else {
      document.body.attributes["data-bs-theme"].nodeValue = 'dark';
      props.showAlert("success", "Dark Mode is Enabled!");
    }
  }

  return (
<> 
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
      </ul> 
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleMode}/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch Mode</label>
      </div>
    </div>
  </div>
</nav>
</>

  )
}

Navbar.propTypes = {title: PropTypes.string.isRequired};
Navbar.defaultProps = {title: "textUtils"};
