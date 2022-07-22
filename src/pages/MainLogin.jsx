import React from 'react';
import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from 'styled-components';
import reset from "styled-reset";

const main = "POST-EAT\nME!";

const GlobalStyles = createGlobalStyle`
    ${reset}
    body {
        white-space: pre-line;
        text-align: center;
        background-color: #F2E5D5;
    }
`;

const MainLogin = () => {
    return (
        <>
            <GlobalStyles />
            <MainText>{main}</MainText>
            <br />
            <StartBtn style={{color : '#b1aea7'}}>START</StartBtn>
            <LoginTxt><Link to="/Login" style={{textDecoration:'none', color: '#4e4d4d'}}>로그인</Link></LoginTxt>
        </>
    )
};

export default MainLogin;

const MainText = styled.div`
    margin-top: 20%;
    font-size: 56px;
`

const StartBtn = styled.button`
    transition: 0.5s;
    margin-top: 6%;
    padding: 6px 20px;
    border-width: 1.6px;
    border-color: black;
    border-radius: 20px;
    background-color: #f0d596;
    font-size: 18px;
`

const LoginTxt = styled.p`
    margin-top: 2%;
    font-size: 14px;
`



