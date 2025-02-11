import { useState } from "react";
import "../SCSS/Header.scss";
import { PiUserSwitchFill } from "react-icons/pi";
import { MdOutlineMenuOpen } from "react-icons/md";
import { motion } from "framer-motion";
import {
  IoIosCreate,
  SiStorybook,
  IoSearch,
  FaShareSquare,
  SiWish,
  GiHamburgerMenu,
  FaPlusCircle,
  FaUserTag,
  IoSettings,
  FaAddressCard,
  FcAbout,
  FaHistory,
  IoLogOut,
  FcPrivacy,
  MdContactSupport,
  MdCelebration,
  RxCrossCircled,
  FaArrowLeft,
} from "../icons";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";

export default function Header() {
  const navigate = useNavigate();
  const [menuPopupVisible, setMenuPopupVisible] = useState(false);
  const [searchPopup, setSearchPopup] = useState(false);
  const [users, setUsers] = useState([
    { name: 'John Doe', avatar: 'https://i.pravatar.cc/150?img=1', id: 1 },
    { name: 'Jane Smith', avatar: 'https://i.pravatar.cc/150?img=2', id: 2 },
    { name: 'Mike Johnson', avatar: 'https://i.pravatar.cc/150?img=3', id: 3 },
    { name: 'Sarah Williams', avatar: 'https://i.pravatar.cc/150?img=4', id: 4 },
    { name: 'David Brown', avatar: 'https://i.pravatar.cc/150?img=5', id: 5 },
    { name: 'Emily Davis', avatar: 'https://i.pravatar.cc/150?img=6', id: 6 },
    { name: 'Michael Wilson', avatar: 'https://i.pravatar.cc/150?img=7', id: 7 },
    { name: 'Lisa Anderson', avatar: 'https://i.pravatar.cc/150?img=8', id: 8 },
    { name: 'Robert Taylor', avatar: 'https://i.pravatar.cc/150?img=9', id: 9 },
    { name: 'Jennifer Martin', avatar: 'https://i.pravatar.cc/150?img=10', id: 10 }
  ]);

  const handleRemoveUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const toggleMenuPopup = () => {
    setSearchPopup(false);
    setMenuPopupVisible(!menuPopupVisible);
  };
  
  const toggleSearchPopup = () => {
    setMenuPopupVisible(false);
    setSearchPopup(!searchPopup);
  };
  const [isToggled, setIsToggled] = useState(false);

  const toggleButtonStyle = {

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "60px",
    height: "30px",
    backgroundColor: isToggled ? "#4CAF50" : "#ccc",
    borderRadius: "15px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    position: "relative",
    margin:"auto 0"
  };

  const toggleCircleStyle = {
    width: "25px",
    height: "25px",
    backgroundColor: "#fff",
    borderRadius: "50%",
    position: "absolute",
    top: "2.5px",
    left: isToggled ? "32px" : "2.5px",
    transition: "left 0.3s ease",
  };

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <div className="header-container">
      <div className="logo">
        <h1>inprBOOK</h1>
      </div>
      <div className="header-icon-section">
        <IoSearch
          className="header-icon"
          onClick={() => {
            toggleSearchPopup();
          }}
        />

        <FaPlusCircle
          className="header-icon"
          onClick={() => {
            navigate("/createpost");
          }}
        />

        {!menuPopupVisible ? (
          <GiHamburgerMenu
            className="header-icon"
            onClick={() => {
              [];
              toggleMenuPopup();
            }}
          />
        ) : (
          <MdOutlineMenuOpen
            className="header-icon"
            onClick={() => {
              toggleMenuPopup();
            }}
          />
        )}
        {menuPopupVisible === true && (
          <div className="menu-popup">
            {/* <div className="author">
              <img src="/pp.avif" alt="author" />
              <h3>Nayem</h3>
            </div> */}
            <div
              className="menuPopup-item"
              onClick={() => {
                navigate("/profile");
              }}
            >
              <div>
                <FaAddressCard className="myprofile" />
              </div>
              <div> My Profile</div>
            </div>

            <div
              className="menuPopup-item"
              onClick={() => {
                navigate("/about");
              }}
            >
              <div>
                <FcAbout className="aboutus" />
              </div>
              <div>About Us</div>
            </div>

            <div
              className="menuPopup-item"
              onClick={() => {
                navigate("/settings");
              }}
            >
              <div>
                <IoSettings className="settings" />
              </div>
              <div>Settings</div>
            </div>
            <div
              className="menuPopup-item"
              onClick={() => {
                navigate("/login");
              }}
            >
              <div>
                <PiUserSwitchFill className="reportissues" />
              </div>
              <div>Login new</div>
            </div>

            <div
              className="menuPopup-item"
              onClick={() => {
                alert("logged out");
              }}
            >
              <div>
                <IoLogOut className="logout" />
              </div>
              <div>Log Out</div>
            </div>
          </div>
        )}

        {searchPopup === true && (
          <motion.div
            className="search-popup"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="inputarea"
              style={{
                display: "flex",
                alignItems: "center",
                padding: "15px",
                background: "rgba(255, 255, 255, 0.9)",
                borderRadius: "3px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(10px)",
                width: "100vw",
              }}
            >
              <div
                className="back"
                style={{
                  marginRight: "15px",
                  cursor: "pointer",
                  color: "#3498db",
                }}
              >
                <FaArrowLeft
                  onClick={() => {
                    toggleSearchPopup();
                  }}
                />
              </div>
              <input
                type="text"
                name=""
                placeholder="Search users, posts, videos"
                style={{
                  flex: 1,
                  padding: "10px",
                  border: "none",
                  borderRadius: "8px",
                  background: "rgba(236, 240, 241, 0.8)",
                  fontSize: "1rem",
                  color: "#2c3e50",
                  outline: "none",
                  transition: "all 0.3s ease",
                }}
              />
              <div
                className="search"
                style={{
                  marginLeft: "15px",
                  color: "#3498db",
                  fontSize: "1.2rem",
                }}
              >
                <IoSearch />
              </div>
            </div>
            <div className="output-area">
              {users.length > 0 ? (
                <ul className="users-list">
                  {users.map((user) => (
                    <motion.li
                      className="user-item"
                      key={user.id}
                      style={{
                        width: "100%",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <div className="user-info">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="user-avatar"
                          style={{
                            width: "45px",
                            height: "45px",
                            borderRadius: "50%",
                            marginRight: "15px",
                            border: "2px solid #3498db",
                          }}
                        />
                        <span className="user-name">{user.name}</span>
                      </div>
                      <IoClose
                        className="close-icon"
                        onClick={() => handleRemoveUser(user.id)}
                        style={{
                          cursor: "pointer",
                          color: "#e74c3c",
                          fontSize: "1.3rem",
                        }}
                      />
                    </motion.li>
                  ))}
                </ul>
              ) : (
                <div
                  className="no-users"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "2rem",
                    backdropFilter: "blur(10px)",
                    borderRadius: "10px",
                    textAlign: "center",
                  }}
                >
                  <FaUserFriends
                    style={{
                      fontSize: "4rem",
                      color: "#3498db",
                      marginBottom: "1rem",
                    }}
                  />
                  <p style={{ fontSize: "1.2rem", color: "#2c3e50" }}>
                    No results found! Try searching for users, videos, groups,
                    or pages 🔍
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
        <style jsx>{`
          .user-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 8px 12px;
            border-bottom: 1px solid #eee;
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(10px);
          }

          .user-info {
            display: flex;
            align-items: center;
          }

          .user-name {
            font-size: 1.1rem;
            color: #2c3e50;
            font-weight: 500;
          }

          .users-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }
        `}</style>
      </div>
    </div>
  );
}