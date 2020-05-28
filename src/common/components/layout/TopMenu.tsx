import React, { FC } from 'react'
import { Menu } from 'antd';
import { shopLink } from '../../../core/routes/path/externalLinks'

export const TopMenu: FC = () => {
    return (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1"><a href={'/'}>Главная</a></Menu.Item>
            <Menu.Item key="2"><a href={shopLink}>Перейти в магазин</a></Menu.Item>
        </Menu>
    )
}
