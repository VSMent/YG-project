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
      path: NAV_LINKS.LOGIN.to,
      element: <LoginPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: NAV_LINKS.MAIN.to,
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          element: <MainPage />,
          handle: { name: NAV_LINKS.MAIN.name },
          index: true,
        },
        {
          path: NAV_LINKS.EMPLOYEES.to,
          handle: { name: NAV_LINKS.EMPLOYEES.name },
          element: <>{NAV_LINKS.EMPLOYEES.name}</>,
        },
        {
          path: NAV_LINKS.CLIENTS.to,
          handle: { name: NAV_LINKS.CLIENTS.name },
          element: <>{NAV_LINKS.CLIENTS.name}</>,
        },
        {
          path: NAV_LINKS.PERSONNEL.to,
          handle: { name: NAV_LINKS.PERSONNEL.name },
          element: <>{NAV_LINKS.PERSONNEL.name}</>,
        },
        {
          path: NAV_LINKS.FINANCES.to,
          handle: { name: NAV_LINKS.FINANCES.name },
          element: <>{NAV_LINKS.FINANCES.name}</>,
        },
        {
          path: NAV_LINKS.PRODUCTION.to,
          handle: { name: NAV_LINKS.PRODUCTION.name },
          element: <>{NAV_LINKS.PRODUCTION.name}</>,
        },
        {
          path: NAV_LINKS.COMMUNICATION.to,
          handle: { name: NAV_LINKS.COMMUNICATION.name },
          element: <>{NAV_LINKS.COMMUNICATION.name}</>,
        },
        {
          path: NAV_LINKS.SELF_MANAGEMENT.to,
          handle: { name: NAV_LINKS.SELF_MANAGEMENT.name },
          element: <>{NAV_LINKS.SELF_MANAGEMENT.name}</>,
        },
      ],
    },
  ],
  { basename: `${process.env.REACT_APP_ROUTER_BASE_NAME}` }
)

export default Router
