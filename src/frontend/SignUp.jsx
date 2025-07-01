import Navbar from "./Navbar";
import UseSignUp from "./useSignUp";

export default function signUp() {
    

    const {
        email,
        setEmail,
        handleRegister
    } = UseSignUp()

    return(
        <div>
            <Navbar/>
            <form action="">
                <div className="textInput">
                    <input type="text" id="username" placeholder="Create a username..." />
                    <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email..." />
                    <input type="password" id="password" placeholder="Password..." />
                    <input type="password" id="cPassword" placeholder="Confirm Password..." />
                </div>

                <div className="registerBtn">
                    <button className="register-btn" onClick={handleRegister} >Register</button>
                </div>
                
            </form>
        </div>
    )
}

/* 
User cannot hit submit unless the following have been satisfied:

    all forms are filled out AND...

    username is available
    email is valid
    password meets requirements
    password and confirm password match

*/