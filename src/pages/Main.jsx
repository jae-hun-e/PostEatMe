import React from 'react';
import { Link } from "react-router-dom";
import "/Users/choiyun/post_eat_me/src/pages.css"

const main = "POST-EAT\nME!";
const Main = () => {
    return (
        <>
            <div class="mainText">{main}</div>
            <button class="startBtn">
                <Link to="/MainLogin" style={{textDecoration: 'none', color: 'black', backgroundColor: '#f0d596'}}>START</Link>
            </button>
            <div class="image"></div>
        </>
    )
};

export default Main;