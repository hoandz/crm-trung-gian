import { Route, Switch } from "react-router-dom";
import NotFoundPage from "./404/NotFoundPage";
import DefaultScreen from "./default/DefaultScreen";
import Home from "./home/Home";

const AdminRouters = (props: any) => {
    return (
        <Switch>
            <Route
                exact
                path={`${props.match.url}`}
                component={DefaultScreen}
            />
            <Route
                exact
                path={`${props.match.url}home`}
                component={Home}
            />
            
            <Route path="*" component={NotFoundPage} />
        </Switch>
    );
};

export default AdminRouters;
