import styled from 'styled-components';

function Timer({local}) {
	const date = new Date();
	const utc =  date.getTime() + (date.getTimezoneOffset() * 60 * 1000);
	const KR_TIME_DIFF = 9*60*60*1000;
	const kr_date = new Date(utc + (KR_TIME_DIFF));

	let options = { 
		year: "numeric" ,
		month: "short" , 
		day: "numeric" , 
		weekday: "long"
	};

  return (
		<>
		<TimerContainer>{kr_date.toLocaleDateString(local, options)}</TimerContainer>
		</>
  );
}

export default Timer;

const TimerContainer = styled.div`

`;