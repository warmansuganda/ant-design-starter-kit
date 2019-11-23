import React from 'react'
import { Layout, Row, Col, Menu } from 'antd'

import history from '@src/history'
import logo from '@src/assets/image/waiout-text.png'
import AccessButton from './AccessButton'
import SelectLanguage from './SelectLanguage'

const HeaderNavbar = (props) => {
    const menus = [
        {
            title: 'Our Platform',
            url: '/',
        },
        {
            title: 'Testimonial',
            url: '/',
        },
        {
            title: 'Knowledge',
            url: '/',
        },
        {
            title: 'About Us',
            url: '/',
        }
    ]

    return (
        <Layout.Header className="clearfix">
            <Row>
              <Col span={4}>
                    <a href="/">
                        <img alt="Logo" className="logo" src={logo} />
                    </a>
              </Col>
              <Col span={20}>
                <Row>
                    <Col span={16}>
                        <Menu
                            id="nav"
                            mode="horizontal"
                            className="no-border no-background"
                            defaultSelectedKeys={['0']}
                            style={{ lineHeight: '64px' }}
                          >
                          {menus.map((item, key) => <Menu.Item key={key} onClick={() => history.push(item.url)}>{item.title}</Menu.Item>)}
                        </Menu>
                    </Col>
                    <Col className="text-right" span={8}>
                        <AccessButton />
                        <SelectLanguage />
                    </Col>
                </Row>
              </Col>
            </Row>
        </Layout.Header>
    )
}

export default HeaderNavbar
