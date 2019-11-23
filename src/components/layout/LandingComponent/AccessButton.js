import React from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux"

import { Button, Menu, Dropdown, Avatar, Icon, Modal } from 'antd'
import { FormattedMessage } from 'react-intl';

import history from '@src/history'
import { USER_SIGNOUT } from '@src/types'

const AccessButton = (props) => {
    const handleLogout = () => {
        Modal.confirm({
            title: 'Confirm logout',
            content: 'Do you realy want to logout?',
            okText: 'Yes',
            onOk() {
              props.dispatch({type: USER_SIGNOUT})
            }
        });
    }
    const menu = (
      <Menu>
        <Menu.Item key="center">
            <Icon type="user" />
            <FormattedMessage id="menu.account.center" defaultMessage="account center" />
        </Menu.Item>
        <Menu.Item key="settings">
            <Icon type="setting" />
            <FormattedMessage id="menu.account.settings" defaultMessage="account settings" />
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout" onClick={ handleLogout }>
            <Icon type="logout" />
            <FormattedMessage id="menu.account.logout" defaultMessage="logout" />
        </Menu.Item>
      </Menu>
    )

    const getAccessButton = () => {
        if (props.isAuthenticated) {
            return (
                <Dropdown overlay={menu} placement="bottomRight">
                    <span className="menu" onClick={() => history.push('/dashboard') }>
                        <Avatar style={{ backgroundColor: '#1890ff' }} icon="user" />
                        <span style={{paddingLeft: '10px'}}>{props.user.name}</span>
                    </span>
                </Dropdown>
            )
        } else {
            return (
                <React.Fragment>
                    <Button type="link" onClick={() => history.push('/login')}>Sign In</Button>
                    <Button type="primary" onClick={() => history.push('/register')}>TRY IT FREE</Button>
                </React.Fragment>
            )
        }
    }

    return (
        <React.Fragment> { getAccessButton() } </React.Fragment>
    )
}

AccessButton.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.object
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.status,
    user: state.auth.user || {}
  }
}

export default connect(mapStateToProps)(AccessButton)
