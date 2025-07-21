import { Link } from "react-router-dom"
import "./Navbar.css"
import useSession from "./useSession"
import useSignOut from "./useSignOut";



export default function Navbar() {
    const session = useSession();
    const handleSignOut = useSignOut();
    return(
        <nav className="navbar">
            <div className="navbar-left">
                    {session ? (<p>Hello, {session.user.email}</p>): (<p>Hello, User</p>)}
            </div>

            <div className="navbar-center">
                <Link to="/">
                    <h2 className="logo">Your Habit Heatmap.</h2>
                </Link>
            </div>

            <div className="navbar-right">
                <ul className="navbar-options">
                    {session ? (
                    <li onClick={handleSignOut}>Sign Out</li>
                    ) : (
                    <>
                        <Link to="/signup">
                        <li>Sign Up</li>
                        </Link>
                        <Link to="/signin">
                        <li>Sign In</li>
                        </Link>
                    </>
                    )}
                </ul>
            </div>
        </nav>
    )
}