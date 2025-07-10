import { Link } from "react-router-dom"
import "./Navbar.css"



export default function Navbar() {
    return(
        <nav className="navbar">
            <div className="navbar-left">
                    <p>Hello, User.</p>
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
                    <Link to="/signin">
                        <li>Sign In</li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}