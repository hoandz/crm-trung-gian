import { Layout } from "antd";
import { observer } from "mobx-react-lite";

const { Content } = Layout;

const LayoutContentAdmin = observer((props: any) => {
    const handleBackClick = () => {
        props.history.goBack();
    };

    return (
        <Layout className="site-layout">
            <Content style={{ margin: "0 16px" }}>
                {/* <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>
                        {props.history &&
                            props.history.location &&
                            props.history.location.pathname}
                    </Breadcrumb.Item>
                </Breadcrumb> */}
                <div style={{ margin: "16px 0" }}>
                    <a href="#!" onClick={handleBackClick}>
                        {"<"} Quay lại
                    </a>
                </div>

                <div
                    className="site-layout-background"
                    style={{ padding: 24, minHeight: 360 }}
                >
                    {props.children}
                </div>
            </Content>
        </Layout>
    );
});

export default LayoutContentAdmin;
