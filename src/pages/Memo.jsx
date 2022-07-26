import React from "react";
import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Circle from "../assets/circle.svg";

const Memo = () => {
    // TODO URL 파싱해서
    //TODO memo 내용 받아서
    // TODO 해당 유저테이블에 정보 넘기기

    const clickBtn = () => {
        alert("쪽지 달기 성공!");
        window.location.href = "/";
    };

    return (
        <>
            <Img src={Circle} />
            <Div>
                <Input
                    type="text"
                    placeholder="ㅇㅇ님께 적고 싶은 말"
                    minLength={5}
                    maxLength={40}
                    title="5자 이상 40자 이내로 입력해주세요"
                    rows="5"
                    cols="5"
                />
            </Div>
            <br />
            <Btn onClick={clickBtn}>작성완료!</Btn>
        </>
    );
};

export default Memo;

const Img = styled.img`
    display: block;
    height: 362px;
    text-align: center;
    margin: auto;
    margin-top: -66px;
`;

const Div = styled.div`
    // left: -30px;
`;

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
    font-family: "SCDream";
    ::placeholder {
        color: rgb(195, 195, 195);
    }
`;

const Btn = styled.button`
    margin-top: 17%;
    padding: 8px 16px;
    border-width: 1.6px;
    border-color: black;
    border-radius: 20px;
    background-color: #f0d596;
    font-size: 18px;
    color: rgb(59, 59, 59);
    font-family: "SCDream";
`;
