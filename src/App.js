import styled from "styled-components";
import { useState } from "react";
import Start from "./components/Start";
import Input from "./components/Input";
import Result from "./components/Result";
import Timer from "./components/Timer";
import LOCAL from "./asset/LocalData";

function App() {
  const [bool, setBool] = useState(false);
  const [number, setNumber] = useState("");
  const [arr, setArr] = useState([]);

  return (
      <AppContainer>
        <Timer local={LOCAL.KOREA} />
        <Input
          number={number}
          setNumber={setNumber}
          arr={arr}
          setArr={setArr}
        />
        <Start setBool={setBool} />
        {bool ? (
          <ResultField><Result arr={arr} /></ResultField>
        ) : (
          <>
            <Title>결과 필드</Title>
            <ResultField />
          </>
        )}
        <Timer local={LOCAL.US} />
      </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 600px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;
const Title = styled.div`
  font-size: 25px;
  
`;
const ResultField = styled.div`
  width: 100%;
  font-size: 25px;
  margin:auto;
  padding:30px;
  background: #f0f0f0;
`;
