import { useState } from "react";
import Navbar from "../../components/Navbar";
import {
  BiBell,
  BiCheckCircle,
  BiX,
  BiUser,
  BiChat,
  BiCalendar,
  BiHeart,
  BiTag,
} from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

export default function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "friend_request",
      title: "New Friend Request",
      message: "John Doe wants to be your friend",
      time: "2 min ago",
      read: false,
    },
    {
      id: 2,
      type: "tag",
      title: "Tagged in a Post",
      message: "Sarah mentioned you in a post",
      time: "1 hour ago",
      read: false,
    },
    {
      id: 3,
      type: "reminder",
      title: "Event Reminder",
      message: "Team meeting starts in 30 minutes",
      time: "3 hours ago",
      read: true,
    },
    {
      id: 4,
      type: "comment",
      title: "New Comment Reply",
      message: 'Mike replied to your comment: "Thanks for sharing!"',
      time: "4 hours ago",
      read: false,
    },
    {
      id: 5,
      type: "invitation",
      title: "Event Invitation",
      message: "You are invited to Birthday Party",
      time: "5 hours ago",
      read: false,
    },
    {
      id: 6,
      type: "like",
      title: "Post Reaction",
      message: "Emma and 5 others liked your post",
      time: "6 hours ago",
      read: true,
    },
  ]);

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((note) =>
        note.id === id ? { ...note, read: true } : note,
      ),
    );
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter((note) => note.id !== id));
  };

  const getIcon = (type) => {
    switch (type) {
      case "friend_request":
        return <BiUser style={{ color: "#3B82F6", fontSize: "1.25rem" }} />;
      case "tag":
        return <BiTag style={{ color: "#8B5CF6", fontSize: "1.25rem" }} />;
      case "reminder":
        return <BiCalendar style={{ color: "#F59E0B", fontSize: "1.25rem" }} />;
      case "comment":
        return <BiChat style={{ color: "#10B981", fontSize: "1.25rem" }} />;
      case "invitation":
        return (
          <BiCheckCircle style={{ color: "#EC4899", fontSize: "1.25rem" }} />
        );
      case "like":
        return <BiHeart style={{ color: "#EF4444", fontSize: "1.25rem" }} />;
      default:
        return <BiBell style={{ color: "#6B7280", fontSize: "1.25rem" }} />;
    }
  };

  const getBgColor = (type) => {
    switch (type) {
      case "friend_request":
        return "#EBF5FF";
      case "tag":
        return "#F3E8FF";
      case "reminder":
        return "#FEF3C7";
      case "comment":
        return "#ECFDF5";
      case "invitation":
        return "#FCE7F3";
      case "like":
        return "#FEE2E2";
      default:
        return "#F9FAFB";
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ maxWidth: "420px", margin: "0 auto", padding: "1rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "1.5rem",
          }}
        >
          <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            Notifications
          </h1>
          <span
            style={{
              backgroundColor: "#EF4444",
              color: "white",
              fontSize: "0.875rem",
              padding: "0.25rem 0.5rem",
              borderRadius: "9999px",
            }}
          >
            {notifications.filter((n) => !n.read).length}
          </span>
        </div>

        <AnimatePresence>
          {notifications.map((notification) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -100 }}
              style={{
                marginBottom: "1rem",
                padding: "1rem",
                borderRadius: "0.5rem",
                boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
                backgroundColor: notification.read
                  ? "#F9FAFB"
                  : getBgColor(notification.type),
                cursor: "pointer",
              }}
              onClick={() => markAsRead(notification.id)}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                  }}
                >
                  {getIcon(notification.type)}
                  <div>
                    <h3 style={{ fontWeight: "600" }}>{notification.title}</h3>
                    <p
                      style={{
                        color: "#4B5563",
                        fontSize: "0.875rem",
                        marginTop: "0.25rem",
                      }}
                    >
                      {notification.message}
                    </p>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: "#9CA3AF",
                        display: "block",
                        marginTop: "0.5rem",
                      }}
                    >
                      {notification.time}
                    </span>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteNotification(notification.id);
                  }}
                  style={{ color: "#9CA3AF", cursor: "pointer" }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#4B5563")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#9CA3AF")}
                >
                  <BiX />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {notifications.length === 0 && (
          <div style={{ textAlign: "center", padding: "2.5rem 0" }}>
            <BiBell
              style={{
                color: "#D1D5DB",
                fontSize: "3rem",
                margin: "0 auto",
                marginBottom: "1rem",
              }}
            />
            <p style={{ color: "#6B7280" }}>No notifications yet</p>
          </div>
        )}
      </div>
    </>
  );
}
