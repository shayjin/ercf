import React from 'react';
import { useLocation } from 'react-router-dom'
import { NavBar } from './NavBar';
import {Link, Route, Routes, BrowserRouter } from 'react-router-dom';

export const Album = () => {
    var artists = [
        {
            name: "마인크래프트고수",
            music: ["진동", "볼보이 파워", "진서", "KIK", "POM", "GANG", "JUCK"],
            since: "2013.10.05",
            position: "리더, 프로듀서"
        },
        {
            name: "Billy Boi",
            music: ["진동", "진서", "KIK", "POM", "GANG"],
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
            music: ["진동", "볼보이 파워", "진서", "KIK", "POM", "GANG", "JUCK"],
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
            name: "Howard Kim",
            music: ["Cresent", "어쩔티비", "LaTale", "KIK", "GANG"],
            since: "2023.01.03",
            position: "프로듀서"
        }
    ];

    var artists = [
        {
            name: "마인크래프트고수",
            music: ["진동", "볼보이 파워", "진서", "KIK", "POM", "GANG", "JUCK"],
            since: "2013.10.05",
            position: "리더, 프로듀서"
        },
        {
            name: "Billy Boi",
            music: ["진동", "진서", "KIK", "POM", "GANG"],
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
            name: "Howard Kim",
            music: ["Cresent", "어쩔티비", "LaTale", "KIK", "GANG"],
            since: "2023.01.03",
            position: "프로듀서"
        }
    ];

    const location = useLocation()
    const album = location.state.component;
    var li = [];
    var index;
    const ercf = ["마인크래프트고수", "Billy Boi", "Ballboy Da Mogi Killer", "Mogi", "Shay Jin", "MST", "UnteIl", "Howard Kim"];
    
    for (var i = 0; i < album.songs.length; i++) {
        if (album.songs[i].producer.length > 0) {
            var xx = [];
            for (var k = 0; k < album.songs[i].producer.length; k++) {
                var producer = album.songs[i].producer[k];

                if (ercf.includes(producer)) {
                    index = -1;

                    for (var a = 0; artists.length; a++) {
                        if (artists[a].name == producer) {
                            index = a;
                            break;
                        }
                    }

                    if (k + 1 === album.songs[i].producer.length) xx.push(<Link className="viewProj" to="/artist" state={{component: artists[index]}}>{producer}</Link>);
                    else xx.push(<Link className="viewProj" to="/artist" state={{component: artists[index]}}>{producer}, </Link>);
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

                    for (var a = 0; artists.length; a++) {
                        if (artists[a].name == feature) {
                            index = a;
                            break;
                        }
                    }

                    if (j + 1 === album.songs[i].feature.length) x.push(<Link className="viewProj" to="/artist" state={{component: artists[index]}}>{feature}</Link>);
                    else x.push(<Link className="viewProj" to="/artist" state={{component: artists[index]}}>{feature}, </Link>);
                } else {
                    if (j + 1 === album.songs[i].feature.length) x.push(album.songs[i].feature[j]);
                    else x.push(album.songs[i].feature[j] + ", ");
                }
            }   

            li.push(
                <tr>
                    <td>{i+1}</td>
                    <td>{x})</td>
                    <td>{xx}</td>
                </tr>
            );
        }
    }

    var img = "./sources/" + album.name.replace(" ", "_") + ".png";

    var a = album.artist.split(", ");
    var artistArray = [];

    for (var b = 0; b < a.length; b++) {
        var artist = a[b];
        var ind = -1;

        for (var c = 0; c < artists.length; c++){
            if (artists[c].name == artist) {
                ind = c;
                break;
            }
        }

        if (ind !== -1) {
            artistArray.push(<Link className="viewProj" to="/artist" state={{component: artists[ind]}}>{artist}</Link>);
        } else {
            artistArray.push("hi");
        }

        if (b + 1 < a.length) {
            artistArray.push(", ");
        } 
    }
    
    return (
        <>
            <NavBar />
            <div className='artistBody_wrap'>

                <div className="album" >
                    <img src={img}/>
                    <p><b>[{album.type}] {album.name} - {artistArray}</b></p>
                    <p>Cover Design: {album.cover}</p>
                    <table>
                        <tr>
                            <th>#</th>
                            <th>제목</th>
                            <th>작/편곡</th>
                        </tr>
                        {li}
                    </table>
                </div>
            </div>
        </>

    )
};