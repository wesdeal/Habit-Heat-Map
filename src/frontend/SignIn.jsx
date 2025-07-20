import Navbar from "./Navbar";
import UseSignIn from "./UseSignIn";

export default function SignIn() {

    const {
        email,
        setEmail,
        password,
        setPassword,
        errorMessage,
        handleSignIn
    } = UseSignIn()

    return(
        <div>
            <Navbar/>
            <form action="">
                <div className="textInput">
                    <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email..."/>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password..." />
                </div>

                <div className="signInBtn">
                    <button className="signin-btn" onClick={handleSignIn}>Sign In</button>
                    <p style={{color:"red"}}>{errorMessage}</p>
                </div>
                
            </form>
        </div>
    )
};

/* 
User cannot hit submit unless the following have been satisfied:

    all forms are filled out AND...

    username is available
    email is valid
    password meets requirements
    password and confirm password match

*/