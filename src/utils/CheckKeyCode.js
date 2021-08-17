/* eslint-disable no-throw-literal */
export default function CheckKeyCode(event){
	let code = event.keyCode;
	try{
		if((code === 188 )){
			return
		}
		else if(event.ctrlKey) {
			return;
		}
		else if (code === 9 || code === 36 || code === 35 || code === 37 ||
			code === 39 || code === 8 || code === 46) {
		return;
		}
		else if(code >=96 && code<=105){
			return;
		}
		else if ((code < 48) || (code > 57)) 
			throw 'NaN'
	}catch(err){
		if(err === 'NaN'){
			alert('숫자를 입력하세요.');
		}
	}
}