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

    const ClickBtn = () => {
        const btn1 = document.getElementById('btn1');
        const btn2 = document.getElementById('btn2');
        btn2.style.opacity = "1";
        btn1.style.color = 'gray';

    }

    return (
        <>
            <GlobalStyles />
            <MainText>{main}</MainText>
            <br />
            <StartBtn id='btn1' onClick={ClickBtn} style={{color: 'rgb(59, 59, 59)'}}>START</StartBtn>
            <br />
            <MemoBtn id='btn2' style={{color: 'rgb(59, 59, 59)'}}><Link to="/Login" style={{textDecoration:'none', color: 'rgb(59, 59, 59)'}}>편지 보러가기!</Link></MemoBtn>
            <BtmBx><Img src={Cake} /> </BtmBx>
        </>
    )
}

export default Main;

const MainText = styled.div`
    margin-top: 26%;
    font-size: 58px;
    color: #EC7698;
    text-shadow: -2px 0 #000, 0 4px rgb(47, 47, 47), 4px 0 rgb(47, 47, 47), 0 -2px #000;
    font-family: 'Forte';
`

const StartBtn = styled.button`
    transition: 0.5s;
    width: 110px;
    height: 40px;
    margin-top: -4%;
    padding: 6px 20px;
    border-width: 1.6px;
    border-color: black;
    border-radius: 20px;
    background-color: #f0d596;
    font-size: 18px;
    font-family: 'SCDream';
`
const MemoBtn = styled.button`
    width: 170px;
    height: 40px;
    margin-top: 4%;
    padding: 6px 20px;
    border-width: 1.6px;
    border-color: black;
    border-radius: 20px;
    background-color: #f0d596;
    font-size: 18px;
    font-family: 'SCDream';
    opacity: 0;
`

const Img = styled.img`
    margin-top: -30%;
    height: 210px;
`

const BtmBx = styled.div`
    background-color: #4F8275;
    margin-top: 36%;
    height: 150px;
    border-color: black;
    border-width: 10px;
`