import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { VideoCardForSideBar, VideoPlayer } from "../../components";
import { useAppNavigate } from "../../routes/coordinator";
import { loadYoutubeVideo, searchYoutube } from "../../services/searchYoutube";

interface VideoParams {
  snippet: { localized: { description: string; title: string } };
  statistics: { viewCount: string; likeCount: string };
}

export const VideoDetailsPage = () => {
  const { goToSearchResults } = useAppNavigate();

  const [videoOnPlayer, setVideoOnPlayer] = useState<VideoParams | undefined>();
  const [relatedVideos, setRelatedVideos] = useState<any>();

  const params = useParams();
  const videoSrc = `https://www.youtube.com/embed/${params.id}`;

  //pega o video da tela
  useEffect(() => {
    const videoData = async () => {
      const response = await loadYoutubeVideo(params.id);
      setVideoOnPlayer(response?.data.items[0]);
    };
    videoData();
  }, [params.id]);

  //pega os videos relacionados
  useEffect(() => {
    const search = async () => {
      const response = await searchYoutube(
        videoOnPlayer?.snippet.localized.title,
        undefined,
        8
      );
      console.log(response);
      setRelatedVideos(response?.data.items);
    };
    search();
  }, [videoOnPlayer]);

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
