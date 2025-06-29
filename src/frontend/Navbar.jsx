import { Link } from "react-router-dom"
import "./Navbar.css"



export default function Navbar() {
    return(
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/signup">
                    <a href="/" className="welcome">Hello, User.</a>
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
                    <li><a href="/">Sign Up</a></li>
                    </Link>
                    <li><a href="/">Sign In</a></li>
                </ul>
            </div>
        </nav>
    )
}