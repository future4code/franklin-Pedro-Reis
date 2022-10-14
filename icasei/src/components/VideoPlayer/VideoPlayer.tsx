import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";

interface VideoPlayerProps {
  videoSrc: string;
  videoTitle: string;
  videoDescription: string;
  videoViews: string;
  videoLikes: string;
  //   videoUnlikes: string;
}

export const VideoPlayer = ({
  videoSrc,
  videoTitle,
  videoDescription,
  videoViews,
  videoLikes,
}: VideoPlayerProps) => {
  const [description, setDescription] = useState(
    videoDescription.substring(0, 78) + "..."
  );

  const onClickSeeMore = () => {
    if (description === videoDescription.substring(0, 78) + "...") {
      setDescription(videoDescription);
    } else {
      setDescription(videoDescription.substring(0, 78) + "...");
    }
  };

  return (
    <Box
      display="flex"
      flexDir="column"
      justifyContent="flex-start"
      textAlign="left"
      maxW="640px"
    >
      <Box margin="10px">
        <iframe
          src={videoSrc}
          allowFullScreen
          title="Video player"
          width="640"
          height="360"
        />
        <Box>
          <Text as="b" fontSize="lg" height="30px">
            {videoTitle}
          </Text>
          <Text fontSize="sm" onClick={onClickSeeMore}>
            {description}
          </Text>
          <Text as="b" fontSize="md">
            {videoViews} visualizações
          </Text>
          <Box>
            <Text fontSize="md">{videoLikes} likes</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
