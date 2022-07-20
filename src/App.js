import React from 'react';
import { Routes, Route } from "react-router-dom";
import MainLogin from './pages/MainLogin.jsx';
import Main from './pages/Main.jsx';
import Login from './pages/Login.jsx';
import Memo from './pages/Memo.jsx';
import Share from './pages/Share.jsx';

const App = () => {
  return <Routes>
    {/* <Route path="/" element={<MainLogin />}></Route>
    <Route path="/main" element={<Main />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/memo" element={<Memo />}></Route>
    <Route path="/share" element={<Share />}></Route> */}
    <Route path="/" element={<Main />}></Route>
    <Route path="/mainLogin" element={<MainLogin />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/memo" element={<Memo />}></Route>
    <Route path="/share" element={<Share />}></Route>
  </Routes>
};

export default App;