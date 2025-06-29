import Navbar from "./Navbar";

export default function SignUp() {


    return(
        <div>
            <Navbar/>
            <form action="">
                <div className="textInput">
                    <input type="text" id="username" placeholder="Create a username..." />
                    <input type="text" id="email" placeholder="Email..." />
                    <input type="password" id="password" placeholder="Password..." />
                    <input type="password" id="cPassword" placeholder="Confirm Password..." />
                </div>

                <div className="registerBtn">
                    <button>Register</button>
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