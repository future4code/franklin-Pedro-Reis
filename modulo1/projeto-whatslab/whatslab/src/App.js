import styled from "styled-components"
import { Messages } from "./components/Message/Message"

const BodyContainer = styled.div`
display: flex;
justify-content: center;
`

const MessagerContainer = styled.div`
  border: 1px black solid;
  min-width: 400px;
  width: 80vh;
  height: 100vh;
`
const InputContainer = styled.div `
 position: absolute;
 bottom: 0;
 max-width: 80vh;
 display: flex;
`
const InputUser = styled.input`
width: 15vh;
`

const InputMessage = styled.input`
width:55vh;
`

const SendButton = styled.button`
width: 8vh;
`

function App() {
  return (
    <BodyContainer>
    <MessagerContainer>
      <Messages></Messages>
    <InputContainer>
    <InputUser placeholder="Usuário"></InputUser>
    <InputMessage placeholder="Mensagem"></InputMessage>
    <SendButton>Enviar</SendButton>
    </InputContainer>
    </MessagerContainer>
    </BodyContainer>
  );
}

export default App;
