import React from 'react';
import { Link } from "react-router-dom";
import "/Users/choiyun/post_eat_me/src/pages.css"

const main = "POST-EAT ME!";
const Login = () => {
    return (
        <div>
            <div class="login1">{main}</div>
            <h2 class="login2">
                <Link to="/Memo" style={{textDecoration: 'none', color: '#568C7D'}}>로그인</Link>
            </h2>
            <div>
                <input type='text' id='id' name='id' placeholder='이름'/>
            </div>
            <div>
                <input type='password' id='password' name='password' placeholder='전화번호'/>
            </div>
            <div><button id='loginLink' style={{backgroundColor:'#457ABF'}}>facebook으로 로그인</button></div>
            <div><button id='loginLink' style={{backgroundColor:'#D94141'}}>google로 로그인</button></div>
            <div><button id='loginLink' style={{backgroundColor:'#6CBF45'}}>네이버로 로그인</button></div>
            <div><button id='loginLink' style={{backgroundColor:'#F2D027'}}>카카오로 로그인</button></div>
        </div>
    )
};

export default Login;