import React, { useState } from 'react'
import { Layout, Card, Row, Col, Form, Icon, Button, Spin, Alert } from 'antd'
import { connect } from "react-redux";

import { FormDecorator } from '@src/components/form'
import api from '@src/api'
import history from '@src/history'
import jwt from '@src/utils/jwt'
import { USER_SIGNIN } from '@src/types'

const Login = (props) => {
    const [processing, setProcessing] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

    const handleSubmit = e => {
        e.preventDefault()
        props.form.validateFields(async (err, values) => {
          if (!err) {
            setProcessing(true)
            try {
                const res = await api.post('/login', values)
                await jwt.setToken(res.data.token)
                const user = {
                    id: '029485029348502',
                    name: 'Warman Suganda'
                }
                await props.dispatch({type: USER_SIGNIN, user: user})
                await history.push('/dashboard')
            } catch (e) {
                setErrorMessage('Login failed')
                setProcessing(false)
            }
          }
        })
    }

    const { getFieldDecorator } = props.form

    return (
        <Layout className="banner-container">
            <Layout.Content>
                <Row type="flex" justify="center" align="middle" style={{minHeight:'80vh'}}>
                  <Col span={12}>
                      <h2 className="text-center">It's great to see you again!</h2>
                      <Card className style={{ minWidth: 300, maxWidth: 400, margin: '16px auto' }} loading={false}>
                          <Spin spinning={processing}>
                              <Form onSubmit={handleSubmit}>
                                <h3>Sign In</h3>

                                { errorMessage && <Alert message={errorMessage} type="error" showIcon style={{ marginBottom: '15px' }} /> }

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
                          </Spin>
                      </Card>
                  </Col>
                </Row>
            </Layout.Content>
        </Layout>
    )
}

export default connect()(Form.create({ name: 'form_login' })(Login))
