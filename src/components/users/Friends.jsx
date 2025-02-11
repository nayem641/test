import { useNavigate } from "react-router-dom";
import "../../SCSS/Users.scss";

export default function Friends(props) {
  const users = props.users;
  const navigate = useNavigate();

  return (
    <div className="suggestions-container">
      {users
        .slice()
        .reverse()
        .map((user) => (
          <div key={user.id} className="suggestion-item">
            <div className="profilePic">
              <img
                src={user.profilePic}
                alt={user.name}
                onClick={() => {
                  navigate(`/users/${user.id}`, { state: user });
                }}
              />
            </div>
            <div className="details">
              <strong>{user.name}</strong>
              {user.mutualFriends && <p>{user.mutualFriends} mutual friends</p>}
              <div className="buttonsContainer">
                <button>Message</button>
                <button>Block</button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
