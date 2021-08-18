import { useState } from "react";
import styled from "styled-components";

function Input({ arr, setArr }) {
  const [number,setNumber] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    
    const strArr = number.split(',');
    const numArr = strArr.filter((str) => {
     try{
        if(!isNaN(str)){
          return str
        }else{
          throw Error
          
        }
      }catch(error){
        alert('숫자를 입력하세요.')
        return false;
      }
    })
    console.log(numArr)
    setArr([...arr].concat(numArr.map((x) => +x)));
    setNumber("");
  };

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  return (
    <InputContainer>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={onChange}
          value={number}
        />
        <button type="submit">입력</button>
      </form>
    </InputContainer>
  );
}

export default Input;

const InputContainer = styled.div`
  margin:30px auto;
  width: 100%;
  form {
    button {
      background-color: #f5f5dc;
      font-size: 15px;
      font-weight: 900;
      height: 60px;
      width: 70px;
      border: none;
    }
    input {
      width: 30%;
      height: 59px;
      box-sizing: border-box;
    }
  }
`;
