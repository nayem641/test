import { useNavigate } from "react-router-dom";
import "../../SCSS/Users.scss";

export default function Requests(props) {
  const navigate=useNavigate()
  const users = props.users;
  return (
     <div className="suggestions-container">
        {users.slice(7,15).map((user) => (
          <div key={user.id} className="suggestion-item">
            <div className="profilePic">
              <img
                src={user.profilePic}
                alt={user.name}
              onClick={()=>{navigate(`/users/${user.id}`,{state:user})}}
              />
            </div>
            <div className="details">
              <strong>{user.name}</strong>
              {user.mutualFriends && <p>{user.mutualFriends} mutual friends</p>}
              <div className="buttonsContainer">
                <button>Accept</button>
                <button>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
  );
}
