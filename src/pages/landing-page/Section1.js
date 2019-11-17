import React from 'react'
import { Layout, Button } from 'antd';

const Section1 = (props) => {
    return (
        <Layout className="home-s1 banner-container">
            <div className="banner-wrapper">
                <div className="banner-text-wrapper">
                    <h2>The fun ecosystem for front liners</h2>
                    <p>Managing front liners has never been easier </p>
                    <div className="start-button">
                        <Button size="large" type="primary">Start Exploring</Button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Section1
