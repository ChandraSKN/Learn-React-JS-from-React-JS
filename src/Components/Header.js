import { Fragment } from "react";
import React from "react";

import {Link, useNavigate} from "react-router-dom"


import ReactIcon from "../images/ReactIcon.jpg"
// import Calculator from "../images/Calculator.png";

import "../Components/Home.css";
// import MindMap from './data';




function Header() {
  const navigate = useNavigate();

  const navigateToMindMap = () => {
  
    navigate('/MindMap');
  };

  const navigateToRJSDoc =() =>{
    navigate('/RjsDoc');
  }

  const navigatetoInPack =() => {
    navigate('/InPack');  
  }
  const navigateToSeriesList =() => {
    navigate('/SeriesList');  
  }

  return (
    <Fragment>
      <nav class="navbar navbar-expand-lg navbar-light bg-secondary justify-content-between">
       <Link to="/">
          <img src={ReactIcon} alt="React Home Icon"></img>
          </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNavDropdown">
          <div class="d-flex justify-content-around">
          <ul class="navbar-nav">
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                About React JS
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="https://reactjs.org/docs/getting-started.html" target="_blank">Official Documentation</a>
                <a class="dropdown-item" onClick={navigateToRJSDoc}>Modified Documentation</a>
              </div>
            </li>
            <span>
              <li class="nav-item">
                <Link to='/InPack'>
                <a class="nav-link">Packages that need to be installed</a>
                </Link>
              </li>
              
            </span>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sample Projects
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">To Do Application</a>
                <a class="dropdown-item" onClick={navigateToMindMap}>MindMap</a>
                <a class="dropdown-item" href="#">Quiz Application</a>
                <a class="dropdown-item" onClick={navigateToSeriesList}>Series list Application</a>
              </div>
            </li>
          </ul>
          </div>
        </div>
        {/* <span>
        <div  class="d-flex justify-content-around">
          <img src={Calculator} alt="Calculator"/>
          </div>
          </span> */}
        <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
          
      </nav>
    </Fragment>
  )

}

export default Header;