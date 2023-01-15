import React from 'react';

export const NavBar = () => {
    
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/"><img className="main-logo" src="./sources/ercf.png"></img></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/ERCF/About">About</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/ERCF/Artists">Artists</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/ERCF/Music">Music</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/ERCF/Contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  };