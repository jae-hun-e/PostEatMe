import { isValidInputTimeValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from 'styled-components';
import reset from "styled-reset";

const main = "POST-EAT ME!";

const GlobalStyles = createGlobalStyle`
    ${reset}
    body {
        white-space: pre-line;
        text-align: center;
        background-color: #F2E5D5;
    }
`;

const Login = () => {


    return (
        <>
            <GlobalStyles />
            <Login1>{main}</Login1>
            <form>
                <Login2>
                    <Btn><Link to="/Share" style={{textDecoration:"none", color: "#568C7D"}}>로그인 및 회원가입</Link></Btn>
                </Login2>
                <Input type='text' class='id' placeholder='이름'/>
                <InputPw type='password' class='pw' placeholder='전화번호'/>
            </form>
            {/* <div><LoginLink style={{backgroundColor:'#457ABF'}}>facebook으로 로그인</LoginLink></div>
            <div><LoginLink style={{backgroundColor:'#D94141'}}>google로 로그인</LoginLink></div>
            <div><LoginLink style={{backgroundColor:'#6CBF45'}}>네이버로 로그인</LoginLink></div>
            <div><LoginLink style={{backgroundColor:'#F2D027'}}>카카오로 로그인</LoginLink></div> */}
        </>
    )
};

export default Login;

const Login1 = styled.div`
    margin-top: 28%;
    font-size: 26px;
    color: #EC7698;
    text-shadow: -2px 0 #000, 0 3px rgb(47, 47, 47), 3px 0 rgb(47, 47, 47), 0 -2px #000;
    font-family: 'Forte';
`

const Login2 = styled.h2`
    margin-top: 4%;
    font-size: 18px;
`

const Btn = styled.button`
    font-size: 16px;
    font-weight: bold;
    width: 160px;
    height: 28px;
    border-width: 1.2px;
    border-color: black;
    border-radius: 20px;
    background-color: #f0d596;
    opacity: 0.3;
    font-family: 'SCDream';

    &:active {
        background-color: #f0d596;
        opacity: 1;
    }
`

const Input = styled.input`
    text-align:left;
    font-size: 14px;
    font-weight: bold;
    padding-left: 14px;
    height: 32px;
    width: 250px;
    margin-top : 4%;
    border-radius: 16px;
    border-style: solid;
    border-width: 1.6px;
    border-color: #898989;
    background-color: white;
    font-family: 'SCDream';
`

const InputPw = styled(Input)`
    margin-bottom: 100px;
`

// const LoginLink = styled.button`
//     text-align: center;
//     color: white;
//     font-weight: bold;
//     font-size: 14px;
//     margin-top: 6px;
//     height: 42px;
//     width: 270px;
//     border-radius: 18px;
//     border-style: none;
// `