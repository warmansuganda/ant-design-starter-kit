import React from 'react'
import { Layout, Card, Row, Col, Form, Icon, Button } from 'antd';

import { FormDecorator } from '@src/components/form'

const Login = (props) => {
    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
    };

    const { getFieldDecorator } = props.form;

    return (
        <Layout className="banner-container">
            <Layout.Content>
                <Row type="flex" justify="center" align="middle" style={{minHeight:'80vh'}}>
                  <Col span={12}>
                      <h2 className="text-center">It's great to see you again!</h2>
                      <Card className style={{ minWidth: 300, maxWidth: 400, margin: '16px auto' }} loading={false}>
                          <Form onSubmit={handleSubmit}>
                            <h3>Sign In</h3>
                            <FormDecorator
                                name="username"
                                placeholder="Username"
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                init={getFieldDecorator}
                                rules={[{ required: true, message: 'Please input your Username!' }]} />

                            <FormDecorator
                                name="password"
                                type="password"
                                placeholder="Password"
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                init={getFieldDecorator}
                                rules={[{ required: true, message: 'Please input your Password!' }]} />

                            <FormDecorator
                                name="remember"
                                type="checkbox"
                                className="no-margin-bottom"
                                placeholder="Remember me"
                                defaultValue={true}
                                init={getFieldDecorator}
                                >
                                <a className="float-right" href="/forgot-password">
                                  Forgot password
                                </a>
                            </FormDecorator>

                            <Form.Item>
                              <Button type="primary" htmlType="submit" className="login-form-button" block size="large">
                                Log in
                              </Button>
                              Or <a href="/register">register now!</a>
                            </Form.Item>
                          </Form>
                      </Card>
                  </Col>
                </Row>
            </Layout.Content>
        </Layout>
    )
}

export default Form.create({ name: 'normal_login' })(Login)
