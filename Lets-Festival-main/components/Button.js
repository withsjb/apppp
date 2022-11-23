import { useState } from "react";

function Accordion({ title, content }) {
  // 토글을 닫아두기 위해 초기값을 false로 설정해두었다.
  const [isCheck, setCheck] = useState(false);
  const [isChecka, setChecka] = useState(false);
  const [isCheckb, setCheckb] = useState(false);
  const [isCheckc, setCheckc] = useState(false);

  return (
    <>
      <div
        // 간단하게 내부에 css스타일링
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          boxSizing: "border-box",
          backgroundColor: "gray",
          width: "100%",
          height: "60px",
          color: "#fff",
        }}
      >
        <h1 style={{ fontSize: "30px" }}>{title}</h1>
        <button
          onClick={() => {
            // setCheck로 state값을 변경해주자.
            // e로 상태값을 받아왔다. 클릭시 상태값은 !상태값이므로 값이 반전된다 false -> true
            setCheck((e) => !e);
            setChecka(false);
            setCheckb(false);
            setCheckc(false);
          }}
        >
          {isCheck ? "봄" : "-"}
        </button>
        <button
          onClick={() => {
            // setCheck로 state값을 변경해주자.
            // e로 상태값을 받아왔다. 클릭시 상태값은 !상태값이므로 값이 반전된다 false -> true
            setCheck(false);
            setChecka((e) => !e);
            setCheckb(false);
            setCheckc(false);
          }}
        >
          {isChecka ? "여름" : "-"}
        </button>
        <button
          onClick={() => {
            // setCheck로 state값을 변경해주자.
            // e로 상태값을 받아왔다. 클릭시 상태값은 !상태값이므로 값이 반전된다 false -> true
            setCheck(false);
            setChecka(false);
            setCheckb((e) => !e);
            setCheckc(false);
          }}
        >
          {isCheckb ? "가을" : "-"}
        </button>
        <button
          onClick={() => {
            // setCheck로 state값을 변경해주자.
            // e로 상태값을 받아왔다. 클릭시 상태값은 !상태값이므로 값이 반전된다 false -> true
            setCheck(false);
            setChecka(false);
            setCheckb(false);
            setCheckc((e) => !e);
          }}
        >
          {isCheckc ? "겨울" : "-"}
        </button>
      </div>

      {isCheck && (
        <p
          style={{
            margin: "0",
            backgroundColor: "skyblue",
            color: "#fff",
            padding: "10px",
          }}
        >
          {content}
        </p>
      )}

      {isChecka && (
        <p
          style={{
            margin: "0",
            backgroundColor: "yellow",
            color: "#fff",
            padding: "10px",
          }}
        >
          {content}
        </p>
      )}

      {isCheckb && (
        <p
          style={{
            margin: "0",
            backgroundColor: "green",
            color: "#fff",
            padding: "10px",
          }}
        >
          {content}
        </p>
      )}

      {isCheckc && (
        <p
          style={{
            margin: "0",
            backgroundColor: "blue",
            color: "#fff",
            padding: "10px",
          }}
        >
          {content}
        </p>
      )}
    </>
  );
}

export default Accordion;
