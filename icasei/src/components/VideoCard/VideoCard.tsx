import { Box, Image, Text } from "@chakra-ui/react";

export interface VideCardProps {
  channelTitle: string;
  title: string;
  url: string;
}

export const VideoCard = ({ channelTitle, title, url }: VideCardProps) => {
  return (
    <Box
      display="flex"
      flexDir="column"
      alignItems="center"
      width="300px"
      height="300px"
      padding="10px"
      margin="10px"
      maxW="300px"
    >
      <Image margin="10px" src={url} alt="title" width="300px" height="190px" />
      <Box textAlign="left" width="300px">
        <Text as="b" fontSize="lg" height="30px">
          {title && title.length > 24 ? title.substring(0, 50) + "..." : title}
        </Text>

        <Text fontSize="md">
          {channelTitle && channelTitle.length > 24
            ? channelTitle.substring(0, 24) + "..."
            : channelTitle}
        </Text>
      </Box>
    </Box>
  );
};
