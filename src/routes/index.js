import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

import DefaultLayout from '@src/layouts/DefaultLayout'
import LandingLayout from '@src/layouts/LandingLayout'

const LandingPage = lazy(() => import('@src/pages/landing-page/LandingPage'));
const Login = lazy(() => import('@src/pages/Login'));
const NotFound = lazy(() => import('@src/pages/NotFound'));

const routes = [
  {
    path: "/",
    exact: true,
    page: () => <Redirect to="/landing-page" />
  },
  {
    path: "/landing-page",
    layout: LandingLayout,
    page: LandingPage
  },
  {
    path: "/login",
    layout: LandingLayout,
    page: Login,
    role: 'Guest'
  },
]

export default [
    ...routes,
    {
      path: "*",
      layout: DefaultLayout,
      page: NotFound
    }
];
