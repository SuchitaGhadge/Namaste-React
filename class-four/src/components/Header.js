import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Login");
  return (
    <header className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="food app" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/offers">Offers </Link>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>
          <li>Cart</li>
          <button
            className="btn-login"
            onClick={() => {
              btnLogin === "Login"
                ? setBtnLogin("Logout")
                : setBtnLogin("Login");
            }}
          >
            {btnLogin}
          </button>
        </ul>
      </div>
    </header>
  );
};

export default Header;
