import { Avatar, Text, Flex, Divider } from "@chakra-ui/react";
import BsThreeDot from "./BsThreeDot";
import Actions from "./Actions";

const Comments = ({ userAvatar, createdAt, Comments, username }) => {
  return (
    <>
      <Flex gap={4} py={2} my={2} w={"full"}>
        {/* UserImage */}
        <Avatar src={userAvatar} size={"sm"} />
        {/*  */}
        <Flex gap={1} w={"full"} flexDirection={"column"}>
          {/* userHeader Section */}
          <Flex
            w={"full"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            {/* username */}
            <Text fontSize="sm" fontWeight="Bold">
              {username}
            </Text>
            <Flex gap={2} alignItems={"center"}>
              <Text fontSize={"sm"} color={"gray.light"}>
                {createdAt}
              </Text>
              <BsThreeDot />
            </Flex>
          </Flex>
          <Text>{Comments}</Text>
          <Actions />
        </Flex>
      </Flex>
      <Divider />
    </>
  );
};

export default Comments;
