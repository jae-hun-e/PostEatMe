import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main.jsx";
import Login from "./pages/Login.jsx";
import Memo from "./pages/Memo.jsx";
import Open from "./pages/Open.jsx";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import MemoList from "./components/MemoList.jsx";
import Modal from "./components/Modal.jsx";

const App = () => {

    return (
        <>
            <GlobalStyles />
            {/* <Open memos ={list} /> */}
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/memo/:id" element={<Memo />} />
                <Route path="/open" element={<Open />} />
            </Routes>
        </>
    );
};

export default App;

const GlobalStyles = createGlobalStyle`
    ${reset}
    body {
        white-space: pre-line;
        text-align: center;
        background-color: #F2E5D5;
    }
`;
