import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Planning for food ordering app
 *
 * Component list
 * Header
 *  - Logo
 *  - Nav items
 * Body
 *  - Search
 *  Restaurant Container
 *      - Restaurant Card
 *          - Img
 *          - Name of Restaurant
 *          - Cuisine, Star rating, estimate time for delivery
 *          - Cost for 2
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  Contact
 *
 */

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          src="https://i.pinimg.com/originals/b1/fc/bb/b1fcbbfd4fb8116c714ef352bb39bbaf.jpg"
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

const Body = () => {
  return (
    <div className="body">
      <section className="search">Search</section>
      <section className="restaurant-container">
        <RestaurantCard restaurantName="RTC" cuisine="Snacks, Fast Food"  starRating="4.2"/>
        <RestaurantCard restaurantName="McDonald's" cuisine="Burgers, Fries, Beverages" starRating="4.4"/>
      </section>
    </div>
  );
};

const RestaurantCard = (props) => {
  return (
    <section className="restaurant-card">
      <div className="restaurant-img-container">
        <img
          className="restaurant-img"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/oclktoi5lgefj7hzvl6x"
          alt="food img"
        />
      </div>
      <div className="restaurant-info">
        <h3>{props.restaurantName}</h3>
        <p>{props.cuisine}</p>
        <span>{props.starRating} stars</span>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

// Lecture stooped at 1:17:53mins

// npx parcel index.html --https   == for build local on https instead of http
