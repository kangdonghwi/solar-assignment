import styled from "styled-components";

function Timer({ local }) {
  const date = new Date();
  const utc = date.getTime() + date.getTimezoneOffset() * 60 * 1000;
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
  const kr_date = new Date(utc + KR_TIME_DIFF);

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    weekday: "long",
  };

  return (
    <>
      <TimerContainer>
        {kr_date.toLocaleDateString(local, options)}
      </TimerContainer>
    </>
  );
}

export default Timer;

const TimerContainer = styled.div`
  width:100%;
  margin: 20px auto;
  padding:30px;
  background-color: #f0f0f0;
  font-size: 20px;
`;
