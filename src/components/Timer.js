import styled from 'styled-components';

function Timer({local}) {

	let date = new Date();
	let options = { 
		year: "numeric" ,
		month: "short" , 
		day: "numeric" , 
		weekday: "long"
	};

  return (
		<>
		<TimerContainer>{date.toLocaleDateString(local, options)}</TimerContainer>
		</>
  );
}

export default Timer;

const TimerContainer = styled.div`
	border:1px solid black;
	margin: 20%
`;