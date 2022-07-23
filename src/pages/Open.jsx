import React from 'react';
import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from 'styled-components';
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    body {
        white-space: pre-line;
        text-align: center;
        background-color: #F2E5D5;
    }
`;

const Open = () => {
    const clickBtn = () => {
        alert('쪽지 달기 성공!');
        window.location.href="/";
    }

    return (
        <>
            <GlobalStyles />
            <MainTxt>OOO님 편지 확인</MainTxt>
            <SubTxt>( 디저트들을 눌러보세요! )</SubTxt>
            
        </>
    );
};

export default Open;

const MainTxt = styled.h1`
    font-family: 'SCDream';
    font-size: 20px;
    margin-top: 44vh;
`

const SubTxt = styled.p`
    font-family: 'SCDream';
    font-size: 12px;
    color: #568C7D;
    margin-top: 10px;
`