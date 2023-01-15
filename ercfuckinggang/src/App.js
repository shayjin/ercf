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

function GroupPic() {
  return (
    <>
      <img className="main-pic" src="./sources/group.png" />
      <img className='main-pic' src="./sources/group_black.png" />
      <img className='main-pic' src="./sources/group2.png" />
      <img className='main-pic' src="./sources/진동.png" />
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

  switch(window.location.pathname) {
    case "":
      comp = <Main />
      break
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Main />} />
          <Route path="/ERCF" element={<Main />} />
          <Route path="*" element={<p>Path not resolved</p>} />
          <Route path="/ERCF/Artists" element={<Artists />} />
          <Route path="/ERCF/Artist" element={<Artist />} />
          <Route path="/ERCF/Contact" element={<Contact />} />
          <Route path="/ERCF/Music" element={<Music />} />
          <Route path="/ERCF/Album" element={<Album />} />
          <Route path="/ERCF/About" element={<About />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
