function Start({setBool}) {

	const onClick = () => {
		setBool(true);
		console.log('클릭');
	}

  return (
		<button onClick={onClick}>시작 버튼</button>
  );
}

export default Start;
