import { Route, Switch } from "react-router-dom";
import Login from "../Components/Login";
import Dashboard from "../Components/Dashboard";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
};
export default Routes;
