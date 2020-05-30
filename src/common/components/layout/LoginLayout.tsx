import React, { FC, useMemo } from "react";
import { Layout, Typography } from "antd";
import { TopMenu } from "./TopMenu";
import styled from "astroturf";
import logo from "../../../resource/img/logo.png";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

export const LoginLayout: FC = ({ children }) => {
  const content = useMemo(
    () => (
      <MyContent>
        <ContentBody>{children}</ContentBody>
      </MyContent>
    ),
    [children]
  );

  return (
    <MyLayout className="layout">
      <MyHeader>
        <LogoWrapper>
          <img src={logo} alt="logo" width={32} height={32} />
          <LogoTitle level={3}>ampSell.Ru</LogoTitle>
        </LogoWrapper>
        <TopMenu />
      </MyHeader>
      {content}
      <MyFooter>SampSell Admin ©2020</MyFooter>
    </MyLayout>
  );
};

const LogoWrapper = styled.div`
  height: 32px;
  margin: 16px;
  float: left;
  display: flex;
`;

const LogoTitle = styled(Title)`
  color: white !important;
  font-weight: 700 !important;
  @media screen and(max-width: 767px) {
    display: none;
  }
`;

const MyLayout = styled(Layout)`
  height: 100vh;
`;

const MyHeader = styled(Header)`
  padding: 0;
`;

const MyContent = styled(Content)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 0 50px;
  min-height: 280px;
`;
const ContentBody = styled.div``;

const MyFooter = styled(Footer)`
  text-align: center;
`;
