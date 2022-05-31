import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {
return(
  <MainContainer>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
          <Post
            nomeUsuario={'pepedurand'}
            fotoUsuario={'https://picsum.photos/50/30'}
            fotoPost={'https://picsum.photos/200/100'}
          />
          <Post
            nomeUsuario={'southamericamemes'}
            fotoUsuario={'https://picsum.photos/50/20'}
            fotoPost={'https://picsum.photos/200/90'}
          />
        </MainContainer>
)

}


export default App;
