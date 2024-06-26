import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to meal App</h1>
      <p>Sign up or log in to start</p>
      <div className="link-container">
        <Link to="/signup">Sign up</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Home;
