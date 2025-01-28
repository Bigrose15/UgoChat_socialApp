import { Flex, Text, Box } from "@chakra-ui/react";
import { BsSend, BsRepeat, BsChat } from "react-icons/bs";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import { useState, useEffect } from "react";

const Actions = () => {
  // Use useState to manage the "liked" state
  const [postIsLiked, setPostIsLiked] = useState(false);

  // use useState to manage the number of likes
  const [likesCount, setLikesCount] = useState("");

  //UseEffect to update the likes count and postIsLiked state
  useEffect(() => {}, [postIsLiked, likesCount]);

  // Toggle the "liked" state when the heart icon is clicked for change of color and count
  const handleLikeClick = () => {
    postIsLiked ? setLikesCount(likesCount - 1) : setLikesCount(likesCount + 1);
    setPostIsLiked(!postIsLiked);
  };

  return (
    <>
      <Flex
        gap={"2"}
        fontSize={"md"}
        my={"2"}
        onClick={(e) => e.preventDefault()}
        alignItems={"center"}
      >
        {/* Function to render the heart icon based on the "liked" state */}
        {postIsLiked ? (
          <FaHeart color="red" onClick={handleLikeClick} />
        ) : (
          <FaRegHeart onClick={handleLikeClick} />
        )}
        <BsChat aria-label="comment" />
        <BsRepeat />
        <BsSend />
      </Flex>

      {/*Post Stats*/}
      <Flex gap={"2"} alignItems={"center"}>
        {/*Post Replies*/}
        <Text color={"gray.light"} fontSize={"sm"}>
          {likesCount} likes
        </Text>
        <Box w={"0.5"} h={"0.5"} borderRadius={"full"} bg={"gray.light"}></Box>
        {/*Post Likes*/}
        <Text color={"gray.light"} fontSize={"sm"}>
          replies
        </Text>
      </Flex>
    </>
  );
};

export default Actions;
