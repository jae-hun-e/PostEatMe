import React from 'react';
import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from 'styled-components';
import reset from "styled-reset";
import Cake from '../assets/cake.svg';

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
            <StartBtn><Link to="/MainLogin" style={{textDecoration:'none', color: 'rgb(59, 59, 59)'}}>START</Link></StartBtn>
            <BtmBx><Img src={Cake} /> </BtmBx>
            
        </>
    )
}

export default Main;

const MainText = styled.div`
    margin-top: 30%;
    font-size: 58px;
    color: #EC7698;
    text-shadow: -2px 0 #000, 0 4px rgb(47, 47, 47), 4px 0 rgb(47, 47, 47), 0 -2px #000;
    font-family: 'Forte';
`

const StartBtn = styled.button`
transition: 0.5s;
width: 110px;
height: 40px;
margin-top: 2%;
padding: 6px 20px;
border-width: 1.6px;
border-color: black;
border-radius: 20px;
background-color: #f0d596;
font-size: 18px;
font-family: 'SCDream';
`

const Img = styled.img`
    margin-top: -21%;
    height: 210px;
`

const BtmBx = styled.div`
    background-color: #4F8275;
    margin-top: 39%;
    height: 130px;
    border-color: black;
    border-width: 10px;
`