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
import { useHistory } from "react-router-dom";

interface AdminRouteProps extends RouteProps {
    // tslint:disable-next-line:no-any
    component: any;
    isSignedIn: number;
}

const App = observer((props) => {
    const AuthStore = useStore("AuthStore");
    let history = useHistory();
    
    useEffect(() => {
        window.addEventListener("resize", () => {
            AuthStore.width_screen = window.innerWidth;
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        handle_fetchData();
    }, []);
    
    const handle_fetchData = async () => {
        let dataAuth;
        dataAuth = await localStorage.getItem(LOCAL_STORAGE.DATA_AUTH);
        await AuthStore.action_getInfo();
    };

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
                if(isSignedIn === 0) {
                    return <Loading isLoading={true} />;
                }else if (isSignedIn === 1) {
                    return <Component {...routeProps} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/signin",
                                state: { from: routeProps.location },
                            }}
                        />
                    );
                }
            }}
        />
    )
};

export default withRouter(App);
