import { useHistory } from "react-router-dom"
import { Button, Container } from "./style"

export const Home = () => {
    const history = useHistory()
    return(
        <Container>
            <h2>Challenge Creath</h2>
            <Button onClick={() => history.push("/signin")}>Fazer Login</Button>
            <Button onClick={() => history.push("/signup")}>Cadastrar</Button>
        </Container>
    )
}