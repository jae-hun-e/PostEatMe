import React, { useState, useRef } from "react";
import styled from "styled-components";
import crl from "../assets/cereal.svg";

const main = "POST-EAT ME!";

const Login = () => {
    // TODO이름 전화번호 받아와서 post
    const [number, setNumber] = useState(2);
    const [scroll, setScroll] = useState(false);

    let [id, setId] = useState("");
    let [pw, setPw] = useState("");
    console.log(id);
    console.log(pw);

    function handleIdInput(e) {
        setId(e.target.value);
    }

    function handlePwInput(e) {
        setPw(e.target.value);
    }

    const onIncrease = () => {
        if (number > 0 && number < 10) setNumber(number + 1);
    };

    const onDecrease = () => {
        if (number > 2 && number < 11) setNumber(number - 1);
    };

    const copy = () => {
        const el = document.createElement("input");
        // el.value = window.location.href;
        // TODO 링크에 보내는 유저 정보 포함
        el.value = window.location.origin + "/memo";
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        alert("링크 복사 완료! 친구들에게 공유해보세요.");
        window.location.href = "/";
    };

    return (
        <div style={{ position: "fixed" }} class="div">
            <First className={scroll ? "active" : ""}>
                <Login1>{main}</Login1>
                <div>
                    <Login2>
                        <Btn
                            onClick={() => {
                                setScroll((scroll) => !scroll);
                            }}
                        >
                            로그인 / 회원가입
                        </Btn>
                    </Login2>
                    <Input
                        onChange={(e) => handleIdInput(e)}
                        type="text"
                        // class='id'
                        placeholder="이름"
                    />
                    <InputPw
                        onChange={(e) => handlePwInput(e)}
                        type="password"
                        // class='pw'
                        placeholder="전화번호"
                    />
                </div>
                <Img src={crl} />
            </First>
            <Second>
                <Main>
                    <Div>
                        <Min onClick={onDecrease}>-</Min>
                    </Div>
                    <Div>
                        <Num>{number} 명</Num>
                    </Div>
                    <Div>
                        <Plus onClick={onIncrease}>+</Plus>
                    </Div>
                </Main>
                <ShareBtn onClick={copy}>URL 공유하기</ShareBtn>
            </Second>
        </div>
    );
};

export default Login;

const Login1 = styled.div`
    margin-top: 140px;
    font-size: 28px;
    color: #ec7698;
    text-shadow: -2px 0 #000, 0 3px rgb(47, 47, 47), 3px 0 rgb(47, 47, 47), 0 -2px #000;
    font-family: "Forte";
`;

const Login2 = styled.h2`
    // margin-top: 4%;
`;

const Btn = styled.button`
    font-size: 16px;
    font-weight: bold;
    width: 200px;
    height: 28px;
    border-style: none;
    background-color: #f2e5d5;
    opacity: 0.5;
    font-family: "SCDream";
    textdecoration: none;
    color: #568c7d;

    &:active {
        opacity: 1;
    }
`;

const Input = styled.input`
    text-align: left;
    font-size: 14px;
    font-weight: bold;
    padding-left: 20px;
    height: 36px;
    width: 260px;
    margin-top: 12px;
    border-radius: 40px;
    border-style: solid;
    border-width: 1.6px;
    border-color: #898989;
    background-color: white;
    font-family: "SCDream";
`;

const InputPw = styled(Input)`
    margin-bottom: 100px;
`;

const Img = styled.img`
    width: 240px;
    position: relative;
    bottom: 0px;
`;

const First = styled.div`
    touch-action: none;

    &.active {
        margin-top: -600px;
        transition: 0.5s;
    }
`;

const Second = styled.div`
    width: 100vw;
`;

const Main = styled.div`
    margin-top: 20%;
`;

const Div = styled.div`
    display: inline-block;
    margin: 0 10px;
`;

const Min = styled.button`
    padding: 0%;
    font-size: 26px;
    color: black;
    text-align: center;
    line-height: 10px;
    height: 22px;
    width: 22px;
    background-color: #f2e5d5;
    border-radius: 50%;
    border-width: 1.6px;
    border-color: black;
`;

const Plus = styled(Min)``;

const Num = styled.p`
    font-size: 20px;
`;

const ShareBtn = styled.button`
    margin-top: 44%;
    text-align: center;
    color: rgb(79, 79, 79);
    font-weight: bold;
    font-size: 18px;
    height: 40px;
    width: 210px;
    background-color: #f0d596;
    border-radius: 20px;
    border-style: solid;
    border-width: 1.6px;
    border-color: rgb(79, 79, 79);
    font-family: "SCDream";
`;
