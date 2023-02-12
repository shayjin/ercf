import React from 'react';
import { NavBar } from './NavBar';
import {Link, Route, Routes, BrowserRouter } from 'react-router-dom';

export const Artists = () => {

    var artists = [
        {
            name: "마인크래프트고수",
            music: ["진동", "볼보이 파워", "진서", "KIK", "POM", "GANG", "JUCK"],
            since: "2013.10.05",
            position: "리더, 프로듀서"
        },
        {
            name: "Billy Boi",
            music: ["진동", "08Basick_Remix_Remix", "진서", "KIK", "POM", "GANG", "JUCK"],
            since: "2013.10.16",
            position: "래퍼, 디자이너"
        },
        {
            name: "Ballboy Da Mogi Killer",
            music: ["진동", "볼보이 파워", "진서", "KIK", "POM"],
            since: "2014.01.19",
            position: "래퍼, 스키터"
        },
        {
            name: "Mogi",
            music: ["진동", "KIK", "POM", "GANG"],
            since: "2014.02.07",
            position: "래퍼"
        },
        {
            name: "Shay Jin",
            music: ["진동", "볼보이_파워", "진서", "KIK", "POM", "GANG", "JUCK"],
            since: "2019.05.01",
            position: "래퍼"
        },
        {
            name: "MST",
            music: ["Cresent", "어쩔티비", "LaTale", "진서", "KIK"],
            since: "2021.08.16",
            position: "래퍼"
        },
        {
            name: "UnteIl",
            music: ["진서", "KIK"],
            since: "2022.06.22",
            position: "래퍼"
        },
        {
            name: "FluorMeme",
            music: ["Cresent", "어쩔티비", "LaTale", "KIK", "GANG"],
            since: "2023.01.03",
            position: "프로듀서"
        },
        {
            name: "Juts5Bell",
            music: [],
            since: "2023.01.26",
            position: "프로듀서"
        },
        {
            name: "언어장애",
            music: ["08Basick Remix Remix"],
            since: "2023.02.02",
            position: "래퍼"
        }
    ];

    var li = [];

    for (var i = 0; i < artists.length; i++) {
        var artist = artists[i];

        artist.picture = require("./sources/" + artist.name.replaceAll(" ", "_").toLowerCase() + ".png");
        li.push(
            <li>
                <Link className="viewProj" to="/Artist" state={{component: artist}}>
                    <button id="myBtn">
                        <img src={artist.picture}/>
                        <p>{artist.name}</p>
                    </button> 
                </Link>
            </li> 
        );
    }
    
    return (
        <>
            <NavBar />
            <div className="body">
                <ul className="artistUl">
                    {li}
                </ul>
            </div>
        </>

    )
};