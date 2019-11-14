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
    component: () => <Redirect to="/landing-page" />
  },
  {
    path: "/landing-page",
    layout: LandingLayout,
    component: LandingPage
  },
  {
    path: "/login",
    layout: DefaultLayout,
    component: Login
  },
]

export default [
    ...routes,
    {
      path: "*",
      layout: DefaultLayout,
      component: NotFound
    }
];
