import { Tabs } from "antd";
// import Checkbox from "antd/lib/checkbox/Checkbox";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
// import { LOCAL_STORAGE } from "../../helpers/constants";
// import { Loading } from "../../common";
// import Images from "../../common/Images";
import { GLOBAL_CLIENT } from "../../helpers/GlobalClient";
import { useStore } from "../../hooks";
import Register from "./Register";
import Login from "./Login";
// import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
const { TabPane } = Tabs;

const AdminLoginScreen = observer((props: any) => {
    const AuthStore = useStore("AuthStore");
    const { t } = useTranslation();

    useEffect(() => {
    }, []);

    return (
        <div className="gx-app-login-wrap">
            <div className="container-login">
                <div className="div-logo-login">
                    
                </div>
                <div className="container-form">
                    <h2 style={{textAlign: 'center'}}>Đăng nhập</h2>
                    <Login />
                </div>
            </div>
        </div>
    );
});

export default AdminLoginScreen;
