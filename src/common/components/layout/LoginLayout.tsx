import React, { FC, useMemo } from 'react'
import { Layout } from 'antd';
import { TopMenu } from './TopMenu';
import styled from 'astroturf'
const { Header, Content, Footer } = Layout;

export const LoginLayout: FC = ({ children }) => {
    const content = useMemo(() => <MyContent><ContentBody>{children}</ContentBody></MyContent>, [children]);

    return (<MyLayout className="layout">
        <MyHeader>
            <Logo />
            <TopMenu />
        </MyHeader>
        {content}
        <MyFooter>SampSell Admin ©2020</MyFooter>
    </MyLayout>)
}


const Logo = styled.div`
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
  @media screen and (max-width: 767px){
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
const ContentBody = styled.div`
   
`;

const MyFooter = styled(Footer)`
    text-align: center;
`;
