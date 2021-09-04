import { Button, Input, Form } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LOCAL_STORAGE } from "../../helpers/constants";
import { Loading } from "../../common";
import Images from "../../common/Images";
import { GLOBAL_CLIENT } from "../../helpers/GlobalClient";
import { useStore } from "../../hooks";

const AdminLoginScreen = observer((props: any) => {
    const AuthStore = useStore("AuthStore");
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(false);
    const { history } = props;
    const [form] = Form.useForm();

    useEffect(() => {
        handleSetDataDefault();
    }, []);

    const handleSetDataDefault = async () => {
        const rememberMe = await localStorage.getItem(
            LOCAL_STORAGE.REMEMBER_ME
        );

        if (rememberMe === "false") {
            form.setFieldsValue({
                rememberMe: false,
            });
        } else {
            form.setFieldsValue({
                rememberMe: true,
            });
        }
    };

    const onFinishFailed = (errorInfo: any) => {};

    const onFinish = async (values: any) => {
        setIsLoading(true);

        const result = await AuthStore.action_loginUser(
            values.userName,
            values.password,
            values.rememberMe
        );

        if (result) {
            history.push("/home");
        }

        setIsLoading(false);
    };

    return (
        <div className="gx-app-login-wrap">
            <Loading isLoading={isLoading} />

            <div className="container-login">
                <div className="div-logo-login">
                </div>
                <div className="container-form">
                    <Form
                        form={form}
                        name="basic"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        className="gx-signin-form gx-form-row0"
                    >
                        <Form.Item
                            rules={[
                                {
                                    required: true,
                                    message: t(GLOBAL_CLIENT.vuilongnhapdulieu),
                                },
                            ]}
                            name="userName"
                        >
                            <Input placeholder={t(GLOBAL_CLIENT.username)} />
                        </Form.Item>
                        <Form.Item
                            rules={[
                                {
                                    required: true,
                                    message: t(GLOBAL_CLIENT.vuilongnhapdulieu),
                                },
                            ]}
                            name="password"
                        >
                            <Input
                                type="password"
                                placeholder={t(GLOBAL_CLIENT.password)}
                            />
                        </Form.Item>
                        <Form.Item name="rememberMe" valuePropName="checked">
                            <Checkbox>{t(GLOBAL_CLIENT.rememberMe)}</Checkbox>
                        </Form.Item>
                        <Form.Item>
                            <Button block type="primary" htmlType="submit">
                                {t(GLOBAL_CLIENT.login)}
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
});

export default AdminLoginScreen;
