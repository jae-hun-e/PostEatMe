import React, {useState, useRef} from 'react';
import { Link } from "react-router-dom";
import { CopyToClipboard } from 'react-copy-to-clipboard';
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

const Share = () => {
    const [number, setNumber] = useState(2);

    const onIncrease = () => {
        if (number>0 && number<10)
            setNumber(number+1);
    }

    const onDecrease = () => {
        if (number>2 && number<11)
            setNumber(number-1);
    }

    const copy = () => {
        const el = document.createElement('input');
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        alert("링크 복사 완료! 친구들에게 공유해보세요.");
    }

    return (
        <>
            <GlobalStyles />
            <Main>
                <Div><Min onClick={onDecrease}>-</Min></Div>
                <Div><Num>{number} 명</Num></Div>
                <Div><Plus onClick={onIncrease}>+</Plus></Div>
            </Main>
            <Txt>몇 명에게 쪽지를 받고 싶은지 정해보세요!</Txt>
            <Txt>최소 2명, 최대 10명까지 가능합니다.</Txt>
            <ShareBtn onClick={copy}>공유하기</ShareBtn>
        </>
    );
};

export default Share;

const Main = styled.div`
    margin-top: 50%;
`

const Div = styled.div`
    display: inline-block;
    margin : 0 10px;
`

const Min = styled.button`
    padding: 0%;
    font-size: 26px;
    color: black;
    text-align: center;
    line-height: 10px;
    height: 26px;
    width: 26px;
    background-color: #F2E5D5;
    border-radius: 50%;
    border-width: 1.6px;
    border-color: black;
`

const Plus = styled(Min)`
`

const Num = styled.p`
    font-size: 26px;
`

const Txt = styled.div`
    font-size: 14px;
    color: #b1aea7;
    margin-top: 4%;
`

const ShareBtn = styled.button`
    margin-top: 30%;
    text-align: center;
    color: black;
    font-weight: bold;
    font-size: 20px;
    height: 44px;
    width: 220px;
    background-color: #f0d596;
    border-radius: 20px;
    border-style: solid;
    border-width: 1.6px;
`