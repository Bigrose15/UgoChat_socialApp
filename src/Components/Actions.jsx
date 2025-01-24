import { Flex } from "@chakra-ui/react";
import { BsSend, BsRepeat, BsChat } from "react-icons/bs";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import { useState } from "react";

const Actions = () => {
  // Use useState to manage the "liked" state
  const [postIsLiked, setPostIsLiked] = useState(false);

  // Toggle the "liked" state
  const handleLikeClick = () => {
    setPostIsLiked(!postIsLiked);
  };
  return (
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
  );
};

export default Actions;
