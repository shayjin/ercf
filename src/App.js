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
          <img className="main-pic" src={require("./sources/ercfuckingang.png")} />
    </>
  );
}

function Main() {
  return (
    <>
      <NavBar></NavBar>
      <GroupPic/>
      <div className="body2" >
          <h3>의리카페</h3>
          <p>안녕하세요, 의리카페입니다. 저희는 대구수성초등학교에서 2013년 10월 5일에 친목 목적으로 시작한 네이버카페이고, 2019년 5월 1일에 힙합크루로 전향하였습니다. 
            이후에도 여러 아티스트들을 영입하고, 협업하며 많은 앨범들을 냈습니다.
            만일 저희 음악을 듣고 함께 활동하고 싶으신 분이 계시다면 언제든지 연락 주시기 바랍니다 (인스타그램: <a href="https://www.instagram.com/ercf_gang/" target="_blank">@ercfgang</a>). 
            실력 상관없이 열정만 있으면 모두 환영입니다!

          </p>

          <h3>소속 아티스트</h3>
          <ul className="links">
              <li><a>Shay Jin</a></li>
              <li><a>Billy Boi</a></li>
              <li><a>sagikun</a></li>
              <li><a>Mogi</a></li>
              <li><a>MST</a></li>
              <li><a>UnteIl</a></li>
              <li><a>BIG Naugty</a></li>
              <li><a>Just5Bell</a></li>
              <li><a>unujangay</a></li>
              <li><a>KESH B</a></li>
              <li><a>김진성</a></li>
              <li><a>gibongi</a></li>
          </ul>
          <h3>연락처</h3>
          <p>Email: ercfgang@gmail.com <br/> Instagram: @ercfgang</p>
      </div>

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
