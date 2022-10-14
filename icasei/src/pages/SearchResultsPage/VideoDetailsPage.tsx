import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { VideoCardForSideBar } from "../../components/VideoCardForSideBar/VideoCardForSideBar";
import { VideoPlayer } from "../../components/VideoPlayer/VideoPlayer";
import { LoginContext } from "../../context/Login";
import { useAppNavigate } from "../../routes/coordinator";
import { loadYoutubeVideo, searchYoutube } from "../../services/searchYoutube";

interface VideoParams {
  snippet: { localized: { description: string; title: string } };
  statistics: { viewCount: string; likeCount: string };
}

interface SearchParams {
  map(arg0: (videoData: any) => JSX.Element): React.ReactNode;
  data: {
    data: Array<{
      items: {
        snippet: {
          title: string;
          channelTitle: string;
          thumbnails: { default: { url: string } };
        };
      };
    }>;
  };
}

export const VideoDetailsPage = () => {
  const { goToSearchResults } = useAppNavigate();
  const { setLoggedUser } = React.useContext(LoginContext);

  const [videoOnPlayer, setVideoOnPlayer] = useState<VideoParams | undefined>();
  const [relatedVideos, setRelatedVideos] = useState<SearchParams>();
  // const [nextPageToken, setNextPageToken] = useState(undefined);

  const params = useParams();

  useEffect(() => {
    if (localStorage.getItem("user")?.length) {
      setLoggedUser({
        user: localStorage.getItem("user"),
        email: localStorage.getItem("email"),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const videoData = async () => {
      const response = await loadYoutubeVideo(params.id);
      setVideoOnPlayer(response?.data.items[0]);
    };
    videoData();
  }, [params.id]);

  const search = async (keyword: string | undefined) => {
    const response = await searchYoutube(keyword, undefined, 8);
    console.log(response);
    setRelatedVideos(response?.data.items);
  };

  useEffect(() => {
    search(videoOnPlayer?.snippet.localized.title);
  }, [videoOnPlayer]);

  const videoSrc = `https://www.youtube.com/embed/${params.id}`;

  return (
    <Box display="flex" justifyContent="center" flexWrap="wrap">
      {videoOnPlayer && (
        <VideoPlayer
          videoSrc={videoSrc}
          videoTitle={videoOnPlayer.snippet.localized.title}
          videoDescription={videoOnPlayer.snippet.localized.description}
          videoViews={videoOnPlayer.statistics.viewCount}
          videoLikes={videoOnPlayer.statistics.likeCount}
        />
      )}
      <Box marginLeft="20px">
        {relatedVideos &&
          relatedVideos.map((videoData: any) => {
            return (
              <VideoCardForSideBar
                title={videoData.snippet.title}
                channelTitle={videoData.snippet.channelTitle}
                url={videoData.snippet.thumbnails.default.url}
                onClick={() => goToSearchResults(videoData.id.videoId)}
              />
            );
          })}
      </Box>
    </Box>
  );
};
