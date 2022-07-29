import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import dst1 from "../assets/dst1.svg";
import dst2 from "../assets/dst2.svg";
import dst3 from "../assets/dst3.svg";
import dst4 from "../assets/dst4.svg";
import dst5 from "../assets/dst5.svg";
import Modal from "../components/Modal";
import axios from "axios";

// const BASE_URL = 'http://15.165.62.51:8000/'
const BASE_URL = 'https://44.209.68.143:8000'
const TEST_URL = 'http://0.0.0.0:8000'


const Open = () => {

  const userData = decodeURI(decodeURIComponent(window.location.href.split('open/')[1]));
  // console.log(href.split('memo/')[1])
  const userName = userData.split(('_'))[0]
  const userPhone = userData.split(('_'))[1]

  const [modalOpen, setModalOpen] = useState(false)
  const modalClose = () => {
    setModalOpen(!modalOpen)
  }

  const [memoData, setMemoData] = useState([])


  useEffect(() => {
    // TODO AWS베포 URL로 변경
    axios.get(`${BASE_URL}/memo`).then(res => setMemoData(res.data.filter((memo) => memo.name === userName).map((data)=> data.Memo)))
    console.log(userName)
  }, []);

  return (
    <div style={{ position: "relative", height: "500px" }}>
      { modalOpen && <Modal modalClose={modalClose} memo={memoData}></Modal>}
      <Div1 style={{ width: "260px" }}>
        <img src={dst1} onClick={modalClose} />
      </Div1>
      <Div2 style={{ width: "160px" }}>
        <img src={dst2} onClick={modalClose}/>
      </Div2>
      <Div3 style={{ width: "260px" }}>
        <img src={dst3} onClick={modalClose}/>
      </Div3>
      <Txt>
        <MainTxt>{userName}님 편지 확인</MainTxt>
        <SubTxt>( 디저트들을 눌러보세요! )</SubTxt>
      </Txt>
      <Div4 style={{ width: "300px" }}>
        <img src={dst4} onClick={modalClose}/>
      </Div4>
      <Div5 style={{ width: "280px" }}>
        <img src={dst5} onClick={modalClose}/>
      </Div5>
    </div>
  );
};

export default Open;

const Container = styled.div`
    

`
const Div1 = styled.div`
  position: absolute;
  top: -50px;
  left: -70px;
  opacity: 0.5;
`;
const Div2 = styled.div`
  position: absolute;
  top: -10px;
  right: 0px;
  opacity: 0.5;
`;
const Div3 = styled.div`
  position: absolute;
  top: 100px;
  right: 0px;
  opacity: 0.5;
`;

const Div4 = styled.div`
  position: absolute;
  left: -60px;
  bottom: 0px;
  opacity: 0.5;
`;

const Div5 = styled.div`
  position: absolute;
  bottom: -120px;
  right: -40px;
  opacity: 0.5;
`;

const Txt = styled.div`
  position: absolute;
  left: 28%;
  right: 28%;
`;

const MainTxt = styled.h1`
  font-family: "SCDream";
  font-size: 20px;
  margin-top: 44vh;
`;

const SubTxt = styled.p`
  font-family: "SCDream";
  font-size: 12px;
  color: #568c7d;
  margin-top: 10px;
`;