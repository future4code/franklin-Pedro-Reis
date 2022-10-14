import { Box, Image, Text } from "@chakra-ui/react";

export interface VideoCardProps {
  channelTitle: string;
  title: string;
  url: string;
  onClick: () => void;
}

export const VideoCardForSideBar = ({
  channelTitle,
  title,
  url,
  onClick,
}: VideoCardProps) => {
  return (
    <Box
      display="flex"
      flexDir="row"
      alignItems="flex-start"
      onClick={onClick}
      margin="10px"
      height="120px"
      width="400px"
    >
      <Image
        marginRight="10px"
        src={url}
        alt="title"
        width="168px"
        height="94px"
      />
      <Box textAlign="left" width="300px">
        <Text as="b" fontSize="sm">
          {title && title.length > 54 ? title.substring(0, 54) + "..." : title}
        </Text>

        <Text fontSize="xs">
          {channelTitle && channelTitle.length > 24
            ? channelTitle.substring(0, 24) + "..."
            : channelTitle}
        </Text>
      </Box>
    </Box>
  );
};
