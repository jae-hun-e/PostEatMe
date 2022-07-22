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

const Memo = () => {
    const clickBtn = () => {
        alert('쪽지 달기 성공!');
        window.location.href="/";
    }

    return (
        <>
            <GlobalStyles />
            <Input type='text' 
            placeholder='ㅇㅇ님께 적고 싶은 말' 
            minLength={5} 
            maxLength={40} 
            title='5자 이상 40자 이내로 입력해주세요'
            rows="5" cols="5"/>
            <br />
            <Btn onClick={clickBtn}>POST - EAT !</Btn>

            
        </>
    );
};

export default Memo;

const Input = styled.textarea`
    position: block;
    padding-top: 40px;
    line-height: 50px;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    margin-top: 16%;
    height: 180px;
    width: 220px;
    border-radius: 50%;
    overflow: scroll;
    border-style: none;
`

const Btn = styled.button`
    margin-top: 10%;
    padding: 6px 20px;
    border-width: 1.4px;
    border-color: black;
    border-radius: 20px;
    background-color: #f0d596;
    font-size: 14px;
    font-weight: bold;
    color: black;
`