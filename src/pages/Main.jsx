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

const Main = () => {

    return (
        <>
            <GlobalStyles />
            <MainText>{main}</MainText>
            <br />
            <StartBtn><Link to="/MainLogin" style={{textDecoration:'none', color: 'black'}}>START</Link></StartBtn>
        </>
    )
}

export default Main;

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