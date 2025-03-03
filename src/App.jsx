import { Container } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import UserPage from "./Pages/UserPage";
import PostPage from "./Pages/PostPage";
import Header from "./Components/Header";
import "./index.css";

function App() {
  return (
    <Container maxW="620px">
      <Header />
      {/* <UserHeader /> */}
      <Routes>
        <Route path="/:username" element={<UserPage />} />
        <Route path="/:username/post/:pId" element={<PostPage />} />
      </Routes>
    </Container>
  );
}

export default App;
