import React from 'react';
import {Link, Route, Routes, BrowserRouter } from 'react-router-dom';

export const NavBar = () => {
    
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link class="navbar-brand" to="/ERCF"><img className="main-logo" src="./sources/ercf.png"></img></Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li class="nav-item active">
              <Link class="nav-link" to="/About">About</Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/Artists">Artists</Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/Music">Music</Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  };