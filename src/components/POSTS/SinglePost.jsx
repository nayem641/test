import { Link, useLocation, useNavigate } from "react-router-dom";

import Comments from "./Comments";
import Post from "./Post";
import { IoArrowBack } from "react-icons/io5";
import { useEffect, useState } from "react";
import FeedSkeleton from "../Skeletons/FeedSkeleton";
import SkeletonLoader from "../Skeletons/Loader";

export default function SinglePost() {
  const post = useLocation().state;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [pl,setpl]=useState(true)
  useEffect(() => {
    setTimeout(() => {
          setpl(false);

    }, 150);
    setTimeout(() => {
      setLoading(false);
    }, 150);
  }, []);
  return (
    <div>
      <div
        style={{
          padding: "5px 10px ",
          display: "flex",
          alignItems: "center",
          gap: "3px",
          cursor: "pointer",
        }}
        onClick={() => {
          navigate("/");
        }}
      >
        <IoArrowBack
          style={{
            fontSize: "30px",
          }}
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      {post && !pl ? <Post post={post} /> : <FeedSkeleton />}
      {loading ? <SkeletonLoader /> : <Comments post={post} />}
    </div>
  );
}

