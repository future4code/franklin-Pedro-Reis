import styled from "styled-components";
import { Messages } from "./components/Message/Message";

const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <BodyContainer>
      <Messages />
    </BodyContainer>
  );
}

export default App;
