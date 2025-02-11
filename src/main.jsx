import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users from "./pages/tabs/Users.jsx";
import Videos from "./pages/tabs/Videos.jsx";
import MyProfile from "./pages/Author/MyProfile.jsx";
import Policy from "./pages/others/Policy.jsx";
import Report from "./pages/others/Report.jsx";
import About from "./pages/others/About.jsx";
import Notifications from "./pages/tabs/Notifications.jsx";
import Signup from "./pages/Author/Signup.jsx";
import Login from "./pages/Author/Login.jsx";
import NotFound from "./pages/others/NotFound.jsx";
import Settings from "./components/settings/Settings.jsx";
import UpdateProfile from "./pages/Author/UpdateProfile.jsx";
import SingleCommentPage from "./components/POSTS/SingleCommentPage.jsx";
import SinglePost from "./components/POSTS/SinglePost.jsx";
import Story from "./components/Story/Story.jsx";
import CreatePostPage from "./components/POSTS/CreatePostPage.jsx";
import UserProfile from "./components/users/UserProfile.jsx";
import EditPost from "./components/POSTS/EditPost.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateStory from "./components/Story/CreateStory.jsx";
import Messenger from "./pages/tabs/Messenger.jsx";


const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/users", element: <Users /> },
  { path: "/users/:id", element: <UserProfile /> },
  { path: "/messenger", element: <Messenger /> },
  { path: "/posts/:postid", element: <SinglePost /> },
  { path: "/posts/:postid/:commentid/replies", element: <SingleCommentPage/> },

  { path: "/videos", element: <Videos /> },
  { path: "/videos/:videoid", element: <SinglePost /> },

  // { path: "/stories", element: <Stories /> },
  { path: "/stories/:storyid", element: <Story /> },

  { path: "/createpost", element: <CreatePostPage /> },
  { path: "/editpost", element: <EditPost /> },
  { path: "/createstory", element: <CreateStory /> },

  { path: "/notifications", element: <Notifications /> },
  { path: "/profile", element: <MyProfile /> },
  { path: "/editprofile", element: <UpdateProfile /> },
  { path: "/settings", element: <Settings /> },
  { path: "/policy", element: <Policy /> },
  { path: "/report", element: <Report /> },
  { path: "/about", element: <About /> },

  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },

  { path: "*", element: <NotFound /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);
