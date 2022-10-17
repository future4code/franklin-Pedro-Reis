import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { VideoCardForSideBar, VideoPlayer } from "../../components";
import { useAppNavigate } from "../../routes/coordinator";
import { loadYoutubeVideo, searchYoutube } from "../../services/searchYoutube";

interface VideoPlayerParams {
  snippet: { localized: { description: string; title: string } };
  statistics: { viewCount: string; likeCount: string };
}
interface RelatedVideoParams {
  snippet: {
    title: string;
    channelTitle: string;
    thumbnails: { default: { url: string } };
  };
  id: { videoId: string };
}

export const VideoDetailsPage = () => {
  const { goToSearchResults } = useAppNavigate();

  const [videoOnPlayer, setVideoOnPlayer] = useState<
    VideoPlayerParams | undefined
  >();
  const [relatedVideos, setRelatedVideos] = useState<RelatedVideoParams[] | []>(
    []
  );
  const [nextPageToken, setNextPageToken] = useState(undefined);

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
      setRelatedVideos(response?.data.items);
    };
    search();
  }, [videoOnPlayer]);

  const nextPageSearch = async () => {
    const response = await searchYoutube(
      videoOnPlayer?.snippet.localized.title,
      nextPageToken,
      8
    );
    setNextPageToken(response?.data.nextPageToken);
    const newList = [...relatedVideos, ...response?.data.items];
    setRelatedVideos(newList);
  };

  window.onscroll = async function () {
    if (
      window.innerHeight + Math.ceil(window.pageYOffset) >=
      document.body.offsetHeight
    ) {
      try {
        const newResults = (await nextPageSearch()) as never;
        relatedVideos.push(newResults);
      } catch (error) {
        console.log(error);
      }
    }
  };

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
          relatedVideos.map((videoData: RelatedVideoParams) => {
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
