import { useEffect, useState } from "react";
import {
    Row,
} from "antd";
import _ from "lodash";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";

const KycAdvance = observer((props: any) => {
    const { t } = useTranslation();

    return (
        <>
            <Row gutter={[24, 24]}>
                KYC Advance
            </Row>
        </>
    );
});

export default KycAdvance;
