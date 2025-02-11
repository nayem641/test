import { Link, useNavigate } from "react-router-dom";
import "../../SCSS/feedSkeleton.scss";

export default function FeedSkeleton() {
  const posts = [
    {
      id: 2,
      author: "John Doe",
      date: "June 13",
      description:
        "Minimalism is about focusing on what truly matters. By removing clutter, .",
      img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&cs=tinysrgb&fit=crop&w=1080&h=720&q=80",
    },
    // {
    //   id: 3,
    //   author: "Jane Smith",
    //   date: "June 14",
    //   description:
    //     "Innovation in technology is reshaping our world at an unprecedented pace. From artificial intelligence to sustainable energy solutions, these ",
    //   img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=crop&w=1080&h=720&q=80",
    // },
  ];

  const navigate = useNavigate();

  return (
    <>
      {posts.map((post) => (
        <div className="fs-posts-container" key={post.id}>
          <div className="fs-post-author">
            <div className="fs-post-author-info">
              <div className="fs-authorpp"></div>
              <div>
                <div></div>
                <p></p>
              </div>
            </div>
          </div>
          <div className="fs-post-body">
            <div className="fs-post-description">
              <h4></h4>
              <p></p>
            </div>
            <div className="fs-post-image">
              <div className="fs-img"></div>
            </div>
          </div>
          <div className="fs-post-interactions">
            <div className="fs-like-button"></div>
            <div
              className="fs-comment-button"
              onClick={() => {
                navigate(`#`);
              }}
            ></div>
            <div className="fs-share-button"></div>
          </div>
        </div>
      ))}
    </>
  );
}
