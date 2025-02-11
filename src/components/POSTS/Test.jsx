import { useEffect, useRef, useState } from "react";
import { BiCommentDetail, BiLike } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { FaGlobeEurope } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { PiShareFat } from "react-icons/pi";

const Test = () => {
  const [images] = useState([
    { url: "https://randomuser.me/api/portraits/women/48.jpg", fileName: "Image 2" },
    { url: "/prt.webp", fileName: "Image 1" },
    { url: "/author.jpeg", fileName: "Image 3" },
    { url: "bg.jpeg", fileName: "Image 4" },
    { url: "https://random.imagecdn.app/500/300?random=28", fileName: "Image 7" },
    { url: "/bg.jpeg", fileName: "Image 8" },
  ]);

  const [selectedImage, setSelectedImage] = useState(null);
  const scrollRef = useRef(null);

  // Handle click to view a single image
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Handle close of single image view
  const closeImageView = () => {
    setSelectedImage(null);
  };

  const scrollToImage = (direction) => {
    if (!scrollRef.current) return;

    const scrollContainer = scrollRef.current;
    const scrollWidth = scrollContainer.scrollWidth;
    const viewportWidth = window.innerWidth; // Get the current viewport width

    let newScrollPosition =
      scrollContainer.scrollLeft + direction * viewportWidth;

    // Make sure the scroll position doesn't exceed the total width of images
    if (newScrollPosition < 0) newScrollPosition = 0;
    if (newScrollPosition > scrollWidth - viewportWidth) {
      newScrollPosition = scrollWidth - viewportWidth;
    }

    scrollContainer.scrollTo({
      left: newScrollPosition,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;

      const scrollContainer = scrollRef.current;
      const viewportWidth = window.innerWidth; // Get the current viewport width

      // Calculate the nearest multiple of viewport width
      const scrollLeft = scrollContainer.scrollLeft;
      const nearestScrollPosition =
        Math.round(scrollLeft / viewportWidth) * viewportWidth;

      if (scrollLeft !== nearestScrollPosition) {
        // Smooth scroll to the nearest image
        scrollContainer.scrollTo({
          left: nearestScrollPosition,
          behavior: "smooth",
        });
      }
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
 
  return (
    <div className="posts-container" >
      <div className="post-author" id="body">
        <div className="post-author-info">
          <img src={"/prt.webp"} decode="async" alt="Author" loading="lazy" />
          <div>
            <strong>
              <h3
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Hello World
                <MdVerified
                  style={{
                    color: "green",
                    marginLeft: "7px",
                  }}
                />
              </h3>
            </strong>
            <p style={{ display: "flex", alignItems: "center" }}>
              {"june 23"} &nbsp;&nbsp;
              <FaGlobeEurope style={{ fontSize: "13px" }} />
            </p>
          </div>
        </div>
        <div className="post-author-control">
          <BsThreeDots className="threedot-icon" />
        </div>
      </div>
      <hr
        style={{
          color: "rgba(10,10,10,.08)",
          width: "95%",
          margin: "0px auto -5px auto",
        }}
      />
      <div className="post-body">
        <div className="post-description">
          <strong>#My favourite album</strong>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat cum
            culpa architecto?
          </p>
        </div>
        <div className="post-image">
          <div>
            <div
              style={{
                height: "auto",
                maxHeight: "360px",
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gridTemplateRows: "repeat(3, 1fr)",
                gap: "5px",
                backgroundColor: "#fff",
                position: "relative",
                gridTemplateAreas: `
            "section1 section2"
            "section1 section3"
            "section4 section5"
          `,
              }}
            >
              {/* Image Sections */}
              <div
                style={{
                  gridArea: "section1",
                  backgroundColor: "#ccc",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={images[0].url}
                  alt={images[0].fileName}
                  onClick={() => handleImageClick(images[0])}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                />
              </div>

              <div
                style={{
                  gridArea: "section2",
                  backgroundColor: "#ccc",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={images[1].url}
                  alt={images[1].fileName}
                  onClick={() => handleImageClick(images[1])}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                />
              </div>

              <div
                style={{
                  gridArea: "section3",
                  backgroundColor: "#ccc",
                  overflow: "hidden",
                }}
              >
                <img
                  src={images[2].url}
                  alt={images[2].fileName}
                  onClick={() => handleImageClick(images[2])}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                />
              </div>

              <div
                style={{
                  gridArea: "section4",
                  backgroundColor: "#ccc",
                  overflow: "hidden",
                }}
              >
                <img
                  src={images[3].url}
                  alt={images[3].fileName}
                  onClick={() => handleImageClick(images[3])}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                />
              </div>

              <div
                style={{
                  gridArea: "section5",
                  backgroundColor: "#ccc",
                  overflow: "hidden",
                }}
              >
                <img
                  src={images[4].url}
                  alt={images[4].fileName}
                  onClick={() => handleImageClick(images[4])}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>

            {/* Overlay for More than 5 Images */}
            {images.length > 5 && (
              <div
                style={{
                  position: "absolute",
                  top: "31%",
                  left: "40vw",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "#fff",
                  // height:"70px",
                  padding: "3px",
                  width: "70px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "bold",
                  borderRadius: "50%",
                }}
              >
                +{images.length - 5} more
              </div>
            )}

            {/* Full-Viewport Popup */}
            {selectedImage && (
              <div
                onClick={closeImageView}
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "100vh",
                  backgroundColor: "rgba(49, 58, 61, 0.99)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 1000,
                  padding: "20px",
                  boxSizing: "border-box",
                }}
              >
                {/* Popup Content */}
                <div
                  onClick={(e) => e.stopPropagation()} // Prevent closing popup when clicking on image
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {/* Horizontal Scroll for Images */}
                  <div
                    ref={scrollRef}
                    style={{
                      display: "flex",
                      overflowX: "scroll", // Enable scrolling
                      width: "100vw", // Full viewport width
                      scrollBehavior: "smooth", // Smooth scrolling effect
                    }}
                  >
                    {/* Display Images in the Popup */}
                    {images.map((image, index) => (
                      <img
                        key={index}
                        src={image.url}
                        alt={`Popup Image ${index}`}
                        style={{
                          width: "100vw", // Each image takes up the full viewport width
                          height: "80vh", // Set height to fit within the viewport
                          objectFit: "contain",
                          margin: "0", // No margin to prevent extra spacing
                          borderRadius: "10px",
                          cursor: "pointer",
                        }}
                      />
                    ))}
                  </div>

                  {/* Close Button */}
                  <button
                    onClick={closeImageView}
                    style={{
                      backgroundColor: "#ccc",
                      border: "none",
                      padding: "10px 20px",
                      borderRadius: "5px",
                      fontSize: "16px",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="post-interactions">
        <div className="like-button">
          <span style={{ fontSize: "25px" }}>
            <BiLike />
          </span>
          <span>1.5k</span>
        </div>
        <div className="comment-button">
          <BiCommentDetail />
          <span>2k</span>
        </div>
        <div className="share-button">
          <PiShareFat />
          <span>421</span>
        </div>
      </div>
    </div>
  );
};

export default Test;
