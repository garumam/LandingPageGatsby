import React from 'react';
import { Layout, Menu, Icon, Drawer } from 'antd';

import './Header.css';

const { Header } = Layout;

const menu = (classe, mode, onClose, style, scrollTo) => (
    <Menu
        theme="light"
        mode={mode}
        className={classe}
        selectable={false}
        style={style}
    >
        {[{text: 'HOME', section: 'home_section'},
        {text: 'FUNCIONALIDADES', section: 'feature_section'}, 
        {text: 'PREÇOS', section: 'pricing_section'}, 
        {text: 'CONTATO', section: 'contact_section'}].map((value) => (
            <Menu.Item 
            key={value.text} 
            style={{ verticalAlign: 'unset', borderBottom: 'unset' }}
            onClick={() => {(onClose && onClose()); scrollTo(value.section);}}>
                {value.text}
            </Menu.Item>
        ))}
    </Menu>
)

export default ({ onClose, visible, showDrawer, style, menuBg, scrollTo }) => (
    <Header className={`header ${menuBg}`} style={style}>
        <div className="logo">
            SEVS
        </div>

        {menu('appBarMenu', 'horizontal', null, style, scrollTo)}
        
        <Icon type="menu-fold" className="menuIcon" onClick={showDrawer} />

        <Drawer
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
            {menu('drawerMenu', 'vertical', onClose, null, scrollTo)}
        </Drawer>        
    </Header>
);