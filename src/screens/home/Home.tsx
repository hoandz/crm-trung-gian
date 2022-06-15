import { useEffect, useState } from "react";
import {
    Row,
} from "antd";
import _ from "lodash";
import { observer } from "mobx-react-lite";
// import { useStore } from "../../hooks";
// import { GLOBAL_CLIENT } from "../../helpers/GlobalClient";
import { useTranslation } from "react-i18next";
// import { getDateTimeShow, showMessageSuccess } from "../../helpers/functions";
// import { Loading } from "../../common";
import Header from "./Header";
import Notification from "./Notification";
import Rank from "./Rank";

const Home = observer((props: any) => {
    const { t } = useTranslation();

    return (
        <>
            {/* <Loading isLoading={isLoading} /> */}
            {/* <h2 className="head-title">{t(GLOBAL_CLIENT.txtList)}</h2> */}
            {/* Show total member */}
            <Row gutter={[24, 24]}>
                <Header />
            </Row>
        </>
    );
});

export default Home;
