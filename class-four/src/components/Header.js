import { LOGO_URL } from "../utils/constants";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = ({isLoggedIn}) => {
  console.log('isLog', isLoggedIn)
  let navigate = useNavigate()
  // custom react hook
  const onlineStatus = useOnlineStatus();

  // Context
  const {loggedInUser, setUserName} = useContext(UserContext)

  const handleLogout = () => {
    setUserName('');
    navigate('/login')
  }
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
          {loggedInUser && <li>
            {loggedInUser}
          </li>}
          <li>
            {!isLoggedIn &&<Link to='/login'>Login</Link>}
            {isLoggedIn && <button className="btn-login" onClick={handleLogout}>Logout</button>}  
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
