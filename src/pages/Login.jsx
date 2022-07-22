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

// const testHandler = event => {
//     if (Input.length <= 0 && InputPw <=0) {
//         event.preventDefault();
//         alert('이름은 2글자 이상, 비밀번호는 4자리 이상 입력해주세요.');
//     }
// };

const Login = () => {


    return (
        <>
            <GlobalStyles />
            <Login1>{main}</Login1>
            <Login2>
                <Btn /*onClick={testHandler}*/><Link to="/Share">로그인</Link></Btn>
            </Login2>
            <div>
                <Input type='text' id='id' name='id' placeholder='이름'/>
            </div>
            <div>
                <InputPw type='password' id='password' name='password' placeholder='비밀번호'/>
            </div>
            <div><LoginLink style={{backgroundColor:'#457ABF'}}>facebook으로 로그인</LoginLink></div>
            <div><LoginLink style={{backgroundColor:'#D94141'}}>google로 로그인</LoginLink></div>
            <div><LoginLink style={{backgroundColor:'#6CBF45'}}>네이버로 로그인</LoginLink></div>
            <div><LoginLink style={{backgroundColor:'#F2D027'}}>카카오로 로그인</LoginLink></div>
        </>
    )
};

export default Login;

const Login1 = styled.div`
    margin-top: 20%;
    font-size: 26px;
`

const Login2 = styled.h2`
    margin-top: 4%;
    font-size: 18px;
`

const Btn = styled.button`
    textDecoration: none;
    color: #568C7D;
    font-size: 16px;
    font-weight: bold;
    width: 70px;
    height: 28px;
    border-width: 1.2px;
    border-color: black;
    border-radius: 20px;
    background-color: #f0d596;
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
`

const InputPw = styled(Input)`
    margin-bottom: 100px;
`

const LoginLink = styled.button`
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 14px;
    margin-top: 6px;
    height: 42px;
    width: 270px;
    border-radius: 18px;
    border-style: none;
`