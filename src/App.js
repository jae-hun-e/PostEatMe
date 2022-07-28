import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main1.jsx";
import Login from "./pages/Login1.jsx";
import Memo from "./pages/Memo1.jsx";
import Open1 from "./pages/Open1.jsx";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import {QueryClientProvider, QueryClient} from "react-query";

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/memo/:id" element={<Memo />}></Route>
                <Route path="/open/:id" element={<Open1 />}></Route>
            </Routes>
        </QueryClientProvider>
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
