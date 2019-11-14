import React, { Suspense }  from 'react';
import { Router } from 'react-router-dom';

import Routes from '@src/components/route/Routes';
import PageLoader from '@src/components/common/PageLoader';
import history from '@src/history';
import routes from '@src/routes';

import '@src/assets/style/main.less';

function App() {
  return (
      <Router basename={process.env.REACT_APP_BASENAME || ''} history={history}>
            <Suspense fallback={ <PageLoader /> }>
                <Routes init={routes} />
            </Suspense>
      </Router>
  );
}

export default App;
