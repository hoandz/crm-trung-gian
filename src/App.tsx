import { useEffect } from "react";
import {
    Route,
    Redirect,
    withRouter,
    RouteProps,
    Switch,
} from "react-router-dom";
import "moment/locale/vi";
import { observer } from "mobx-react-lite";
import { useStore } from "./hooks";
import { LOCAL_STORAGE, STATUS_LOGIN } from "./helpers/constants";
import { Loading } from "./common";
import LayoutAdmin from "./screens/layouts/containers/LayoutAdmin";
import AdminLoginScreen from "./screens/login/AdminLoginScreen";

interface AdminRouteProps extends RouteProps {
    // tslint:disable-next-line:no-any
    component: any;
    isSignedIn: number;
}

const App = observer((props) => {
    const AuthStore = useStore("AuthStore");

    useEffect(() => {
        window.addEventListener("resize", () => {
            AuthStore.width_screen = window.innerWidth;
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Switch>
                <Route
                    exact
                    path="/signin"
                    component={AdminLoginScreen}
                />

                <AdminRoute
                    isSignedIn={AuthStore.isLogin}
                    path="/"
                    component={LayoutAdmin}
                />
            </Switch>
        </>
    );
});

const AdminRoute = (props: AdminRouteProps) => {
    const { component: Component, isSignedIn, ...rest } = props;

    return (
        <Route
            {...rest}
            render={(routeProps) => {
                if (isSignedIn === STATUS_LOGIN.WAIT_LOGIN) {
                    return <Loading isLoading={true} />;
                } else if (isSignedIn === STATUS_LOGIN.ADMIN_LOGIN) {
                    return <Component {...routeProps} />;
                }
            }}
        />
    );
};

export default withRouter(App);
