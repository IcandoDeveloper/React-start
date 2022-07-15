//1. 태그에 class를 주고싶으면?
//1번 답 <div className = "클래스명">
//2. 리액트에서 바인딩 쉽게하는 법?
//2번 답 src id href 등의 속성에도 {변수명 , 함수 등} 으로 사용
//3. JSX에서 style 속성 집어 넣을때 어떻게?
//3번 답 style = {object 자료형으로 만든스타일}
//4. 변수를 안쓰고 state를 쓰는이유?
//4번 답 react를 웹 앱처럼 동작하게 만들고 싶어서 사용하는 것임
//4번 답 보충  변수는 변경했을 때 새로고침이 돼야 재랜더링이 되는 반면, state를 사용하게 되면 HTML이 자동으로 재랜더링됨
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

//리액트에서 데이터 바인딩 쉽게 하는 방법

function App() {
  var [a, b] = [10, 100];

  //useState 함수는 실행을 하면 array가 남는데 a(글제목)는 진짜데이터 b(글제목변경)는 데이터를 수정하기위한 함수
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "남자 바지 추천",
    "남자 신발 추천",
  ]);

  //16번째줄을 서버에서 가져온 데이터라고 치면
  let posts = "강남 고기 맛집";
  //45번째 줄에 19번째줄의 데이터를 보여줘야함 445번째 줄에 <div className = { posts }계발 Blog</div> 라고 적어야함
  //이런건 데이터 바인딩이라고함

  //이런식으로 함수명 자체를 {함수 ()} 45번째줄에 넣으면 데이터를 쉽게 바인딩이 가능
  function 함수() {
    return 100;
  }

  //37번째줄 mystyle을 아래 mystyle이라는 변수명을 만들고 스타일들을 넣어서 바인딩시킬 수도 있음.
  let mystyle = { color: "blue", fontSize: "30px" };

  //전통적인 자바스크립트 바인딩
  // document.getElementById().innerHTML = ''?

  //but리엑트에서는 위에처럼 할 필요 x
  //리엑트에서는 그냥 45번째 줄처럼 중괄호를 치고 변수명이나 함수를/을 입력하면 됨

  //변수를 안쓰고 state를 쓰는이유?
  //react를 웹 앱처럼 동작하게 만들고 싶어서 사용하는 것임
  //변수는 변경했을 때 새로고침이 돼야 재랜더링이 되는 반면, state를 사용하게 되면 HTML이 자동으로 재랜더링됨
  return (
    <div className="App">
      <div className="black-nav">
        <div style={{ mystyle }}>계발 Blog</div>
      </div>
      <div className="list">
        <h3> {글제목[0]} </h3>
        <p>7월 15일 발행</p>
        <hr />
      </div>
      <div className="list2">
        <h3> {글제목[1]} </h3>
        <p>7월 16일 발행</p>
        <hr />
      </div>
      <div className="list2">
        <h3> {글제목[2]} </h3>
        <p>7월 16일 발행</p>
        <hr />
      </div>
      <div className="list2">
        <h3> {글제목[3]} </h3>
        <p>7월 16일 발행</p>
        <hr />
      </div>
      <img src={logo} />
      <h4>{posts}</h4>
    </div>
  );
}

export default App;
