import React, { FC } from "react";
import { Link } from "react-router-dom";
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
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1" icon={<BarChartOutlined />}>
                <MyLink to={mainRoutes.statistics.link}>
                    <span>{mainRoutes.statistics.title}</span>
                </MyLink>
            </Menu.Item>
            <Menu.Item key="2" icon={<GiftOutlined />}>
                <MyLink to={mainRoutes.gifts.link}>
                    <span>{mainRoutes.gifts.title}</span>
                </MyLink>
            </Menu.Item>
            <Menu.Item key="3" icon={<AuditOutlined />}>
                <MyLink to={mainRoutes.applications.link}>
                    <span>{mainRoutes.applications.title}</span>
                </MyLink>
            </Menu.Item>
            <Menu.Item key="4" icon={<UnorderedListOutlined />}>
                <MyLink to={mainRoutes.accounts.link}>
                    <span>{mainRoutes.accounts.title}</span>
                </MyLink>
            </Menu.Item>

        </Menu>)
}


const MyLink = styled(Link)`
  text-decoration: none;
  white-space: normal;
`;