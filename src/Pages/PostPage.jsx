import {
  Flex,
  Avatar,
  Image,
  Text,
  Box,
  Divider,
  Button,
} from "@chakra-ui/react";
import BsThreeDot from "../Components/BsThreeDot";
import Actions from "../Components/Actions";
import Comments from "../Components/Comments";

const PostPage = ({ postImg, postTitle }) => {
  return (
    <>
      <Flex>
        {/* Name, Image and Verified Icon section */}
        <Flex w={"full"} alignItems={"center"} gap={3}>
          <Avatar src="/LawrenceUgo.png" size={"md"} name={"Lawrence Ugo"} />
          <Flex alignItems={"center"}>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              Lawrence Ugo
            </Text>
            <Image src={"/verified.svg"} w={4} h={4} ml={2}></Image>
          </Flex>
        </Flex>
        {/* TimePosted and More Icon Section */}
        <Flex gap={4} alignItems={"center"}>
          <Text fontSize={"sm"} color={"gray.light"}>
            2m
          </Text>
          <BsThreeDot />
        </Flex>
      </Flex>

      {/* Post Text and Image section  */}
      <Text my={3}>Let's talk about Ugochat</Text>
      <Box
        borderRadius={6}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"gray.light"}
      >
        <Image src={"/Lawrence@Gomycode.jpg"} w={"full"} />
      </Box>
      <Actions />

      {/*Post Stats*/}
      {/* <Flex gap={"2"} alignItems={"center"}> */}
      {/*Post Replies*/}
      {/* <Text color={"gray.light"} fontSize={"sm"}>
          {likes} likes
        </Text> */}
      {/* <Box w={"0.5"} h={"0.5"} borderRadius={"full"} bg={"gray.light"}></Box> */}
      {/*Post Likes*/}
      {/* <Text color={"gray.light"} fontSize={"sm"}>
          {replies} replies
        </Text> */}
      {/* </Flex> */}
      <Divider my={4} />
      <Flex justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"xl"}>👋 👉</Text>
          <Text color={"orange.400"}>Get the app to explore features</Text>
        </Flex>
        <Button borderColor={"gray.dark"} border={"1px"}>
          Get 🐤
        </Button>
      </Flex>
      <Divider my={4} />
      <Comments
        Comments="looks really good"
        createdAt="1d"
        username="ugo Law"
        likes={100}
        userAvatar="/LawrenceUgo.png"
      />
      <Comments
        Comments="It's  a great App"
        createdAt="1d"
        username="Abramov"
        likes={50}
        userAvatar="https://bit.ly/dan-abramov"
      />
      <Comments
        Comments="I love the App"
        createdAt="1d"
        username="Sage Adebayo"
        likes={10}
        userAvatar="https://bit.ly/sage-adebayo"
      />
    </>
  );
};

export default PostPage;
