import { Flex, Avatar, Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import Actions from "./Actions";

const UserPost = ({ likes, replies, postImg, postTitle }) => {
  return (
    <Link to={"/Lawrenceugo/post/1"}>
      {/*Parent Flex*/}
      <Flex gap={3} mb={4} py={5}>
        {/*Child Flex 1*/}
        <Flex flexDirection={"column"} alignItems={"center"}>
          <Avatar name="Lawrence Ugo" src="/LawrenceUgo.png" size={"md"} />
          <Box w="1px" h={"full"} bg="gray.light" py="2"></Box>
          <Box position={"relative"} w={"full"}>
            <Avatar
              size="xs"
              name="Christian Nwamba"
              src="https://bit.ly/code-beast"
              position="absolute"
              top="0px"
              left="15px"
              padding="2px"
            />

            <Avatar
              size="xs"
              name="Segun Adebayo"
              src="https://bit.ly/sage-adebayo"
              position="absolute"
              bottom="0px"
              right="-5px"
              padding="2px"
            />

            <Avatar
              size="xs"
              name="dan abramov"
              src="https://bit.ly/dan-abramov"
              position="absolute"
              bottom="0px"
              left="4px"
              padding="2px"
            />
          </Box>
        </Flex>

        {/*Child Flex 2*/}

        <Flex flex={1} flexDirection={"column"} gap={2}>
          <Flex justifyContent={"space-between"} w={"full"}>
            {/*Post Author Header*/}
            <Flex w={"full"} alignItems={"center"}>
              <Text fontSize="sm" fontWeight="bold">
                Lawrence Ugo
              </Text>
              <Image src="/verified.svg" w={4} h={4} ml={1}></Image>
            </Flex>
            <Flex gap="4" alignItems={"center"}>
              <Text fontSize="sm" color="gray.light">
                2m
              </Text>
              <BsThreeDots />
            </Flex>
          </Flex>

          {/*Post Title*/}
          <Text fontSize="sm">{postTitle}</Text>
          {/*Post Image*/}
          {postImg && (
            <Box
              borderRadius={"6"}
              overflow={"hidden"}
              border={"1px solid"}
              borderColor={"gray.light"}
            >
              <Image src={postImg} w={"full"} />
            </Box>
          )}
          <Flex gap={"{3}"} my={"1"}>
            <Actions />
          </Flex>

          {/*Post Stats*/}
          <Flex gap={"2"} alignItems={"center"}>
            {/*Post Replies*/}
            <Text color={"gray.light"} fontSize={"sm"}>
              {likes} likes
            </Text>
            <Box
              w={"0.5"}
              h={"0.5"}
              borderRadius={"full"}
              bg={"gray.light"}
            ></Box>
            {/*Post Likes*/}
            <Text color={"gray.light"} fontSize={"sm"}>
              {replies} replies
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Link>
  );
};

export default UserPost;
