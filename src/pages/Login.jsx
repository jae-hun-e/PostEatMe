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
                    <Btn><Link to="/Share" style={{textDecoration:"none", color: "#568C7D"}}>로그인 / 회원가입</Link></Btn>
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
    margin-top: 140px;
    font-size: 28px;
    color: #EC7698;
    text-shadow: -2px 0 #000, 0 3px rgb(47, 47, 47), 3px 0 rgb(47, 47, 47), 0 -2px #000;
    font-family: 'Forte';
`

const Login2 = styled.h2`
    // margin-top: 4%;
`

const Btn = styled.button`
    font-size: 16px;
    font-weight: bold;
    width: 200px;
    height: 28px;
    border-style: none;
    background-color: #F2E5D5;
    opacity: 0.5;
    font-family: 'SCDream';

    &:active {
        opacity: 1;
    }
`

const Input = styled.input`
    text-align:left;
    font-size: 14px;
    font-weight: bold;
    padding-left: 20px;
    height: 36px;
    width: 260px;
    margin-top : 12px;
    border-radius: 40px;
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