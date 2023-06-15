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
 *          - Cuisine, Start rating, estimate time for delivery
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
                <img src="https://i.pinimg.com/originals/b1/fc/bb/b1fcbbfd4fb8116c714ef352bb39bbaf.jpg" alt="food app" className="logo" />
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
    )
}

const Body = () => {
    return (
        <div className="body">
            <section className="search">Search</section>
            <section className="restaurant-container">
                <RestaurantCard />
            </section>
        </div>
    )
}

const RestaurantCard = () => {
    return (
        <section className="restaurant-card">
            <div className="restaurant-img"></div>
            <h3>BBC</h3>
        </section>
    )
}

const App = ()  => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />)

// Lecture stooped at 38.8mins

// npx parcel index.html --https   == for build local on https instead of http