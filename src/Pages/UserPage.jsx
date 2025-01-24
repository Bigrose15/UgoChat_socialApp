import UserHeader from "../Components/UserHeader";
import UserPost from "../Components/UserPost";
const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost
        likes={4000}
        replies={2000}
        postImg="/Lawrence@Gomycode.jpg"
        postTitle={"Welcome to UgoChat, We love to see you chat"}
      />
      <UserPost
        likes={1900}
        replies={900}
        postImg="/WIN_20241121_09_22_08_Pro.jpg"
        postTitle={"Let's talk about UgoChat"}
      />
      <UserPost
        likes={1700}
        replies={800}
        postImg="/20241204_093135.jpg"
        postTitle={"Lets talk about the future of chat here"}
      />
      <UserPost
        likes={1500}
        replies={500}
        postImg="/mee.png"
        postTitle={"Share your thoughts on UgoChat"}
      />
    </>
  );
};

export default UserPage;
