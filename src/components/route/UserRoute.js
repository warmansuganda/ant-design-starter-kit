import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Route, Redirect } from "react-router-dom"
import AuthLoading from '@src/components/common/AuthLoading'

const UserRoute = ({ processing, isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      <AuthLoading processing={ processing }>{ isAuthenticated ? <Component {...props} /> : <Redirect to="/login" /> }</AuthLoading>
    }
  />
)

UserRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.status,
    processing: state.auth.processing
  }
}

export default connect(mapStateToProps)(UserRoute)
