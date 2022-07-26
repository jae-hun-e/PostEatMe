import React, { useState } from 'react';
// import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from 'styled-components';
import reset from "styled-reset";
import Circle from '../assets/circle.svg';

const GlobalStyles = createGlobalStyle`
    ${reset}
    body {
        white-space: pre-line;
        text-align: center;
        background-color: #F2E5D5;
    }
`;

const Memo = props => {

    let [memo, setMemo] = useState('');

    function handleMemoInput(e) {
        setMemo(e.target.value);
    }

    const clickBtn = () => {
        alert('쪽지 달기 성공!');
        window.location.href="/";
    }

    return (
        <>
            <GlobalStyles />
            <Img src={Circle} />
            <Div>
                <Input 
                    onChange={e => handleMemoInput(e)}
                    type='text' 
                    placeholder='ㅇㅇ님께 적고 싶은 말' 
                    minLength={5} 
                    maxLength={40} 
                    title='5자 이상 40자 이내로 입력해주세요'
                    rows="5" cols="5"
                    style={{resize: 'none'}}
                />
            </Div>
            <div>{memo}</div>
            <br />
            <Btn onClick={clickBtn}>작성완료!</Btn>

            
        </>
    );
};

export default Memo;

const Input = styled.textarea`
    position: absolute;
    // display: block;
    margin: auto -87px;
    margin-top: -217px;

    padding-top: 40px;
    line-height: 50px;
    text-align: center;
    font-size: 14px;
    height: 130px;
    width: 170px;
    border-radius: 50%;
    overflow: scroll;
    border-style: none;
    font-family: 'SCDream';
    
    ::placeholder {
        color: rgb(195, 195, 195);
    }
`

const Img = styled.img`
    display: block;
    height: 362px;
    text-align: center;
    margin: auto;
    margin-top: -66px;
`

const Div = styled.div`
    // left: -30px;
`

const Btn = styled.button`
    margin-top: 17%;
    padding: 8px 16px;
    border-width: 1.6px;
    border-color: black;
    border-radius: 20px;
    background-color: #f0d596;
    font-size:18px;
    color: rgb(59, 59, 59);
    font-family: 'SCDream';
`