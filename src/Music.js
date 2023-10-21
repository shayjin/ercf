import React from 'react';
import { NavBar } from './NavBar';
import {Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import ALBUMS from './DB/Albums';

export const Music = () => {
    var li = [];

    for (var i = 0; i < ALBUMS.length; i++) {
        var album = ALBUMS[i];

        album.picture = require("./sources/" + album.name.replaceAll(" ", "_").toLowerCase() + ".png");
        console.log(album.picture);
        if (album.name == "sagikun") album.picture = require("./sources/sagikun_album.png");
        if (album.name == "shawty!") album.picture = require("./sources/shawty.png");

        li.push(
            <li>
                <Link className="viewProj" to={`/ERCF/Album/${album.engName.replaceAll(" ", "_")}`}>
                    <button id="myBtn">
                        <img src={album.picture}/> 
                        <b><p>{album.name}</p></b>
                        <p>{album.artist}</p>
                        <p>{album.date} 발매</p>
                    </button> 
                </Link>
            </li>
        );
    }
    
    return (
        <>
            <NavBar />
            <div className="body" >
                <ul className='artistUl'>
                    {li}
                </ul>
            </div>
        </>

    )
};