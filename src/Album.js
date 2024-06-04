import React from 'react';
import { useLocation } from 'react-router-dom'
import { NavBar } from './NavBar';
import {Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import ARTISTS from './DB/Artists';
import JUNIOR_ARTISTS from './DB/JuniorArtists';
import ALBUMS from './DB/Albums';
import ercf from './DB/ercf';

export const Album = () => {
    var album;
    var url = window.location.href;
    url = url.substring(url.lastIndexOf("/") + 1).replaceAll("_", " ");
    console.log(url);

    if (url === "%E3%81%AF%E3%82%89%E3%81%90%E3%82%8D") {
        url = "はらぐろ";
    }

    for (var alb of ALBUMS) {
        if (alb.engName === url) {
            album = alb;
            break;
        }
    }

    var li = [];
    var index;
    var coverInd;

    for (var a = 0; a < ARTISTS.length; a++) {
        if (ARTISTS[a].name === album.cover) {
            coverInd = a;
            break;
        }
    }

    for (var a = 0; a < JUNIOR_ARTISTS.length; a++) {
        if (JUNIOR_ARTISTS[a].name === album.cover) {
            coverInd = a;
            break;
        }
    }
    
    for (var i = 0; i < album.songs.length; i++) {
        if (album.songs[i].producer.length > 0) {
            var xx = [];
            for (var k = 0; k < album.songs[i].producer.length; k++) {
                var producer = album.songs[i].producer[k];

                if (ercf.includes(producer)) {
                    index = -1;

                    for (var a = 0; a < ARTISTS.length; a++) {
                        if (ARTISTS[a].name == producer) {
                            index = a;
                            if (k + 1 === album.songs[i].producer.length) xx.push(<Link className="viewProj" to={`/ERCF/Artist/${ARTISTS[index].name.replace(" ", "_")}`}>{producer}</Link>);
                            else xx.push(<Link className="viewProj" to={`/ERCF/Artist/${ARTISTS[index].name.replace(" ", "_")}`}>{producer}, </Link>);
                            break;
                        }
                    }

                    for (var a = 0; a < JUNIOR_ARTISTS.length; a++) {
                        if (JUNIOR_ARTISTS[a].name == producer) {
                            index = a;
                            if (k + 1 === album.songs[i].producer.length) xx.push(<Link className="viewProj" to={`/ERCF/Artist/${JUNIOR_ARTISTS[index].name.replace(" ", "_")}`}>{producer}</Link>);
                            else xx.push(<Link className="viewProj" to={`/ERCF/Artist/${JUNIOR_ARTISTS[index].name.replace(" ", "_")}`}>{producer}, </Link>);
                            break;
                        }
                    }

                
                } else {
                    xx.push(album.songs[i].producer);
                }
            }
        }
        
        if (!album.songs[i].feature) {
            li.push(
                <tr>
                    <td>{i+1}</td>
                    <td>{album.songs[i].name}</td>
                    <td>{xx}</td>
                </tr>
            );
        } else {
            var features = album.songs[i].feature;
            
            var x = [];
            x.push(album.songs[i].name + " (Feat. ");
            
            for (var j = 0; j < album.songs[i].feature.length; j++) {
                var feature =  album.songs[i].feature[j];

                if (ercf.includes(feature)) {
                    index = -1;

                    for (var a = 0; a < ARTISTS.length; a++) {
                        if (ARTISTS[a].name == feature) {
                            index = a;
                            if (j + 1 === album.songs[i].feature.length) x.push(<Link className="viewProj" to={`/ERCF/Artist/${ARTISTS[index].name.replace(" ", "_")}`}>{feature}</Link>);
                            else x.push(<Link className="viewProj" to={`/ERCF/Artist/${ARTISTS[index].name.replace(" ", "_")}`}>{feature}, </Link>);
                            break;
                        }
                    }

                    for (var a = 0; a < JUNIOR_ARTISTS.length; a++) {
                        if (JUNIOR_ARTISTS[a].name == feature) {
                            index = a;
                            if (j + 1 === album.songs[i].feature.length) x.push(<Link className="viewProj" to={`/ERCF/Artist/${JUNIOR_ARTISTS[index].name.replace(" ", "_")}`}>{feature}</Link>);
                            else x.push(<Link className="viewProj" to={`/ERCF/Artist/${JUNIOR_ARTISTS[index].name.replace(" ", "_")}`}>{feature}, </Link>);
                            break;
                        }
                    }

                    
                } else {
                    if (j + 1 === album.songs[i].feature.length) x.push(album.songs[i].feature[j]);
                    else x.push(album.songs[i].feature[j] + ", ");
                }
            }   

            x.push(')');

            li.push(
                <tr>
                    <td>{i+1}</td>
                    <td>{x}</td>
                    <td>{xx}</td>
                </tr>
            );
        }
    }

    var img = require("./sources/" + album.name.replaceAll(" ", "_").toLowerCase() + ".png");

    if (album.name == "sagikun") img = require("./sources/sagikun_album.png");

    var a = album.artist.split(" & ");
    var artistArray = [];


    for (var b = 0; b < a.length; b++) {
        var artist = a[b];
        var ind = -1;

        for (var c = 0; c < ARTISTS.length; c++){
            if (ARTISTS[c].name == artist) {
                ind = c;
                artistArray.push(<Link className="viewProj" to={`/ERCF/Artist/${ARTISTS[ind].name.replace(" ", "_")}`}>{artist}</Link>);
                break;
            }
        }

        for (var c = 0; c < JUNIOR_ARTISTS.length; c++){
            if (JUNIOR_ARTISTS[c].name == artist) {
                ind = c;
                artistArray.push(<Link className="viewProj" to={`/ERCF/Artist/${JUNIOR_ARTISTS[ind].name.replace(" ", "_")}`}>{artist}</Link>);
                break;
            }
        }

        if (ind === -1) {
            artistArray.push(artist);
        }

        if (b + 1 < a.length) {
            artistArray.push(" & ");
        } 
    }

    var cover = [];

    if (ercf.includes(album.cover)) {
        for (var index = 0; index < ARTISTS.length; index++) {
            var a = ARTISTS[index];
            console.log(a.name);
            if (a.name === album.cover) {
                cover.push(<Link className="viewProj" to={`/ERCF/Artist/${ARTISTS[index].name.replace(" ", "_")}`} >{album.cover}</Link>);
                break;
            }
        }

        for (var index = 0; index < JUNIOR_ARTISTS.length; index++) {
            var a = JUNIOR_ARTISTS[index];
            if (a.name === album.cover) {
                cover.push(<Link className="viewProj" to={`/ERCF/Artist/${JUNIOR_ARTISTS[index].name.replace(" ", "_")}`} >{album.cover}</Link>);
                break;
            }
        }
        
    } else {
        cover.push(<p>Cover Design: {album.cover}</p>);
    }
    
    return (
        <>
            <NavBar />
            <div className='artistBody_wrap'>

                <div className="album" >
                    <img src={img}/>
                    <p><b>[{album.type}] {album.name} - {artistArray} ({album.date})</b></p>
                    <table>
                        <tr>
                            <th>#</th>
                            <th>제목</th>
                            <th>작곡/편곡</th>
                        </tr>
                        {li}
                    </table>
                </div>
            </div>
            <div className='body2'>
                <h3>Credits:</h3>
                <p><b>Cover Design:</b> {album.cover} <br/> <b>Mixing:</b> {album.mix} <br/> <b>Mastering:</b> {album.master}</p>
            </div>
        </>

    )
};