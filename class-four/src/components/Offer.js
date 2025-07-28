import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Offer = () => {
    const {loggedInUser} = useContext(UserContext)
    return (
        <div className="login-container">
            <h2>Offers for {loggedInUser}</h2>
        </div>
    )
}

export default Offer;
 