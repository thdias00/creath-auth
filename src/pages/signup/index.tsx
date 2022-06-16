import { useHistory } from "react-router-dom";
import { signInWithFacebook, signInWithGoogle } from "../../Firebase";
import { Button, Container } from "./style";

export const SignUp = () => {
    const history = useHistory();

    return(
        <Container>
            <h2 onClick={() => history.push("/")}>Challenge Creath</h2>
            <h3>Criar conta</h3>
            <Button facebook={false} onClick={() => {signInWithGoogle(); history.push("/dashboard")}}>
                Criar conta com Google
            </Button>
            <Button facebook={true} onClick={() => {signInWithFacebook(); history.push("/dashboard")}}>
                Criar conta com Facebook
            </Button>
            <h4>Já possui uma conta? <a href="/signin">Entrar</a></h4>
        </Container>
    )
}