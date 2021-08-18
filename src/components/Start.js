import styled from "styled-components";

function Start({ setBool }) {
  const onClick = () => {
    setBool(true);
  };

  return (
    <StartContainer>
      <button onClick={onClick}>정렬 버튼</button>
    </StartContainer>
  );
}

export default Start;

const StartContainer = styled.div`
  width: 80%;
  margin: 30px;
  button {
    font-size: 30px;
    width: 50%;
    height: 60px;
    border: none;
    border-radius: 10px;
    background: #f5f5dc;
  }
`;
