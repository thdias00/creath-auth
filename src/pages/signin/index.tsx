import { signInWithGoogle } from "../../Firebase";

export const SignIn = () => {
    return(
        <div>
            <button onClick={signInWithGoogle}>
                Sign in with Google
            </button>
            <button type="button" id="login-with-google-btn" onClick={signInWithGoogle}>
                Sign in with Google
            </button>
            <h1>{localStorage.getItem("@DesafioCreath:user")}</h1>
        </div>
    )
}