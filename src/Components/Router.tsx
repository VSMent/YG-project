import { createBrowserRouter } from 'react-router-dom'
import React from 'react'
import { NAV_LINKS } from '../data/constants'
import MainPage from '../Pages/MainPage'
import LoginPage from '../Pages/LoginPage'
import ErrorPage from '../Pages/ErrorPage'
import Layout from './Layout'

const Router = createBrowserRouter(
  [
    {
      path: NAV_LINKS.LOGIN,
      element: <LoginPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: NAV_LINKS.MAIN,
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          element: <MainPage />,
          index: true,
        },
        {
          path: NAV_LINKS.EMPLOYEES,
          element: <>{NAV_LINKS.EMPLOYEES}</>,
        },
        {
          path: NAV_LINKS.CLIENTS,
          element: <>{NAV_LINKS.CLIENTS}</>,
        },
        {
          path: NAV_LINKS.PERSONNEL,
          element: <>{NAV_LINKS.PERSONNEL}</>,
        },
        {
          path: NAV_LINKS.FINANCES,
          element: <>{NAV_LINKS.FINANCES}</>,
        },
        {
          path: NAV_LINKS.PRODUCTION,
          element: <>{NAV_LINKS.PRODUCTION}</>,
        },
        {
          path: NAV_LINKS.COMMUNICATION,
          element: <>{NAV_LINKS.COMMUNICATION}</>,
        },
        {
          path: NAV_LINKS.SELF_MANAGEMENT,
          element: <>{NAV_LINKS.SELF_MANAGEMENT}</>,
        },
      ],
    },
  ],
  { basename: `${process.env.REACT_APP_ROUTER_BASE_NAME}` }
)

export default Router
