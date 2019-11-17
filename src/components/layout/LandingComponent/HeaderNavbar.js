import React from 'react'
import { Layout, Row, Col, Button, Menu } from 'antd'

import history from '@src/history'
import logo from '@src/assets/image/waiout-text.png'

const HeaderNavbar = (props) => {
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
                            defaultSelectedKeys={['1']}
                            style={{ lineHeight: '64px' }}
                          >
                            <Menu.Item key="1">Our Platform</Menu.Item>
                            <Menu.Item key="2">Testimonial</Menu.Item>
                            <Menu.Item key="3">Knowledge</Menu.Item>
                            <Menu.Item key="4">About Us</Menu.Item>
                        </Menu>
                    </Col>
                    <Col className="text-right" span={8}>
                        <Button type="link" onClick={() => history.push('/login')}>Sign In</Button>
                        <Button type="primary" onClick={() => history.push('/register')}>TRY IT FREE</Button>
                    </Col>
                </Row>
              </Col>
            </Row>
        </Layout.Header>
    )
}

export default HeaderNavbar
