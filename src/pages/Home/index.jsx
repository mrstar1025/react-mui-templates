import { Link, useNavigate } from "react-router-dom";
import { ROUTE_SIGN_IN, ROUTE_SIGN_UP } from "../../constants/route";

const Home = () => {
  const navigate = useNavigate()

  const handleSignin = () => {
    navigate(ROUTE_SIGN_IN)
  }

  return (
    <div>
      <div>Home</div>
      <button onClick={handleSignin}>signin</button>
      <Link to={ROUTE_SIGN_UP}>go signup</Link>
    </div>
  );
}

export default Home
