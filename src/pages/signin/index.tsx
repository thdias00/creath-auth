import { useHistory } from "react-router-dom";
import { signInWithFacebook, signInWithGoogle } from "../../Firebase";
import { Button, Container } from "./style";

export const SignIn = () => {
    const history = useHistory();

    return(
        <Container>
            <h2 onClick={() => history.push("/")}>Challenge Creath</h2>
            <h3>Entrar</h3>
            <Button facebook={false} onClick={() => {signInWithGoogle(); history.push("/dashboard")}}>
                Entrar com Google
            </Button>
            <Button facebook={true} onClick={() => {signInWithFacebook(); history.push("/dashboard")}}>
                Entrar com Facebook
            </Button>
            <h4>Não possui conta? <a href="/signup">Criar conta</a></h4>
        </Container>
    )
}