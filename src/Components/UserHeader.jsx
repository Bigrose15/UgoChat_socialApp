import {
  Box,
  Flex,
  Avatar,
  VStack,
  Text,
  Link,
  MenuButton,
  Menu,
  MenuItem,
  MenuList,
  Portal,
  useToast,
} from "@chakra-ui/react";
import { SiEagle } from "react-icons/si";
import { CgMoreO } from "react-icons/cg";

const UserHeader = () => {
  const toast = useToast();

  const copyURL = () => {
    const presentURL = window.location.href;
    navigator.clipboard.writeText(presentURL).then(() => {
      toast({
        title: "Copied",
        status: "success",
        description: "profile link copied",
        duration: 4000,
        isClosable: true,
      });
    });
  };
  return (
    //USER PROFILE HEADER
    <VStack gap={4} align={"start"}>
      <Flex justify={"space-between"} w={"full"}>
        {/* Profile Name (Box Left) */}
        <Box>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            Lawrence Ugo
          </Text>
          {/*Text Flex*/}
          <Flex alignItems={"center"} gap={2}>
            <Text fontSize={"sm"}>Ugo</Text>
            <Text
              fontSize={"xs"}
              bg={"gray.dark"}
              color={"gray.light"}
              p={1}
              borderRadius={"full"}
            >
              ugochat.com
            </Text>
          </Flex>
        </Box>

        {/* Profile Image (Box Right) */}

        <Box>
          <Avatar
            name="Lawrence Ugo"
            src="/LawrenceUgo.png"
            size={{
              base: "md",
              md: "xl",
            }}
          />
        </Box>
      </Flex>

      {/* PROFILE BIO */}
      <Text>Founder UgoChat, Chief Executive Officer of LuonaTech</Text>

      {/* Profile Followers */}
      <Flex justifyContent={"space-between"} w={"full"}>
        <Flex gap={2} alignItems={"center"}>
          <Text color={"gray.light"}>4.5k followers</Text>
          <Box w={1} bg={"gray.light"} borderRadius={"full"}>
            .
          </Box>
          <Link color={"gray.light"}>educationinfo.com.ng</Link>
        </Flex>

        {/* Profile Icons */}
        <Flex>
          <Box className="Ugo-icon">
            <SiEagle size={"24px"} cursor={"pointer"} />
          </Box>

          <Box className="more-icon">
            {/*second profle icon*/}
            <Menu>
              <MenuButton>
                <CgMoreO size={"24px"} cursor={"pointer"} />
              </MenuButton>
              {/* Alert Message */}
              <Portal>
                <MenuList bg={"gray.dark"}>
                  <MenuItem
                    bg={"gray.dark"}
                    color={"gray.200"}
                    onClick={copyURL}
                  >
                    Copy link
                  </MenuItem>
                </MenuList>
              </Portal>
            </Menu>
          </Box>
        </Flex>
      </Flex>

      {/* Profile Tabs */}
      <Flex w={"full"}>
        <Flex
          flex={1}
          cursor={"pointer"}
          borderBottom={"1.5px solid white"}
          justifyContent={"center"}
          pb={3}
        >
          <Text fontWeight={"bold"}>Ugochats</Text>
        </Flex>

        <Flex
          flex={1}
          color={"gray.light"}
          cursor={"pointer"}
          borderBottom={"1.5px solid gray"}
          justifyContent={"center"}
          pb={3}
        >
          <Text fontWeight={"bold"}>Replies</Text>
        </Flex>
      </Flex>
    </VStack>
  );
};

export default UserHeader;
