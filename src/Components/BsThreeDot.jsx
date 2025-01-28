import { BsThreeDots } from "react-icons/bs";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Portal,
  useToast,
  Flex,
} from "@chakra-ui/react";
const BsThreeDot = () => {
  //Function To Prevent Default Action
  const handleMenuClick = (e) => {
    e.preventDefault();
  };
  //useToast Hook from Chakra UI
  const toast = useToast();
  //Function to copy the URL to the clipboard
  const copyURL = (description) => {
    const presentURL = window.location.href;
    navigator.clipboard.writeText(presentURL).then(() => {
      toast({
        title: "Copied",
        status: "success",
        description: description,
        duration: 4000,
        isClosable: true,
      });
    });
  };
  return (
    <Flex onClick={handleMenuClick}>
      <Menu>
        <MenuButton>{<BsThreeDots />}</MenuButton>
        <Portal>
          <MenuList>
            <MenuItem onClick={() => copyURL("post link copied")}>
              Copy link to post
            </MenuItem>
            <MenuItem onClick={() => copyURL("post saved successfully")}>
              Save
            </MenuItem>
          </MenuList>
        </Portal>
      </Menu>
    </Flex>
  );
};

export default BsThreeDot;
