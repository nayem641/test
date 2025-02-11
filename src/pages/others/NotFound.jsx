import { useNavigate } from "react-router-dom";
import "../../SCSS/NotFound.scss";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-text">
        Oops! The page you are looking for doesn't exist.
      </p>
      <button className="notfound-button" onClick={() => navigate("/")}>
        Go Back Home
      </button>
      <div className="notfound-image">
        <img
          src="/vite.svg"
          alt="Page not found"
        />
      </div>
    </div>
  );
}
