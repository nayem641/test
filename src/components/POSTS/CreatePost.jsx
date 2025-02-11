import { useNavigate } from "react-router-dom";
import "../../SCSS/CreatePost.scss"
export default function CreatePost() {
  const navigate=useNavigate()
  return (
    <>
      <div className="createpost-container">
        <img src="/profile.jpeg" alt="" />

        <div>
          <input type="text" name="" onClick={()=>{navigate('/createpost')}} placeholder="Create a post" />
        </div>
<img src="/upload.jpeg" alt="" />      </div>
 
    </>
  );
}
