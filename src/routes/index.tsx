import { Switch, Route } from "react-router-dom";
import { SignIn } from "../pages/signin";
import { SignUp } from "../pages/signup";
import { Home } from "../pages/home";
import { Dashboard } from "../pages/dashboard";

export const Routes = () => {
    return(
        <Switch>
            <Route exact path="/"><Home/></Route>
            <Route path="/signup"><SignUp/></Route>
            <Route path="/signin"><SignIn/></Route>
            <Route path="/dashboard"><Dashboard/></Route>
        </Switch>
    )
}