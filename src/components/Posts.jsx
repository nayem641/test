



import { useEffect, useState } from "react";
import FeedSkeleton from "./Skeletons/FeedSkeleton";
import Post from "./POSTS/Post";
import { xyz } from "../../dummypost";
import Test from "./POSTS/Test";
export default function Posts() {
 
  const [posts, setPostData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  
        setTimeout(() => { 
          setPostData(xyz);
          setLoading(false);
        }, 500);
 
  }, []);

  return ( 
    <>
    {/* <Test  /> */}
      { posts && posts.map((post) => <Post post={post} />)}
      {loading && (
        <>
          <FeedSkeleton />
          <FeedSkeleton />
        </> 
      )}
    </>
  );
}    
 
//  const posts = [
//    {
//      id: 2,
//      author: "John Doe",
//      authorId: 101,
//      date: "June 13",
//      header: "lorem ipsum dolar sit amit the",
//      description:
//        "Minimalism is about focusing on what truly matters. By removing clutter, .",
//      img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&cs=tinysrgb&fit=crop&w=1080&h=720&q=80",
//    },
//    {
//      id: 3,
//      author: "Jane Smith",
//      authorId: 102,
//      date: "June 14",
//      description:
//        "Innovation in technology is reshaping our world at an unprecedented pace. From artificial intelligence to sustainable energy solutions, these ",
//      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=crop&w=1080&h=720&q=80",
//    },
//    {
//      id: 8,
//      header: "The Colors of Autumn",
//      author: "Daniel Brown",
//      authorId: 103,
//      date: "June 19",
//      description:
//        "Autumn isnd find beauty in letting go of the old to welcome the new.",
//      img: "https://images.unsplash.com/photo-1506765515384-028b60a970df?crop=entropy&cs=tinysrgb&fit=crop&w=1080&h=720&q=80",
//    },
//    {
//      id: 12,
//      header: "The Allure of the Desert",
//      author: "Olivia Perez",
//      authorId: 104,
//      date: "June 20",
//      description: "",
//      img: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?crop=entropy&cs=tinysrgb&fit=crop&w=1080&h=720&q=80",
//    },

//    {
//      id: 18,
//      header: "The Beauty of the Night Sky",
//      author: "Stella Novak",
//      authorId: 106,
//      date: "June 28",
//      description:
//        "The night sky, filled with countless stars, reminds us of the vastness of the universe and our place within it.",
//      img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=crop&w=1080&h=720&q=80",
//    },
//    {
//      id: 21,
//      header: "The Power of Music",
//      author: "Adele White",
//      authorId: 107,
//      date: "July 2",
//      description:
//        "Music has the ability to transcend boundaries, evoke emotions, and connect people from all walks of life.",
//      img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?crop=entropy&cs=tinysrgb&fit=crop&w=1080&h=720&q=80",
//    },
//  ];

//  <div className="posts-container" key={post.id}>
//    <div className="post-author">
//      <div className="post-author-info">
//        <img
//          src={post.authorImage ? post.authorImage : "/author.jpeg"}
//          alt="Author"
//          onClick={() => {
//            navigate(`/users/${post.authorId}`);
//          }}
//        />
//        <div>
//          <strong>
//            <Link
//              to={`/users/${post.authorId}`}
//              style={{
//                display: "flex",
//                justifyContent: "center",
//                alignItems: "center",
//              }}
//            >
//              {post.fullName}
//              {post.isVerified && (
//                <MdVerified
//                  style={{
//                    color: "green",
//                    marginLeft: "7px",
//                  }}
//                />
//              )}
//            </Link>
//          </strong>
//          <p style={{ display: "flex", alignItems: "center" }}>
//            {post.date ? post.date : "june 23"} &nbsp;&nbsp;
//            <FaGlobeEurope style={{ fontSize: "13px" }} />
//          </p>
//        </div>
//      </div>
//      <div className="post-author-control">
//        <BsThreeDots
//          className="threedot-icon"
//          onClick={() => togglePopup(post.id)}
//        />
//      </div>
//    </div>
//    <hr
//      style={{
//        color: "rgba(10,10,10,.08)",
//        width: "95%",
//        margin: "0px auto -5px auto",
//      }}
//    />
//    <div
//      className="post-body"
//      onClick={() => {
//        navigate(`/posts/${post.id}`, { state: post });
//      }}
//    >
//      <div className="post-description">
//        <span>{post.header}</span>
//        <p>{post.description}</p>
//      </div>
//      <div className="post-image">
//        {post.image && (
//          <img src={post.image} alt="Post Content" loading="lazy" />
//        )}
//        {post.video && (
//          <video controls>
//            <source src={post.video} type="video/mp4" />
//          </video>
//        )}
//      </div>
//    </div>

//    {showemoji === post.id && (
//      <div
//        className="emoji-popup"
//        style={{
//          position: "absolute",
//          bottom: "38px",
//          left: "8%",
//          backgroundColor: "rgba(255, 255, 255,.7)",
//          backdropFilter: "blur(5px)",
//          padding: "1px 10px",
//          borderRadius: "15px 15px 15px 3px",
//          display: "flex",
//          gap: "8px",
//          justifyContent: "space-between",
//          // width: "70%",
//          // marginLeft:"20px"
//        }}
//      >
//        {/* Emoji options */}
//        <span
//          onClick={() =>
//            handleEmojiSelect(post.id, <BiSolidLike style={{ color: "blue" }} />)
//          }
//          style={{ fontSize: "27px" }}
//        >
//          <BiSolidLike style={{ color: "blue" }} />
//        </span>
//        <span
//          onClick={() => handleEmojiSelect(post.id, "❤️")}
//          style={{ fontSize: "27px" }}
//        >
//          ❤️
//        </span>
//        <span
//          onClick={() => handleEmojiSelect(post.id, "😢")}
//          style={{ fontSize: "27px" }}
//        >
//          😢
//        </span>
//        <span
//          onClick={() => handleEmojiSelect(post.id, "😡")}
//          style={{ fontSize: "27px" }}
//        >
//          😡
//        </span>
//        <span
//          onClick={() => handleEmojiSelect(post.id, "😂")}
//          style={{ fontSize: "27px" }}
//        >
//          😂
//        </span>
//        <span
//          onClick={() => handleEmojiSelect(post.id, "😍")}
//          style={{ fontSize: "27px" }}
//        >
//          😍
//        </span>
//      </div>
//    )}

//    {/* Like Button Section */}
//    <div className="post-interactions">
//      <div className="like-button" onClick={() => toggleEmoji(post.id)}>
//        {!likedEmojis[post.id] ? (
//          <>
//            <span style={{ fontSize: "25px" }}>
//              <BiLike />
//            </span>
//            <span>{post.likes}</span>
//          </>
//        ) : (
//          <>
//            <span style={{ fontSize: "25px" }}>
//              {likedEmojis[post.id] || <BiLike />}
//            </span>
//            <span>You</span>
//          </>
//        )}
//      </div>
//      <div
//        className="comment-button"
//        onClick={() => {
//          navigate(`/posts/${post.id}`, { state: post });
//        }}
//      >
//        <BiCommentDetail />
//        <span>{post.comments.length}</span>
//      </div>
//      <div className="share-button">
//        <PiShareFat />
//        <span>{post.shares}</span>
//      </div>
//    </div>

//    {/* Post Options Popup */}
//    {activePopup === post.id && (
//      <div
//        className="popup-container"
//        onClick={() => {
//          togglePopup();
//        }}
//      >
//        <div className="popup">
//          <div className="popup-header">
//            <div className="drag-handle"></div>
//          </div>

//          <div className="popup-item">
//            <div style={{ color: "cadetblue" }}>
//              <FaPlusSquare className="popup-item-icon" />
//            </div>
//            <span>Interested</span>
//          </div>
//          <div className="popup-item">
//            <div style={{ color: "crimson" }}>
//              <FaMinusSquare className="popup-item-icon" />
//            </div>
//            <span>Not interested</span>
//          </div>
//          <div className="popup-item">
//            <div style={{ color: "chocolate" }}>
//              <FaSave className="popup-item-icon" />
//            </div>
//            <span>Save Post</span>
//          </div>
//          <div className="popup-item">
//            <div style={{ color: "darkblue" }}>
//              <FaShareSquare className="popup-item-icon" />
//            </div>
//            <span>Share</span>
//          </div>
//          <div className="popup-item">
//            <div style={{ color: "coral" }}>
//              <MdReport className="popup-item-icon" />
//            </div>
//            <span>Report Post</span>
//          </div>

//          <div className="popup-item">
//            <div style={{ color: "darkcyan" }}>
//              <MdNotificationAdd className="popup-item-icon" />
//            </div>
//            <span>On Notification for this post</span>
//          </div>
//          <div className="popup-item link">
//            <div style={{ color: "rgba(0,0,0,.7)" }}>
//              <FaLink className="popup-item-icon" />
//            </div>
//            <span>Copy Link</span>
//          </div>
//        </div>

//        <div className="popup-overlay" onClick={closePopup}></div>
//      </div>
//    )}
//  </div>;


