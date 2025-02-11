import React, { useEffect, useState } from "react";
import "../../SCSS/Comments.scss";
import { FaPhotoFilm } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Comments = ({ post }) => {
  const navigate = useNavigate();
  const [currrentTab, setCurrentTab] = useState("all");
  return (
    <div className="comments-container">
      <div className="comments-tabs">
        <button
          className={currrentTab === "all" && "active"}
          onClick={() => {
            setCurrentTab("all");
          }}
        >
          All
        </button>
        <button
          className={currrentTab === "newest" && "active"}
          onClick={() => {
            setCurrentTab("newest");
          }}
        >
          Newest
        </button>
        <button
          className={currrentTab === "elder" && "active"}
          onClick={() => {
            setCurrentTab("elder");
          }}
        >
          Elder
        </button>
      </div>

      {post.comments &&
        post.comments.map((comment) => {
          return (
            <div className="comment-section" key={comment.commentorId}>
              <div className="comment">
                <img
                  src={comment.commentorImage}
                  className="avatar"
                  onClick={() => {
                    navigate(`/users/${comment.commentorId}`, { state: post });
                  }}
                />
                <div className="comment-content">
                  <span
                    className="username"
                
                  >
                    {comment.commentorName}
                  </span>
                  <p className="text">{comment.content}</p>
                </div>
              </div>
              <div className="actions">
                <span className="timestamp">2h </span>
                <span className="actions-span">Like</span>
                <span className="actions-span">Reply</span>
              </div>
              {comment.replies &&
                comment.replies.map((reply) => {
                  return (
                    <div className="comments-replies" key={reply.replierId}>
                      <div className="comment-reply-container">
                        <img
                          src={reply.replierImage}
                          alt=""
                          onClick={() => {
                            navigate(`/users/${reply.replierId}`, {
                              state: post,
                            });
                          }}
                        />
                        <p
                          onClick={() => {
                            navigate(
                              `/posts/:${post.id}/:${comment.commentId}/replies`
                            );
                          }}
                        >
                          <strong>{reply.replierName} &nbsp;</strong>
                          <span>{comment.commentorName}</span> &nbsp;
                          {reply.replyContent.slice(0, 0)}...
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          );
        })}
    </div>
  );
};

export default Comments;
