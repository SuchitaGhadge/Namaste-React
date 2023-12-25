import { LOGO_URL } from "../utils/constants";

const Header = () => {
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
          </ul>
        </div>
      </header>
    );
  };

export default Header;