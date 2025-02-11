import { useState, useRef, useEffect } from "react";
import {
  BiSend,
  BiImage,
  BiFile,
  BiMicrophone,
  BiDotsVerticalRounded,
  BiSearch,
  BiArrowBack,
} from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

export default function Messenger() {
  const navigate = useNavigate();
  const messagesEndRef = useRef(null);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "John Doe",
      avatar: "https://i.pravatar.cc/150?img=1",
      content: "Hey, how are you?",
      timestamp: "09:30 AM",
      isOwn: false,
    },
    {
      id: 2,
      sender: "Me",
      avatar: "https://i.pravatar.cc/150?img=4",
      content: "I'm good! How about you?",
      timestamp: "09:31 AM",
      isOwn: true,
    },
    {
      id: 3,
      sender: "John Doe",
      avatar: "https://i.pravatar.cc/150?img=1",
      content: "Great! Just working on some new projects.",
      timestamp: "09:32 AM",
      isOwn: false,
    },
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const [newMessage, setNewMessage] = useState("");
  const [selectedChat, setSelectedChat] = useState(null);
  const [showSidebar, setShowSidebar] = useState(true);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const chats = [
    {
      id: 1,
      name: "John Doe",
      avatar: "https://i.pravatar.cc/150?img=1",
      lastMessage: "Great! Just working on some new projects.",
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "https://i.pravatar.cc/150?img=2",
      lastMessage: "See you tomorrow!",
    },
    {
      id: 3,
      name: "Mike Johnson",
      avatar: "https://i.pravatar.cc/150?img=3",
      lastMessage: "Thanks for the help!",
    },
  ];

  const sendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        sender: "Me",
        avatar: "https://i.pravatar.cc/150?img=4",
        content: newMessage,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isOwn: true,
      },
    ]);
    setNewMessage("");
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMessages([
          ...messages,
          {
            id: messages.length + 1,
            sender: "Me",
            avatar: "https://i.pravatar.cc/150?img=4",
            content: (
              <img
                src={reader.result}
                alt="uploaded"
                style={{ maxWidth: "200px", borderRadius: "8px" }}
              />
            ),
            timestamp: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
            isOwn: true,
          },
        ]);
      };
      reader.readAsDataURL(file);
    }
  };

  const emojis = [
    "😀",
    "😃",
    "😄",
    "😁",
    "😅",
    "😂",
    "🤣",
    "😊",
    "😇",
    "🙂",
    "🙃",
    "😉",
    "😌",
    "😍",
    "🥰",
    "😘",
    "😗",
    "😙",
    "😚",
    "😋",
    "😛",
    "😝",
    "😜",
    "🤪",
    "🤨",
    "🧐",
    "🤓",
    "😎",
    "🤩",
    "🥳",
    "😏",
    "😒",
    "😞",
    "😔",
    "😟",
    "😕",
    "🙁",
    "☹️",
    "😣",
    "😖",
    "😫",
    "😩",
    "🥺",
    "😢",
    "😭",
    "😤",
    "😠",
    "😡",
    "🤬",
    "🤯",
    "😳",
    "🥵",
    "🥶",
    "😱",
    "😨",
    "😰",
    "😥",
    "😓",
    "🤗",
    "🤔",
    "🤭",
    "🤫",
    "🤥",
    "😶",
    "😐",
    "😑",
    "😬",
    "🙄",
    "😯",
    "😦",
    "😧",
    "😮",
    "😲",
    "🥱",
    "😴",
    "🤤",
    "😪",
    "😵",
    "🤐",

  ];

  return (
    <>
      <Navbar />
      <div
        style={{
          width: "100vw",
          margin: "0 auto",
          height: "calc(100vh)",
          display: "flex",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {showSidebar ? (
          <div
            style={{
              width: "100vw",
              height: "100vh",
              padding: "1rem",
              overflowY: "auto",
              // backgroundColor: "rgba(179, 211, 233, 0.3)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <BiArrowBack
                style={{
                  marginRight: "0.5rem",
                  fontSize: "1.5rem",
                  color: "#6b7280",
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigate("/");
                }}
              />
              <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Chats</h2>
              <BiDotsVerticalRounded
                style={{
                  marginLeft: "auto",
                  fontSize: "1.25rem",
                  color: "#6b7280",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem",
                borderRadius: "9999px",
                marginBottom: "1rem",
                border: "1px solid #e5e7eb",
              }}
            >
              <BiSearch style={{ color: "#6b7280" }} />
              <input
                type="text"
                placeholder="Search chats..."
                style={{
                  border: "none",
                  background: "none",
                  outline: "none",
                  width: "100%",
                  height: "25px",
                }}
              />
            </div>
            {chats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => {
                  setSelectedChat(chat.name);
                  setShowSidebar(false);
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "0.75rem",
                  margin: "3px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  // Add hover effect
                  ":hover": {
                    backgroundColor: "#f3ff6",
                  },
                }}
              >
                <img
                  src={chat.avatar}
                  alt={chat.name}
                  style={{ width: "48px", height: "48px", borderRadius: "50%" }}
                />

                <div style={{ width: "100%" }}>
                  <h3 style={{ fontWeight: "500" }}>{chat.name}</h3>
                  <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>
                    {chat.lastMessage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              backgroundColor: "#fff",
            }}
          >
            <div
              style={{
                padding: "1rem",
                borderBottom: "1px solid #e5e7eb",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <button
                onClick={() => setShowSidebar(true)}
                style={{
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                }}
              >
                <BiArrowBack
                  style={{ fontSize: "1.25rem", color: "#6b7280" }}
                />
              </button>
              <h2>{selectedChat}</h2>
            </div>

            <div
              style={{
                flex: 1,
                padding: "1rem",
                overflowY: "auto",
                height: "calc(100% - 80px)",
              }}
            >
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    style={{
                      display: "flex",
                      justifyContent: message.isOwn ? "flex-end" : "flex-start",
                      marginBottom: "1rem",
                      width: "100%",
                      alignItems: "flex-start",
                      gap: "8px",
                    }}
                  >
                    {!message.isOwn && (
                      <img
                        src={message.avatar}
                        alt={message.sender}
                        style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "50%",
                        }}
                      />
                    )}
                    <div
                      style={{
                        maxWidth: "70%",
                        wordWrap: "break-word",
                        padding: "0.75rem 1rem",
                        borderRadius: message.isOwn
                          ? "16px  0 16px 16px"
                          : "0 16px 16px 16px ",
                        backgroundColor: message.isOwn ? "#f3f4f6" : "#3b82f6",
                        color: message.isOwn ? "#000000" : "#ffffff",
                        position: "relative",
                      }}
                    >
                      {typeof message.content === "string" ? (
                        <p>{message.content}</p>
                      ) : (
                        message.content
                      )}
                      <span
                        style={{
                          fontSize: "0.75rem",
                          color: message.isOwn ? "#6b7280" : "#e5e7eb",
                          marginTop: "0.25rem",
                          display: "block",
                        }}
                      >
                        {message.timestamp}
                      </span>
                    </div>
                    {message.isOwn && (
                      <img
                        src={message.avatar}
                        alt={message.sender}
                        style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "50%",
                        }}
                      />
                    )}
                  </motion.div>
                ))}
                <div ref={messagesEndRef} />
              </AnimatePresence>
            </div>

            <form
              onSubmit={sendMessage}
              style={{
                padding: "1rem",
                borderTop: "1px solid #e5e7eb",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                width: "100%",
                backgroundColor: "#fff",
                position: "fixed",
                bottom: 0,
              }}
            >
              <button
                type="button"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                style={{
                  cursor: "pointer",
                  flexShrink: 0,
                  border: "none",
                  background: "none",
                  fontSize: "1.5rem",
                }}
              >
                😊
              </button>
              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageUpload}
              />
              <label
                htmlFor="imageUpload"
                style={{ color: "#6b7280", cursor: "pointer", flexShrink: 0 }}
              >
                <BiImage style={{ fontSize: "1.25rem" }} />
              </label>

              <button
                type="button"
                style={{
                  color: "#6b7280",
                  cursor: "pointer",
                  flexShrink: 0,
                  border: "none",
                  background: "none",
                }}
              >
                <BiFile style={{ fontSize: "1.25rem" }} />
              </button>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                style={{
                  flex: 1,
                  padding: "0.75rem 1rem",
                  borderRadius: "9999px",
                  border: "1px solid #e5e7eb",
                  outline: "none",
                  minWidth: 0,
                  fontSize: "1rem",
                  lineHeight: "1.5",
                }}
              />

              <button
                type="button"
                style={{
                  color: "#6b7280",
                  cursor: "pointer",
                  flexShrink: 0,
                  border: "none",
                  background: "none",
                }}
              >
                <BiMicrophone style={{ fontSize: "1.25rem" }} />
              </button>
              <button
                type="submit"
                style={{
                  border: "none",
                  background: "none",
                  color: "#3b82f6",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <BiSend style={{ fontSize: "1.25rem" }} />
              </button>
            </form>
            {showEmojiPicker && (
              <div
                style={{
                  position: "absolute",
                  bottom: "80px",
                  left: "16px",
                  backgroundColor: "#ffffff",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
                  padding: "8px",
                  zIndex: 20,
                  maxHeight: "200px",
                  overflowY: "auto",
                  display: "grid",
                  gridTemplateColumns: "repeat(8, 1fr)",
                  gap: "4px",
                }}
              >
                {emojis.map((emoji) => (
                  <button
                    key={emoji}
                    onClick={() => {
                      setNewMessage((prev) => prev + emoji);
                      setShowEmojiPicker(false);
                    }}
                    style={{
                      border: "none",
                      background: "none",
                      fontSize: "1.25rem",
                      cursor: "pointer",
                      padding: "4px",
                    }}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
