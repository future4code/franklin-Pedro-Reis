import React, { useState } from "react";
import styled from "styled-components";

const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 20px;
  width: 100%;
  height: 96vh;
`;

const MessagerContainer = styled.div`
  border: 1px black solid;
  min-width: 400px;
  width: 80vh;
  height: 100vh;
`;

const InputContainer = styled.div`
  position: absolute;
  bottom: 0;
  max-width: 80vh;
  display: flex;
`;

const InputUser = styled.input`
  width: 15vh;
`;

const InputMessage = styled.input`
  width: 55vh;
`;

const SendButton = styled.button`
  width: 8vh;
`;

const MessageLine = styled.div`
  display: flex;
  flex-direction: row;
`;

const BoldUser = styled.span`
  font-weight: 600;
  margin-right: 4px;
  margin-bottom: 10px;
`;

const Messages = () => {
  const [sendMessage, setSendMessage] = useState([]);

  const [valorInputUser, setvalorInputUser] = useState("");
  const [valorInputMessage, setvalorInputMessage] = useState("");

  const addMessage = () => {
    const addedMessage = {
      user: valorInputUser,
      message: valorInputMessage,
    };
    const sendMessages = [...sendMessage, addedMessage];
    setSendMessage(sendMessages);
  };

  const onChangeInputUser = (event) => {
    setvalorInputUser(event.target.value);
  };

  const onChangeInputMessage = (event) => {
    setvalorInputMessage(event.target.value);
  };
  const messageList = sendMessage.map((message, index) => {
    return (
      <MessageLine key={index}>
        <BoldUser>{message.user}:</BoldUser> {message.message}
      </MessageLine>
    );
  });

  return (
    <MessagerContainer>
      <MessageBox>{messageList}</MessageBox>

      <InputContainer>
        <InputUser
          placeholder="Usuário"
          value={valorInputUser}
          onChange={onChangeInputUser}
        ></InputUser>
        <InputMessage
          placeholder="Mensagem"
          value={valorInputMessage}
          onChange={onChangeInputMessage}
        ></InputMessage>
        <SendButton onClick={addMessage}>Enviar</SendButton>
      </InputContainer>
    </MessagerContainer>
  );
};

export { Messages };
