import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import "../../SCSS/Users.scss";
import Friends from "../../components/users/Friends";
import Suggesions from "../../components/users/Suggesions";
import Requests from "../../components/users/Requests";
import UsersSkeleton from "../../components/Skeletons/UsersSkeleton";
import { data } from "../../../dummypost";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError]=useState(null)

 

  const [activeTab, setActiveTab] = useState("suggesions");
  useEffect(() => {
    setIsLoading(true);
    setUsers([]);
    // fetch("http://localhost:3000/users")
    //  .then((res) => res.json())
    //  .then((data)=>{
    setTimeout(() => {
      setUsers(data);

      setIsLoading(false);
    }, 500);
    //  });
  }, []);

  return (
    <>
      <Navbar />
      <div className="users-container">
        <div className="users-tabs">
          <span
            className={activeTab === "suggesions" && "active span"}
            onClick={() => {
              setActiveTab("suggesions");
            }}
          >
            Suggesions
          </span>
          <span
            className={activeTab === "friends" && "active span"}
            onClick={() => {
              setActiveTab("friends");
            }}
          >
            Friends
          </span>
          <span
            className={activeTab === "requests" && "active span"}
            onClick={() => {
              setActiveTab("requests");
            }}
          >
            Requests
          </span>
        </div>
        {activeTab === "suggesions" && <Suggesions users={users} />}
        {activeTab === "friends" && <Friends users={users} />}
        {activeTab === "requests" && <Requests users={users} />}
        {isLoading && <UsersSkeleton />}
      </div>
    </>
  );
}
