import "./Navbar.css"


export default function Navbar() {
    return(
        <nav className="navbar">
            <div className="navbar-left">
                <a href="/" className="welcome">Hello, User.</a>
            </div>

            <div className="navbar-center">
                <h2 className="logo">Your Habit Heatmap.</h2>
            </div>

            <div className="navbar-right">
                <ul className="navbar-options">
                    <li>
                        <a href="/">Sign Up</a>
                    </li>
                    <li><a href="/">Sign In</a></li>
                </ul>
            </div>
        </nav>
    )
}