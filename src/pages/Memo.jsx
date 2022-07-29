import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Circle from "../assets/circle.svg";
import axios from "axios";



// const BASE_URL = 'http://15.165.62.51:8000/'
const BASE_URL = 'http://44.209.68.143:8000'
const TEST_URL = 'http://0.0.0.0:8000'

const Memo = () => {

  const userData = decodeURI(decodeURIComponent(window.location.href.split('memo/')[1]));
  // console.log(href.split('memo/')[1])
  const userName = userData.split(('_'))[0]
  const userPhone = userData.split(('_'))[1]

  const [memoData, setMemo] = useState({name: userName, Memo: ''});
  const [num, setDbData] = useState(0)
  const [DbMemoNum, setDbMemo] = useState(0)



  useEffect(() => {
    axios.get(`${BASE_URL}/user`).then(res => setDbData(res.data.filter(data=> data.phone === userPhone)[0].num))
    axios.get(`${BASE_URL}/memo`).then(res => setDbMemo(res.data.filter((memo) => memo.name === userName).length))
  }, []);

  const clickBtn = () => {
    // console.log(memoData)
    // TODO AWS베포 URL로 변경
    if(num <= DbMemoNum){
      alert("Post Eat이 가득 찼습니다.")
    }
    else{
      axios.post(`${BASE_URL}/memo/`, memoData).then(res => console.log(res.data))
      alert("쪽지 달기 성공!");
      window.location.href = "/";
    }
  };

  return (
      <>
          <Img src={Circle} />
        {console.log(DbMemoNum)}
        {console.log(num, userPhone)}
          <Div>
              <Input
                  type="text"
                  placeholder={`${userName} 님께 적고 싶은 말 `}
                  minLength={5}
                  maxLength={40}
                  title="5자 이상 40자 이내로 입력해주세요"
                  rows="5"
                  cols="5"
                  style={{ resize: "none" }}
                  onChange={(e) => setMemo({...memoData, Memo: e.target.value})}
              />
          </Div>
          <br />
          <Btn onClick={clickBtn}>작성완료!</Btn>
      </>
  );
};

export default Memo;

const Input = styled.textarea`
    position: absolute;
    // display: block;
    margin: auto -87px;
    margin-top: -217px;

    padding-top: 40px;
    line-height: 30px;
    text-align: center;
    font-size: 14px;
    height: 130px;
    width: 170px;
    border-radius: 50%;
    overflow: scroll;
    border-style: none;
    font-family: "SCDream";
    scrollbar-width: none;

    &::-webkit-scrollbar {
        width: 0;
        height: 0;
    }

    ::placeholder {
        color: rgb(195, 195, 195);
    }
`;

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
