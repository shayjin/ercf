import React from 'react';
import { useLocation } from 'react-router-dom'
import { NavBar } from './NavBar';
import {Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import ALBUMS from './DB/Albums';
import ARTISTS from './DB/Artists';
import JUNIOR_ARTISTS from './DB/JuniorArtists';

export const Artist = () => {
    var artist;
    var url = window.location.href;
    url = url.substring(url.lastIndexOf("/") + 1).replace("_", " ");
    console.log(url);
    if (url === "%EB%A7%88%EC%9D%B8%ED%81%AC%EB%9E%98%ED%94%84%ED%8A%B8%EA%B3%A0%EC%88%98") {
        url = "마인크래프트고수";
    }

    if (url === "%EA%B9%80%EC%A7%84%EC%84%B1") {
        url = "김진성";
    }

    for (var art of ARTISTS) {
        if (art.name === url) {
            artist = art;
            break;
        }
    }

    for (var art of JUNIOR_ARTISTS) {
        if (art.name === url) {
            artist = art;
            break;
        }
    }

    var li = [];

    console.log(artist);

    for (var i = 0; i < artist.music.length; i++) {
        var album = artist.music[i];

        var index = -1;

        for (var j = 0; j < ALBUMS.length; j++) {
            if (album === ALBUMS[j].name) {
                index = j;
                break;
            }
        }

        var img = require("./sources/" + album.replaceAll(" ", "_").toLowerCase() + ".png");
        if (album == "sagikun") img = require("./sources/sagikun_album.png");
        console.log(index);
        li.push(
            <Link className="viewProj" to={`/ERCF/Album/${ALBUMS[index].engName.replaceAll(" ", "_")}`}>
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