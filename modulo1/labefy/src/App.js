import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Iframe, YoutubeCard } from "./components/YoutubeCard";

const LabefyBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: rgba(255, 205, 0);
`;

const GlassBox = styled.div`
  margin: 20px;
  width: 70vh;
  background: rgba(255, 255, 255, 0.76);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(12.8px);
  -webkit-backdrop-filter: blur(12.8px);
`;

const LabefyDiv = styled.div`
  margin: 40px;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const FormDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Input = styled.input`
  margin: 10px;
  height: 30px;
  border: none;
  border-bottom: 0px solid orange;
  outline: 0;
  font-size: 1.3rem;
  padding: 10px;
  border-radius: 4px;
  background: rgba(255, 125, 0, 0.3);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  ::placeholder {
    color: white;
  }
  :focus {
    transition: 0.1s;
    background: rgba(255, 125, 0, 0.5);
    border-bottom: 1px solid orange;
  }
`;

const Button = styled.button`
  text-align: center;
  width: 30px;
  height: 30px;
  border-radius: 4px;
  border: none;
  color: #fff;
  background: orange;
  font: 24px sans-serif;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
  :hover {
    background: rgb(255, 165, 0, 0.8);
  }
`;

const PlaylistsItemBox = styled.span`
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: orange;
  color: white;
  font-weight: 500;
  border-radius: 4px;
  margin: 2px;
  width: 100%;
  height: 40px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
`;

function App() {
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState();
  const [tracks, setTracks] = useState();
  const [selectedTrack, setSelectedTrack] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const playlistInput = useRef();
  const trackNameInput = useRef();
  const trackArtistInput = useRef();
  const trackLinkInput = useRef();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const headers = {
    headers: {
      Authorization: "pedro-durand-franklin",
    },
  };

  useEffect(() => {
    if (!playlists) return;
    const getAllPlaylists = async () => {
      await axios
        .get(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists
        `,
          headers
        )
        .then((response) => {
          setPlaylists(response.data.result.list);
          // setIsLoading(false);
        })
        .catch((e) => {
          alert(e);
        });
    };
    getAllPlaylists();
  }, [headers, playlists]);

  useEffect(() => {
    getTracks();
  }, [selectedPlaylist, tracks]);

  const postPlaylist = () => {
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists
    `,
        {
          name: playlistInput.current.value,
        },
        headers
      )
      .then((response) => {
        alert(`Playlist ${playlistInput.current.value} adicionada com sucesso`);
      })
      .catch((e) => {
        alert(e.message);
      });
    if (playlistInput.current.value) {
      playlistInput.current.value = "";
    }
  };

  const deletePlaylist = async () => {
    await axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${selectedPlaylist.id}
    `,
        headers
      )
      .then((response) => {
        alert(`Playlist ${selectedPlaylist.name} excluida com sucesso`);
      });
  };

  const getTracks = async (id) => {
    setIsLoading(true);
    await axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks
    `,
        headers
      )
      .then((response) => {
        setTracks(response.data.result.tracks);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const postTrack = () => {
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${selectedPlaylist.id}/tracks
    `,
        {
          name: trackNameInput.current.value,
          artist: trackArtistInput.current.value,
          url: trackLinkInput.current.value,
        },
        headers
      )
      .then((response) => {
        alert(
          `${trackNameInput.current.value} adicionada a playlist ${selectedPlaylist.name} com sucesso`
        );
      })
      .catch((e) => alert(e));
    if (
      trackNameInput.current.value ||
      trackArtistInput.current.value ||
      trackLinkInput.current.value
    ) {
      trackNameInput.current.value = "";
      trackArtistInput.current.value = "";
      trackLinkInput.current.value = "";
    }
  };

  const deleteTrack = async () => {
    await axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${selectedPlaylist.id}/tracks/${selectedTrack.id}
      `,
        headers
      )
      .then((response) => {
        alert(`Track excluida com sucesso`);
      })
      .catch((e) => {
        alert(e);
      });
  };

  const playlistsList = playlists.map((playlist) => {
    return (
      <PlaylistsItemBox
        key={playlist.id}
        onClick={() => {
          setSelectedPlaylist(playlist);
          getTracks(playlist.id);
        }}
        onDoubleClick={() => {
          setSelectedPlaylist(playlist);
          deletePlaylist();
        }}
      >
        {playlist.name}
      </PlaylistsItemBox>
    );
  });

  const tracksList = tracks ? (
    tracks.map((track) => {
      return (
        <li
          key={track.id}
          // onClick={() => window.open(track.url, "_blank")}
          onDoubleClick={() => {
            setSelectedTrack(track);
            deleteTrack();
          }}
        >
          {track.artist} - {track.name}
        </li>
      );
    })
  ) : (
    <span>Insira músicas na sua playlist</span>
  );

  return (
    <LabefyBox>
      <GlassBox>
        <LabefyDiv>
          <h2>Criar Playlist</h2>
          <FormDiv>
            <Input placeholder="Nome da Playlist" ref={playlistInput}></Input>
            <Button onClick={postPlaylist}>+</Button>
          </FormDiv>
          <h2>Playlists Adicionadas</h2>
          {playlistsList}
          <h2>Adicionar Musicas na Playlist</h2>
          <FormDiv>
            <Input placeholder="Música" ref={trackNameInput}></Input>
            <Input placeholder="Artista" ref={trackArtistInput}></Input>
            <Input placeholder="Link Youtube" ref={trackLinkInput}></Input>
            <Button onClick={postTrack}>+</Button>
          </FormDiv>
          <h2>Musicas da Playlist</h2>
          <div>
            {selectedPlaylist ? (
              <h3>{selectedPlaylist.name}</h3>
            ) : (
              <h3>Selecione uma Playlist</h3>
            )}
          </div>
          {isLoading ? <p>Carregando...</p> : tracksList}
        </LabefyDiv>
      </GlassBox>
    </LabefyBox>
  );
}

export default App;
