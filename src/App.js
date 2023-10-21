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

  var support = [];
  var supportPic = [
    "rokmc", "army", "airforce", "samsung", "39", "expedia", "징기스", 
    "shinhan", "한가람","comsem", "osu", "kmu",  "dcu", "ytu", "dsu",  
    "영공", "경북", "oohs", "황금", "덕화", '수성', '교회', "마차이", "테트리스"
  ];

  for (var i = 0; i < supportPic.length; i++) {
    var pic = require("./sources/support/" + supportPic[i] + ".png");
    support.push(<img src={pic} />)
  }

  /*

        <img className="namu" src={require("./sources/namu.png")} />
      <div className='support'>
        {support}
      </div>
    */

  return (
    <>
          <img className="main-pic" src={require("./sources/group.png")} />
          <img className="main-pic" src={require("./sources/billy_boi_state_university.png")} />
          <img className="history" src={require("./sources/history1.png")} />
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
          <Route path="/ERCF/Artists" element={<Artists />} />
          <Route path="/ERCF/Artist/:id" element={<Artist />} />
          <Route path="/ERCF/Contact" element={<Contact />} />
          <Route path="/ERCF/Music" element={<Music />} />
          <Route path="/ERCF/Album/:id" element={<Album />} />
          <Route path="/ERCF/About" element={<About />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
