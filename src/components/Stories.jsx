import { useNavigate } from "react-router-dom";
import "../SCSS/Story.scss";
import { useEffect, useState } from "react";
import StorySkeleton from "./Skeletons/StorySkeleton";

const storiesData = [
  {
    id: 1,
    quantity: 2,
    imgSrc: "https://randomuser.me/api/portraits/men/1.jpg",
    authorName: "Nayem",
  },

  {
    id: 3,
    quantity: 2,
    imgSrc: "https://randomuser.me/api/portraits/men/3.jpg",
    authorName: "Priya",
  },
  {
    id: 4,
    quantity: 2,
    imgSrc: "https://randomuser.me/api/portraits/men/6.jpg",
    authorName: "Priya",
  },
  {
    id: 2,
    quantity: 2,
    imgSrc: "https://randomuser.me/api/portraits/women/19.jpg",
    authorName: "Nayem",
  },
  {
    id: 1,
    quantity: 2,
    imgSrc: "https://randomuser.me/api/portraits/men/1.jpg",
    authorName: "Nayem",
  },
];

export default function Stories() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);

  return (
    <div className="stories-container">
      <div className="story-item" style={{ position: "relative" }}>
        <img
          src="owener.jpeg"
          style={{ height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            height: "60px",
            width: "100%",
            backgroundColor: "#cdd",
            margin: "0 auto",
            display: "flex",
            borderRadius: "0 0 8px 8px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            onClick={() => {
              navigate("/createstory");
            }}
            style={{
              height: "27px",
              width: "27px",
              borderRadius: "50%",
              backgroundColor: "cadetblue",
              fontSize: "25px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "-38px",
              color: "whitesmoke",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            +
          </p>
          <p style={{ fontSize: "15px", color: "rgba(10,10,10,.7)" }}>
            Create story
          </p>
        </div>
      </div>
      {!loading ? (
        storiesData.map((story) => (
          <div className="story-item" key={story.id} onClick={() => {}}>
            <div className="quantity">
              <img src={story.imgSrc} alt="" />
            </div>
            <img src={story.imgSrc} alt={story.authorName} />
            {/* <div className="authorname">{story.authorName}</div> */}
          </div>
        ))
      ) : (
        <StorySkeleton />
      )}
    </div>
  );
}
