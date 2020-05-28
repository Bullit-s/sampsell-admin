import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import Menu from "antd/es/menu";
import {
    BarChartOutlined,
    AuditOutlined,
    GiftOutlined,
    UnorderedListOutlined,

} from '@ant-design/icons';
import { mainRoutes } from '../../../core/routes/path/mainRoutes'
import styled from "astroturf";


export const LeftMenu: FC = () => {

    return (
        <Menu theme="dark" mode="inline">
            <Menu.Item key="1" >
                <MyLink to={mainRoutes.statistics.link}>
                    <BarChartOutlined />
                    <span>{mainRoutes.statistics.title}</span>
                </MyLink>
            </Menu.Item>
            <Menu.Item key="2">
                <MyLink to={mainRoutes.gifts.link} >
                    <GiftOutlined />
                    <span>{mainRoutes.gifts.title}</span>
                </MyLink>
            </Menu.Item>
            <Menu.Item key="3" >
                <MyLink to={mainRoutes.offereds.link}>
                    <AuditOutlined />
                    <span>{mainRoutes.offereds.title}</span>
                </MyLink>
            </Menu.Item>
            <Menu.Item key="4">
                <MyLink to={mainRoutes.accounts.link}>
                    <UnorderedListOutlined />
                    <span>{mainRoutes.accounts.title}</span>
                </MyLink>
            </Menu.Item>

        </Menu>)
}


const MyLink = styled(NavLink)`
width: 100%;
height: 100%;
display: flex !important;
align-items: center;
text-decoration: none;
white-space: normal;
line-height: 20px;
//   text-decoration: none;
//   white-space: normal;
  &.active{
      color: white;
  }
`;