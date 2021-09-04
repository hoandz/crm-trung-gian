import { Layout } from "antd";
import { observer } from "mobx-react-lite";
import { useRouteMatch } from "react-router-dom";
import Images from "../../../common/Images";
import { TAB_SIZE } from "../../../helpers/constants";
import { useStore } from "../../../hooks";
import AdminRouters from "../../AdminRouters";
import Sidebar from "../sidebar/Sidebar";

const { Content } = Layout;

const LayoutAdmin = observer((props: any) => {
    const match = useRouteMatch();
    const AuthStore = useStore("AuthStore");

    const handleOpenSidebar = () => {
        AuthStore.action_openSidebar();
    };

    return (
        <Layout className="gx-app-layout layout-admin">
            <Sidebar {...props} />
            <Layout>
                {AuthStore.width_screen < TAB_SIZE && (
                    <div className="gx-linebar header-mobile-container">
                        <div>
                            <i
                                className="gx-icon-btn icon icon-menu"
                                onClick={handleOpenSidebar}
                            />
                        </div>
                    </div>
                )}
                {AuthStore.width_screen > TAB_SIZE && (
                    <div className="gx-layout-sider-header">
                        sdfsdfádfasdfasdfasdfasdfa
                    </div>
                )}
                <Content
                    className={`gx-layout-content gx-main-content-wrapper`}
                >
                    <AdminRouters match={match} />
                </Content>
            </Layout>
        </Layout>
    );
});

export default LayoutAdmin;
