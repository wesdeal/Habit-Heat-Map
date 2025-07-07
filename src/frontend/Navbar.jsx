import { Link } from "react-router-dom"
import "./Navbar.css"



export default function Navbar() {
    return(
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/signup">
                    Hello, User.
                </Link>
            </div>

            <div className="navbar-center">
                <Link to="/">
                    <h2 className="logo">Your Habit Heatmap.</h2>
                </Link>
            </div>

            <div className="navbar-right">
                <ul className="navbar-options">
                    <Link to="/signup">
                    <li>Sign Up</li>
                    </Link>
                    <li>Sign In</li>
                </ul>
            </div>
        </nav>
    )
}