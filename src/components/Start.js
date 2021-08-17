import styled from "styled-components";

function Start({ setBool }) {
  const onClick = () => {
    setBool(true);
  };

  return (
    <StartContainer>
      <button onClick={onClick}>시작 버튼</button>
    </StartContainer>
  );
}

export default Start;

const StartContainer = styled.div`
  width: 80%;

  margin: 100px;
  button {
    font-size: 30px;
    width: 44%;
    height: 60px;
    border: none;
    background: grey;
  }
`;
