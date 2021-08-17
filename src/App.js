import './App.css';
import { useState } from 'react';
import Start from './components/Start';
import Input from './components/Input';
import Result from './components/Result';
import Timer from './components/Timer';
import LOCAL from './asset/LocalData';

function App() {
  const [bool,setBool] = useState(false);
  const [number,setNumber] = useState('');
	const [arr,setArr] = useState([]);

  return (
    <div className="App">
      <Timer local={LOCAL.KOREA}/>
      <Input number={number} setNumber={setNumber} arr={arr} setArr={setArr}/>
      <Start setBool={setBool} />
      {bool ? <Result arr={arr}/> : <div>결과 필드 : 시작 버튼을 누르세요</div>}
      <Timer local={LOCAL.US}/>
    </div>
  );
}

export default App;
