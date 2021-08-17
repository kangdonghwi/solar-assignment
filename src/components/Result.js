import { useEffect, useState } from "react";
import styled from "styled-components";
import QuickSort from "../utils/QuickSort";
function Result({ arr }) {
  const [time, setTime] = useState();

  

  const timeout = () => {
    setTimeout(() => {
      return setTime(QuickSort(arr).reverse().join());
    }, 3000);
  };

  useEffect(() => {
    timeout();
  });

  return (
    <ResultContainer>
      <div> 결과 오름차순 : {QuickSort(arr).join()} </div>
      <br />
      <div> 결과 내림차순 : {time} </div>
    </ResultContainer>
  );
}

export default Result;

const ResultContainer = styled.div`
  font-size: 30px;
  padding: 40px;
`;
