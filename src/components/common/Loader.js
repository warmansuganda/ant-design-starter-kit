import React from 'react';
import PageLoader from '@src/components/common/PageLoader';

const Loader = ({ processing, children}) => (
    <div>
        { processing ? <PageLoader /> : children }
    </div>
);

export default Loader
