import { useHistory } from "react-router-dom";
import { Button, Container } from "./style"

export const Dashboard = () => {
    const history = useHistory();

    return(
        <Container>
            <h2>Bem vindo</h2>
            <Button onClick={() => {localStorage.clear(); history.push("/signin")}}>
                Logout
            </Button>
        </Container>
    )
}