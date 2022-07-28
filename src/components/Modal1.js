import React from 'react'
import styled from "styled-components";

const Modal = ({modalClose, memo}) => {
  console.log("Modal", memo)

  return (
    <Modal__container>
      <MModal>
        <Modal__button onClick={modalClose}>X</Modal__button>
        <br /><br /><br />
        <MemoDiv>
          {memo.map((data, idx) => <MemoList key={idx}>{idx+1}번 : {data}</MemoList>)}
        </MemoDiv>
      </MModal>
    </Modal__container>
  )
}

export default Modal;

const MemoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  width: 100%;
  height: 100%;
  
`
const MemoList = styled.p`
  padding-top: 10px;
  color: black;
  font-size: 14px;
  font-family: "SCDream";
  margin-bottom: 10px;
`

const Modal__container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.4);
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
`

const MModal = styled.div`
    width: 300px;
    height: 66%;
    background-color: #fff;
    // Modal 창 브라우저 가운데로 조정
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%, -50%);
    z-index:100;
    border-radius: 6px;
`

const Modal__button = styled.button`
    position: relative;
    width: 24px;
    height: 24px;
    text-align: center;
    left:-40.6%;
    top: 4%;
    // transform: translate(-50%, -50%);
    border-width: 1.2px;
    border-color: black;
    border-radius: 6px;
    background-color: #f0d596;
    color: black;
    font-size: 16px;
    font-family: "SCDream";
`