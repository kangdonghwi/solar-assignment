import CheckKeyCode from '../utils/CheckKeyCode';

function Input({number,setNumber,arr,setArr}) {
	const onSubmit = (e) => {
		e.preventDefault();
		setArr([
			...arr	
		].concat(number.split(',').map(x=>+x)));
		setNumber('');
	}
  
	const onChange = (e) => {
		setNumber(e.target.value);
	}

  return (
    <form onSubmit={onSubmit}>
			<input type="text" onChange={onChange} onKeyDown={CheckKeyCode} value={number}/>
			<button type="submit">제출</button>
		</form>
  );
}

export default Input;
