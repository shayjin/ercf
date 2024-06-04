import React from 'react';
import { NavBar } from './NavBar';
import {Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import ARTISTS from './DB/Artists';
import JUNIOR_ARTISTS from './DB/JuniorArtists';

export const Artists = () => {
    var li = [];
    var li2 = [];

    for (var i = 0; i < ARTISTS.length; i++) {
        var artist = ARTISTS[i];

        artist.picture = require("./sources/" + artist.name.replaceAll(" ", "_").toLowerCase() + ".png");
        li.push(
            <li>
                <Link className="viewProj" to={`/ERCF/Artist/${artist.name.replaceAll(" ","_")}`}>
                    <button id="myBtn">
                        <img src={artist.picture}/>
                        <p>{artist.name}</p>
                    </button> 
                </Link>
            </li> 
        );
    }

    for (var i = 0; i < JUNIOR_ARTISTS.length; i++) {
        var artist = JUNIOR_ARTISTS[i];

        artist.picture = require("./sources/" + artist.name.replaceAll(" ", "_").toLowerCase() + ".png");
        li2.push(
            <li>
                <Link className="viewProj" to={`/ERCF/Artist/${artist.name.replaceAll(" ","_")}`}>
                    <button id="myBtn">
                        <img src={artist.picture}/>
                        <p>{artist.name}</p>
                    </button> 
                </Link>
            </li> 
        );
    }

    /*
                    <h3 className='ercfTitle'>ERCF 주니어스</h3>
                <ul className="artistUl">
                    {li2}
                </ul>
                */
    
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