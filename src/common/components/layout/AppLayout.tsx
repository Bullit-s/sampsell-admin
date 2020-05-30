import React, { FC, useMemo } from "react";
import styled from "astroturf";
import { Layout } from "antd";
import { LeftMenu } from "./LeftMenu";
// import logo from "../../../resource/img/logo.png";
import { UserBar } from "../userBar";

const { Content, Footer, Sider } = Layout;
// const { Title } = Typography;

export const AppLayout: FC = ({ children }) => {
  const menu = useMemo(
    () => (
      <>
        <LogoWrapper className="logo">
          <UserBar />
          {/* <img src={logo} alt="logo" width={32} height={32} />
          <LogoTitle level={3}>ampSell.Ru</LogoTitle> */}
        </LogoWrapper>
        <LeftMenu />
      </>
    ),
    []
  );
  const content = useMemo(() => <MyContent>{children}</MyContent>, [children]);

  return (
    <MyLayout>
      <Sider collapsed={window.innerWidth <= 767}>{menu}</Sider>
      <Layout className="site-layout">
        {content}
        <MyFooter>SampSell Admin ©2020</MyFooter>
      </Layout>
    </MyLayout>
  );
};

const LogoWrapper = styled.div`
  height: 32px;
  margin: 16px 0;
  display: flex;
  justify-content: center;
`;
// const LogoTitle = styled(Title)`
//   color: white !important;
//  font-weight: 700;
//   @media screen and(max-width: 767px) {
//     display: none;
//   }
// `;

const MyLayout = styled(Layout)`
  min-height: 100vh;
`;
const MyContent = styled(Content)`
  margin: 0 16px;
  @media screen and(max-width: 767px) {
    margin: 0 5px;
  }
`;

const MyFooter = styled(Footer)`
  text-align: center;
`;
