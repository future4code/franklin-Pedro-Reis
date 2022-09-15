import styled from "styled-components";

const InputBox = styled.input`
  width: 350px;
  height: 25px;
  border-radius: 2px;
  border-color: rgb(200, 200, 200);
  border-style: solid;
  padding: 10px;
  ::placeholder {
    color: rgb(205, 205, 205);
  }
`;
const InputDiv = styled.div`
  color: rgb(100, 100, 100);
  display: flex;
  flex-direction: column;
  margin: 15px 0;
`;

const LabelDiv = styled.div`
  padding-bottom: 10px;
`;

export const Input = (input) => {
  return (
    <InputDiv>
      <LabelDiv>
        <label>{input.label}</label>
      </LabelDiv>
      <InputBox
        onChange={input.onChange}
        name={input.name}
        value={input.value}
        placeholder={input.placeholder}
        ref={input.text}
        required
        type={input.type}
        pattern={input.pattern}
        title={input.title}
        min={input.min}
      />
    </InputDiv>
  );
};
