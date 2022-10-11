import { Box, Image, Text } from "@chakra-ui/react";

interface VideCardProps {
  channelTitle: string;
  publishTime: string;
  title: string;
  thumbnail: string;
}

export const VideoCard = ({
  channelTitle,
  publishTime,
  title,
  thumbnail,
}: VideCardProps) => {
  return (
    <Box
      display="flex"
      flexDir="column"
      alignItems="center"
      width="300px"
      height="300px"
      padding="10px"
      margin="30px"
    >
      <Text fontSize="lg">
        {title.length > 24 ? title.substring(0, 44) + "..." : title}
      </Text>
      <Text fontSize="md">{channelTitle}</Text>
      <Image src={thumbnail} alt="title" width="200px" />
      <Text>{publishTime}</Text>
    </Box>
  );
};
