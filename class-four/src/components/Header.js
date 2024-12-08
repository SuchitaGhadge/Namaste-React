import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
    const [btnLogin, setBtnLogin] = useState("Login")
    return (
      <header className="header">
        <div className="logo-container">
          <img
            src={LOGO_URL}
            alt="food app"
            className="logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>Offers</li>
            <li>Help</li>
            <li>Cart</li>
            <button className="btn-login" onClick={() => {
              btnLogin === "Login" ? setBtnLogin("Logout") : setBtnLogin("Login") 
            }}>
              {btnLogin}
            </button>
          </ul>
        </div>
      </header>
    );
  };

export default Header;