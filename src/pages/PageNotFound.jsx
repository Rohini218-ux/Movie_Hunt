import notfound from "../assets/notfound.png";
import { Link } from "react-router-dom";
export const PageNotFound = () => {
    return (
        <div className="container">
            <img src={notfound} alt="Page Not Found" className="d-block mx-auto my-5" />
            <p className="text-center">
            <Link to="/" className="btn btn-primary">
                Go to Home
            </Link>
            </p>
        </div>
                 );
    };