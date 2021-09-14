import { useEffect, useState } from "react";
import _ from "lodash";
import { observer } from "mobx-react-lite";
import { useStore } from "../../hooks";
import { useTranslation } from "react-i18next";
import {
    PhoneOutlined,
    UserOutlined,
    FieldTimeOutlined,
    MailOutlined,
    HomeOutlined,
    FileTextOutlined
  } from '@ant-design/icons';
const BoxInfo = observer((props: any) => {
    const AuthStore = useStore("AuthStore");
    const { t } = useTranslation();

    useEffect(() => {
        handle_fetchData();
    }, []);
    
    const handle_fetchData = async () => {
        await AuthStore.action_getInfo();
    };

    return (
        <div className="box-info">
            <div className="avatar">
                {
                AuthStore.data_getUserInfo.img_avatar != ""
                ?
                AuthStore.data_getUserInfo.img_avatar
                :
                <img src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" alt="" />
            }
            </div>
            <h2 className="name">
                {AuthStore.data_getUserInfo.username}
            </h2>
            <div className="list-item-info">
                {
                    AuthStore.data_getUserInfo.full_name != "" &&
                    <p className="item"><UserOutlined /> <span>{AuthStore.data_getUserInfo.full_name}</span></p>   
                }
                {
                    AuthStore.data_getUserInfo.birthday != "" &&
                    <p className="item"><FieldTimeOutlined /> <span>{AuthStore.data_getUserInfo.birthday}</span></p>
                }
                {
                    AuthStore.data_getUserInfo.phone_number != "" &&
                    <p className="item"><PhoneOutlined /> <span>{AuthStore.data_getUserInfo.phone_number}</span></p>
                }
                {
                    AuthStore.data_getUserInfo.email != "" &&
                    <p className="item"><MailOutlined /> <span>{AuthStore.data_getUserInfo.email}</span></p>
                }
                {
                    AuthStore.data_getUserInfo.address != "" &&
                    <p className="item"><HomeOutlined /> <span>{AuthStore.data_getUserInfo.address}</span></p>
                }
                {
                    AuthStore.data_getUserInfo.introduction != "" &&
                    <p className="item"><FileTextOutlined /> <span>{AuthStore.data_getUserInfo.introduction}</span></p>
                }
            </div>
        </div>
    );
});

export default BoxInfo;
