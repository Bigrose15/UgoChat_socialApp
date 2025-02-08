STEPS ON HOW THIS APP WAS DEVELOP

1. i CREATED MY MY APP FOLDER ()
   UGOCHAT, THEN CD INTO THE FOLDER

2. NPM CREATE REACT VITE (npm create vite@latest .)

3. I did the necessary clean ups

4. I INSTALLED THE CHAKRA UI VERSION 2.10 using (npm i @chakra-ui/react@2 @emotion/react @emotion/styled framer-motion) from chakra ui library library documentation for my UI interface

CHAKRA UI USED ITEMS:

1. Theme = for theme selection or features
2. Stack = Stack is a layout component used to group elements together and apply a space between them. To use this I imported this import {VStack} from '@chakra-ui/react' I also used the flex, avatar, and box layout too
   I also imported all theseimport {
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
   import { SiEagle } from "react-icons/si"; I used this for the eagle icon on the user header or profile header. gotten from react icons
   import { CgMoreO } from "react-icons/cg"; I used this for the more icon on the user header or profile header. gotten from react icons too
   BsThreeDot, BsChat, and more...

I also installed npm i react-router-dom react-icons

4. I set up my App.js and created custom in my main.js using chakraUI

5. I CREATED THESE COMPONENTS:

   1. Header.jsx for theme selection via the icon at the top
   2. UserHeader.jsx for my each user profile header layout
   3. UserPost.jsx for users post interface
   4. BsThreeDot for copy of links and ...
   5. Actions.jsx for like, send, repost and share icons
   6. Comments components for handling of users comment

6. I CREATED THESE PAGES:

   1. Userpage.jsx layout for each users page
   2. PostPage.jsx layout for post

   FOR THE BACKEND

   1. I INTIALIZED NPM INIT -Y for the installation of the neccessary dependencies, and package.json file

   2. I Installed this these depencies too express, jsonwebtoken, bcryptjs, dotenv, mongoose, cookie-parser

   3. I also installed nodemon using npm install -D nodemon, for instant server refresh, using npm,the D there mean install nodemon as development depencies, and not for production

   4. In the package.json I added type as module to the depencies so I can be able to use import statement for the express instead of const
