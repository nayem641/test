import { useNavigate } from "react-router-dom";
import  "../../SCSS/Users.scss"
export default function Suggestions(props) {
  const navigate=useNavigate()
  const users = props.users

  return (
    <div className="suggestions-container">
      {users.map((user) => (
        <div key={user.id} className="suggestion-item">
          <div className="profilePic">
            <img
              src={user.profilePic}
              alt={user.name}
              loading="lazy"
              onClick={() => {
                navigate(`/users/${user.id}`, { state: user });
              }}
            />
          </div>
          <div className="details">
            <strong>{user.name}</strong>
            {user.mutualFriends && <p>{user.mutualFriends} mutual friends</p>}
            <div className="buttonsContainer">
              <button>Request</button>
              <button>Remove</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
