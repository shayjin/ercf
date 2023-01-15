import React from 'react';
import { NavBar } from './NavBar';

export const About = () => {
    
    return (
        <>
            <NavBar />
            <div className="body2" >
                <img className="main-pic" src={require("./sources/ercf_bg.png")} />
                <h3>ERCF</h3>
                <p>2013년 10월 5일에 설립된 대한민국의 힙합 크루이다.</p>
                <ul className="links">
                    <li><a href="https://www.instagram.com/ercf_gang/" target="_blank">인스타그램</a></li>
                    <li><a href="https://namu.wiki/w/%EC%9D%98%EB%A6%AC%EC%B9%B4%ED%8E%98" target="_blank">나무위키</a></li>
                    <li><a href="https://github.com/shayjin/ERCF" target="_blank">깃허브</a></li>
                </ul>
            </div>
        </>

    )
};