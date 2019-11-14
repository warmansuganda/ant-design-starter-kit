import React from 'react';
import PageLoader from '../common/PageLoader';

const Loader = ({ processing, children}) => (
    <div>
        { processing ? <PageLoader /> : children }
    </div>
);

export default Loader
