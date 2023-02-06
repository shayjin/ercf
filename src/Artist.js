import React from 'react';
import { useLocation } from 'react-router-dom'
import { NavBar } from './NavBar';
import {Link, Route, Routes, BrowserRouter } from 'react-router-dom';

export const Artist = () => {

    const location = useLocation()
    const artist = location.state.component;
    console.log(artist);
    var li = [];

    var albums = [
        {
            name: "진동",
            artist: "Shay Jin & Billy Boi",
            date: "2023.02.??",
            type: "Mixtape",
            cover: "Billy Boi",
            mm: "마인크래프트고수",
            songs: [

            ]
        },
        {
            name: "08Basick Remix Remix",
            artist: "언어장애",
            date: "2023.02.02",
            type: "싱글",
            cover: "Billy Boi",
            mm: "Juts5Bell",
            songs: [
                {
                    name: "08Basick Remix Remix",
                    producer: ["TOIL"]
                }
            ]
        },
        {
            name: "Cresent",
            artist: "MST",
            date: "2022.04.08",
            type: "싱글",
            cover: "FluorMeme",
            mm: "FluorMeme",
            songs: [
                {
                    name: "Cresent",
                    producer: ["FluorMeme"]
                }
            ]
        },
        {
            name: "어쩔티비",
            artist: "MST",
            date: "2022.03.31",
            type: "싱글",
            cover: "FluorMeme",
            mm: "FluorMeme",
            songs: [
                {
                    name: "어쩔티비",
                    producer: ["FluorMeme"]
                }
            ]
        },
        {
            name: "LaTale",
            artist: "MST",
            date: "2022.01.28",
            type: "싱글",
            cover: "FluorMeme",
            mm: "FluorMeme",
            songs: [
                {
                    name: "LaTale",
                    producer: ["FluorMeme"]
                }
            ]
        },
        {
            name: "진서",
            artist: "Shay Ji & MST",
            date: "2021.08.16",
            type: "Mixtape",
            cover: "마인크래프트고수",
            mm: "마인크래프트고수",
            songs: [
                { name: "Bustdown!", producer: ["마인크래프트고수"] },
                { name: "기분조 은바람", producer: ["마인크래프트고수"], feature: ["Dok3"] },
                { name: "두진서 Freestyle", producer: ["마인크래프트고수"] },
                { name: "ruf", producer: ["마인크래프트고수"], feature: ["UnteIl"] },
                { name: "노인공격", producer: ["마인크래프트고수"], feature: ["Big anDre's Bo$$", "shinji", "Davy Jones"] },
                { name: "bbbp", producer: ["마인크래프트고수"], feature: ["Billy Boi"] },
                { name: "딕소스!", producer: ["마인크래프트고수"], feature: ["Ballboy Da Mogi Killer"] },
                { name: "신지혜 만날래!", producer: ["마인크래프트고수"], feature: ["김진성", "Fi$h"] }
            ]
        },
        {
            name: "볼보이 파워",
            artist: "Ballboy Da Mogi Killer",
            date: "2021.07.30",
            type: "Mixtape",
            cover: "마인크래프트고수",
            mm: "마인크래프트고수",
            songs: [
                { name: "No Cap", producer: ["Ballboy Da Mogi Killer"], feature: ["이수민"]},
                { name: "Don't Cross the Line", producer: ["Ballboy Da Mogi Killer"], feature: ["BJH Brother"] },
                { name: "Mogi Killer...", producer: ["Ballboy Da Mogi Killer"] },
                { name: "비둘기 Killer...", producer: ["Ballboy Da Mogi Killer"] },
                { name: "이원문ㅗ", producer: ["Ballboy Da Mogi Killer"], feature: ["BIG Naugty"] },
                { name: "잼민쓰", producer: ["Ballboy Da Mogi Killer"], feature: ["곽시후"] },
                { name: "내 친구 모기", producer: ["Ballboy Da Mogi Killer"] },
                { name: "도림사 & 까마귀", producer: ["Ballboy Da Mogi Killer"] },
                { name: "모기에게... pt. 2 (Skit)", producer: ["마인크래프트고수"] },
                { name: "빼재순", producer: ["Ballboy Da Mogi Killer"], feature: ["Shay Jin"] }
            ]
        },
        {
            name: "KIK",
            artist: "Shay Jin & Billy Boi",
            date: "2021.02.26",
            type: "Mixtape",
            cover: "Billy Boi",
            mm: "마인크래프트고수",
            songs: [
                { name: "Intro", producer: ["마인크래프트고수"], feature: ["SCJ Boi"] },
                { name: "100원 자르는 사나이", producer: ["마인크래프트고수"], feature: ["MST"] },
                { name: "의리없는 새기들", producer: ["마인크래프트고수"] },
                { name: "Lim Jaesick, the Truck Racer", producer: ["마인크래프트고수"] },
                { name: "Lee Yeseul, the Happy Church Minister Clone", producer: ["마인크래프트고수"], feature: ["UnteIl", "Big anDre's Bo$$"] },
                { name: "모기에게... (Skit)", producer: ["마인크래프트고수"], feature: ["Ballboy Da Mogi Killer"] },
                { name: "기본기 Ruler G", producer: ["마인크래프트고수"], feature: ["Ballboy Da Mogi Killer"] },
                { name: "이원문 시발새끼", producer: ["마인크래프트고수"], feature: ["BIG Naugty", "Profe Morri$"] },
                { name: "대가대 셀카 1위", producer: ["마인크래프트고수"], feature: ["Mogi", "Fi$h"] },
                { name: "벙어리 새기", producer: ["마인크래프트고수"], feature: ["Mogi"] },
                { name: "Unknown E.R. Gamer", producer: ["마인크래프트고수"], feature: ["shinji", "Fi$h"] },
                { name: "김재환 타법 (Skit)", producer: ["마인크래프트고수"] },
                { name: "BGH Father Remix", producer: ["마인크래프트고수"], feature: ["Fi$h", "MST", "Lil Arj", "Ballboy Da Mogi Killer"] },
                { name: "Outro", producer: ["FluorMeme"] }
            ]
        },
        {
            name: "POM",
            artist: "Shay Jin & Billy Boi",
            date: "2020.06.17",
            type: "Mixtape",
            cover: "Billy Boi",
            mm: "마인크래프트고수",
            songs: [
                { name: "SAVE", producer: ["마인크래프트고수"] },
                { name: "우상의우상의", producer: ["마인크래프트고수"] },
                { name: "유튜브 전사들", producer: ["마인크래프트고수"] },
                { name: "POM Skit (Skit)", producer: ["마인크래프트고수"], feature: ["BIG Naugty"] },
                { name: "Hello, My Name is...", producer: ["마인크래프트고수"], feature: ["Money McDermott"] },
                { name: "15분", producer: ["마인크래프트고수"], feature: ["Fi$h", "shinji"] },
                { name: "ERCF Freestyle", producer: ["마인크래프트고수"], feature: ["Mogi", "Ballboy Da Mogi Killer"] },
                { name: "Thank You!", producer: ["마인크래프트고수"], feature: ["Mogi"] }
            ]
        },
        {
            name: "GANG",
            artist: "Shay Jin & Billy Boi",
            date: "2020.05.06",
            type: "Mixtape",
            cover: "Billy Boi",
            mm: "마인크래프트고수",
            songs: [
                { name: "디디오엔지", producer: ["마인크래프트고수"] },
                { name: "BGH Father", producer: ["마인크래프트고수"], feature: ["Fi$h"] },
                { name: "Sip", producer: ["FluorMeme"], feature: ["Big anDre's Bo$$"] },
                { name: "20.5학번 Freestyle", producer: ["마인크래프트고수"] },
                { name: "rod", producer: ["마인크래프트고수"], feature: ["Mogi"] },
                { name: "돼지흥분제", producer: ["마인크래프트고수"] },
                { name: "삭베아", producer: ["마인크래프트고수"] }
            ]
        },
        {
            name: "JUCK",
            artist: "Shay Jin",
            date: "2019.12.13",
            type: "Mixtape",
            cover: "Billy Boi",
            mm: "마인크래프트고수",
            songs: [
                { name: "Abyss", producer: ["마인크래프트고수"], feature: ["Profe Morris", "Fi$h"] },
                { name: "공고문", producer: ["마인크래프트고수"], feature: ["shinji"] },
                { name: "힙합 전사들", producer: ["마인크래프트고수"], feature: ["Profe Morri$", "ViggyMcPiggy"] },
                { name: "마인크래프트 Freestyle", producer: ["마인크래프트고수"], feature: ["Lil Sillyman", "Money McDermott"] },
                { name: "Juck Fose!", producer: ["마인크래프트고수"], feature: ["Mijo", "Fi$h"] },
                { name: "멈블랩", producer: ["마인크래프트고수"], feature: ["Fi$h", "Profe Morri$"] },
                { name: "181230", producer: ["마인크래프트고수"], feature: ["Lasaga Boi", "Mark Kim", "Big anDre's Bo$$"] },
                { name: "Trying to...", producer: ["마인크래프트고수"], feature: ["Fi$h"] },
                { name: "#530", producer: ["마인크래프트고수"], feature: ["Lasaga Boi", "Big anDre's Bo$$"] },
                { name: "Juck Fose 2", producer: ["마인크래프트고수"], feature: ["Mijo", "Fi$h"] },
                { name: "Juck Fose 3", producer: ["마인크래프트고수"], feature: ["Mijo", "Fi$h", "Profe Morri$", "Money McDermott"] },
                { name: "gasssss", producer: ["마인크래프트고수"], feature: ["ViggyMcPiggy", "Lasaga Boi"] },
            ]
        },
    ];

    for (var i = 0; i < artist.music.length; i++) {
        var album = artist.music[i];

        var index = -1;

        for (var j = 0; j < albums.length; j++) {
            if (album === albums[j].name) {
                index = j;
                break;
            }
        }

        var img = require("./sources/" + album.replaceAll(" ", "_").toLowerCase() + ".png");

        li.push(
            <Link className="viewProj" to="/Album" state={{component: albums[index]}}>
              <img src={img}/>
            </Link>
        );
    }



    artist.picture = require("./sources/" + artist.name.replaceAll(" ", "_").toLowerCase() + ".png");
    
    
    return (
        <>
            <NavBar />
            <div className='artistBody_wrap'>

                <div className="artistBody" >
                    <img src={artist.picture}/>
                    <div className='artistDes'>
                        <p><b>이름: </b>{artist.name}</p>
                        <p><b>포지션:</b> {artist.position}</p>
                        <p><b>ERCF Since:</b> {artist.since}</p>
                    </div>
 
                </div>

                <div className="artistBody2">
                    <p><b>참여앨범:</b></p>
                    <p className="albums">
                        {li}
                    </p>
                </div>

            </div>
        </>

    )
};