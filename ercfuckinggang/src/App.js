import logo from './logo.svg';
import { NavBar } from "./NavBar";
import { Artists } from "./Artists";
import { Contact } from "./Contact";
import { Artist } from "./Artist";
import { Music } from "./Music";
import { Album } from "./Album";
import { About } from "./About";
import './App.css';
import {Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import c from './crescent.jpeg';

function GroupPic() {
  return (
    <>
      <img className="main-pic" src={require("./sources/group.png")} />
      <img className='main-pic' src={require("./sources/group_black.png")} />
      <img className='main-pic' src={require("./sources/group2.png")} />
      <img className='main-pic' src={require("./sources/진동.png")} />
    </>
  );
}

function Main() {
  return (
    <>
      <NavBar></NavBar>
      <GroupPic/>
    </>
  );
}

function App() {
  let comp = window.location.pathname;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Main />} />
          <Route path="/ERCF" element={<Main />} />
          <Route path="*" element={<p>Path not resolved</p>} />
          <Route path="/Artists" element={<Artists />} />
          <Route path="/Artist" element={<Artist />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Music" element={<Music />} />
          <Route path="/Album" element={<Album />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
