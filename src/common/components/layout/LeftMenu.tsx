import React, { FC } from "react";
import { Link } from "react-router-dom";
import Menu from "antd/es/menu";
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UserOutlined,
    UploadOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { mainRoutes } from '../../../core/routes/path/mainRoutes'
import styled from "astroturf";


export const LeftMenu: FC = () => {
    return (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
                <MyLink to={mainRoutes.statistics.link}>
                    <span>{mainRoutes.statistics.title}</span>
                </MyLink>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                Ссылка
      </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
                Ссылка
      </Menu.Item>
            <Menu.Item key="4" icon={<BarChartOutlined />}>
                nav 4
      </Menu.Item>
            <Menu.Item key="5" icon={<CloudOutlined />}>
                nav 5
      </Menu.Item>
            <Menu.Item key="6" icon={<AppstoreOutlined />}>
                nav 6
      </Menu.Item>
            <Menu.Item key="7" icon={<TeamOutlined />}>
                nav 7
      </Menu.Item>
            <Menu.Item key="8" icon={<ShopOutlined />}>
                nav 8
      </Menu.Item>
        </Menu>)
}


const MyLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex !important;
  align-items: center;
  text-decoration: none;
  white-space: normal;
  line-height: 20px;
`;