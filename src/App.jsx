import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import CreatePost from "./components/POSTS/CreatePost";
import Test from "./components/POSTS/Test";
import FeedSkeleton from "./components/Skeletons/FeedSkeleton";
import StorySkeleton from "./components/Skeletons/StorySkeleton";
import Stories from "./components/Stories";
import "./styles.scss";

export default function App() {
  return (
    <div className="main-container">
      <Header />
      <Navbar />   
      {/* <CreatePost/> */}
      {/* <StorySkeleton/> */}
      <Stories />
      {/* <FeedSkeleton/> */}
      {/* <Test/> */}
      <Posts />
    </div>
  );
}
