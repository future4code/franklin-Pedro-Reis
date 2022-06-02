import React, { useState } from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const [posted, setPosted] = useState({
    posts: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150",
      },
      {
        nomeUsuario: "pepedurand",
        fotoUsuario: "https://picsum.photos/50/30",
        fotoPost: "https://picsum.photos/200/100",
      },
      {
        nomeUsuario: "southamericamemes",
        fotoUsuario: "https://picsum.photos/50/20",
        fotoPost: "https://picsum.photos/200/90",
      },
    ],
  });
  const [valorInputUser, setValorInputUser] = useState("");
  const [valorInputUserFotoPerfil, setValorInputUserFotoPerfil] = useState("");
  const [valorInputUserFoto, setValorInputUserFoto] = useState("");

  const adicionaPost = () => {
    const novoPost = {
      nomeUsuario: valorInputUser,
      fotoUsuario: valorInputUserFotoPerfil,
      fotoPost: valorInputUserFoto,
    };
    const postNovo = [...posted.posts, novoPost];
    const novoEstado = {
      posts: postNovo,
    };
    setPosted(novoEstado);
  };

  const onChangeInputUser = (event) => {
    setValorInputUser(event.target.value);
  };
  const onChangeInputUserFotoPerfil = (event) => {
    setValorInputUserFotoPerfil(event.target.value);
  };
  const onChangeInputUserFoto = (event) => {
    setValorInputUserFoto(event.target.value);
  };

  const listaPosts = posted.posts.map((post) => {
    return (
      <div>
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      </div>
    );
  });

  return (
    <MainContainer>
      <input
        value={valorInputUser}
        onChange={onChangeInputUser}
        placeholder={"User"}
      ></input>
      <input
        value={valorInputUserFotoPerfil}
        onChange={onChangeInputUserFotoPerfil}
        placeholder={"URL foto perfil"}
      ></input>
      <input
        value={valorInputUserFoto}
        onChange={onChangeInputUserFoto}
        placeholder={"URL foto post"}
      ></input>
      <button onClick={adicionaPost}>Novo Post</button>
      <div>{listaPosts}</div>
    </MainContainer>
  );
}

export default App;
