import React, { FC, useMemo } from 'react';
import styled from "astroturf";
import { Layout } from 'antd';
import { LeftMenu } from './LeftMenu';

const { Content, Footer, Sider } = Layout;

export const AppLayout: FC = ({ children }) => {
    const menu = useMemo(
        () => (
            <>
                <Logo className="logo" />
                <LeftMenu />
            </>
        ),
        []
    );
    const content = useMemo(() => <MyContent>{children}</MyContent>, [children]);

    return <MyLayout>
        <Sider >
            {menu}
        </Sider>
        <Layout className="site-layout">
            {content}
            <MyFooter>SampSell Admin ©2020</MyFooter>
        </Layout>
    </MyLayout>
}


const Logo = styled.div`
  li .ant-menu-sub .ant-menu-item {
    background: #0e2833;
  }
`;

const MyLayout = styled(Layout)`
    min-height: 100vh;
`;
const MyContent = styled(Content)`
    margin: 0 16px;
`;

const MyFooter = styled(Footer)`
    text-align: center;
`;
