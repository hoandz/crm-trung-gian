import { Route, Switch } from "react-router-dom";
import NotFoundPage from "./404/NotFoundPage";
import DefaultScreen from "./default/DefaultScreen";
import Home from "./home/Home";
import Profile from "./profile/Profile";
import kycAdvance from "./kyc/kycAdvance";
import Transaction from "./transaction/Transaction";
import TransactionRoom from "./transaction-room/TransactionRoom";
import Payout from "./payout/Payout";
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
            <Route
                exact
                path={`${props.match.url}kyc`}
                component={kycAdvance}
            />
            <Route
                exact
                path={`${props.match.url}transaction`}
                component={Transaction}
            />
            <Route
                exact
                path={`${props.match.url}transaction-room`}
                component={TransactionRoom}
            />
            <Route
                exact
                path={`${props.match.url}payout`}
                component={Payout}
            />
            <Route
                exact
                path={`${props.match.url}profile`}
                component={Profile}
            />
            <Route path="*" component={NotFoundPage} />
        </Switch>
    );
};

export default AdminRouters;
