import React from 'react'
import PropTypes from "prop-types"
import PageLoading from '@src/components/common/PageLoading'

const AuthLoading = ({ processing, children}) => (
    <div>
        { processing ? <PageLoading /> : children }
    </div>
);

AuthLoading.propTypes = {
    processing: PropTypes.bool.isRequired
}

export default AuthLoading
