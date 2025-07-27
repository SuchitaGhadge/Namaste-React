import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Login");
  // custom react hook
  const onlineStatus = useOnlineStatus();

  // Context
  const {loggedInUser} = useContext(UserContext)
  return (
    <header className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="food app" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/offers">Offers </Link>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>
          <li>
          <Link to="/grocery">Grocery</Link></li>
          <li>
          <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            {loggedInUser}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
