import React from 'react'
import { Layout } from 'antd';

import { HeaderNavbar } from '@src/components/layout/LandingComponent'

const DefaultLayout = (props) => {
    return (
        <Layout className="landing-page">
            <HeaderNavbar />
            <Layout.Content style={{ marginTop: 64 }}>
                { props.children }
            </Layout.Content>
            <Layout.Footer style={{ textAlign: 'center' }}>
                Ant Design ©2018 Created by Ant UED
            </Layout.Footer>
        </Layout>
    )
}

export default DefaultLayout
