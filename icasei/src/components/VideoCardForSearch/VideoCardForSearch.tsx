import { Box, Image, Text } from "@chakra-ui/react";

export interface VideCardProps {
  channelTitle: string;
  title: string;
  url: string;
  onClick: () => void;
}

export const VideoCardForSearch = ({
  channelTitle,
  title,
  url,
  onClick,
}: VideCardProps) => {
  return (
    <Box
      display="flex"
      flexDir="column"
      alignItems="center"
      width="420px"
      height="340px"
      padding="20px"
      margin="10px"
      maxW="300px"
      onClick={onClick}
      _hover={{
        background: "#4A5568",
      }}
    >
      <Image src={url} alt="title" width="300px" height="190px" />
      <Box padding="10px" textAlign="left" width="300px">
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
