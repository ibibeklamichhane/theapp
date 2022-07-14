import React from "react";
import PropTypes from "prop-types";
//import { Link } from "react-router-dom";

////<nav ClassName={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
//<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
export default function Navbar(props) {
  return (
    <>
    
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a  className="nav-link active" aria-current="page" href="#">
                
                  {props.home}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <div className={`form-check form-switch text-${props.mode}`}>
                <input className="form-check-input" onClick={props.toogleMode} type="checkbox" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode </label>
              </div>

              
            </form>
          </div>


        </div>
      </nav>
    </>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
};
