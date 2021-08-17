import CheckKeyCode from "../utils/CheckKeyCode";
import styled from "styled-components";

function Input({ number, setNumber, arr, setArr }) {
  const onSubmit = (e) => {
    e.preventDefault();
    setArr([...arr].concat(number.split(",").map((x) => +x)));
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
          onKeyDown={CheckKeyCode}
          value={number}
        />
        <button type="submit">제출</button>
      </form>
    </InputContainer>
  );
}

export default Input;

const InputContainer = styled.div`
  margin: 100px;
  width: 100%;
  form {
    button {
      background-color: grey;
      font-size: 15px;
      font-weight: 900;
      height: 60px;
      width: 70px;
      border: none;
    }
    input {
      width: 30%;
      height: 60px;
      box-sizing: border-box;
    }
  }
`;
