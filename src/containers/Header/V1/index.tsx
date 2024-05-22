"use client"
import React, { useState } from 'react';
import { AppstoreOutlined, DesktopOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { usePathname, useRouter } from 'next/navigation';

type MenuItem = Required<MenuProps>['items'][number];
function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}
const items: MenuItem[] = [
    // getItem('audio', '1', <PieChartOutlined />),
    getItem('메인', '/', <DesktopOutlined />),
    // getItem('Option 3', '3', <ContainerOutlined />),

    getItem('ReduxToolKit', '/redux', <MailOutlined />, [
        getItem('메인', '/redux/main'),
        getItem('로그인', '/redux/login'),
    ]),

    // getItem('Image', '/image', <AppstoreOutlined />, [
    //     getItem('generator', '/image/generator'),
    //     getItem('edit', '/image/edit'),

    //     // getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
    // ]),
    // getItem('text', '/text', <AppstoreOutlined />, [
    //     getItem('gpt3_5', '/text/gpt3_5'),
    // ]),
    // getItem('카카오톡컨셉', '/kakaoTalk', <AppstoreOutlined />, [
    //     getItem('친구들', '/girl-friend/friends'),
    // ]),
    // getItem('도우미들', '/assistant', <AppstoreOutlined />),
];
export const HeaderV1 = () => {
    const [collapsed, setCollapsed] = useState(false);
    const router = useRouter();

    const pathname = usePathname();
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        console.log(pathname);
        if (e.key === 'home') {
            router.replace('/')
        } else if (pathname === e.key) {

        }
        else {
            router.replace(e.key)
        }

    };
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    return (
        <Menu
            onClick={onClick}
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={items}
        />
    )
}