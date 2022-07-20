import React from 'react';
import { Link } from "react-router-dom";
import "/Users/choiyun/post_eat_me/src/pages.css"

const main = "POST-EAT\nME!";
const MainLogin = () => {
    return (
        <div>
            <div class="mainText">{main}</div>
            <button class="startBtn" style={{color : '#b1aea7'}}>START</button>
            <div class="loginText"><Link to="/Login" class="loginText">로그인</Link></div>
            <div class="image"></div>
        </div>
    )
};

export default MainLogin;