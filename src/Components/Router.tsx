import { createBrowserRouter } from 'react-router-dom'
import { NAV_LINKS } from '../data/constants'
import Layout from './Layout'
import MainPage from '../Pages/MainPage'
import LoginPage from '../Pages/LoginPage'
import React from 'react'

const Router = createBrowserRouter([
  {
    path: NAV_LINKS.MAIN,
    element: <Layout/>,
    children: [
      {
        element: <MainPage/>,
        index: true
      },
      {
        path: NAV_LINKS.LOGIN,
        element: <LoginPage/>
      },
      {
        path: NAV_LINKS.EMPLOYEES,
        element: <>{NAV_LINKS.EMPLOYEES}</>
      },
      {
        path: NAV_LINKS.CLIENTS,
        element: <>{NAV_LINKS.CLIENTS}</>
      },
      {
        path: NAV_LINKS.PERSONNEL,
        element: <>{NAV_LINKS.PERSONNEL}</>
      },
      {
        path: NAV_LINKS.FINANCES,
        element: <>{NAV_LINKS.FINANCES}</>
      },
      {
        path: NAV_LINKS.PRODUCTION,
        element: <>{NAV_LINKS.PRODUCTION}</>
      },
      {
        path: NAV_LINKS.COMMUNICATION,
        element: <>{NAV_LINKS.COMMUNICATION}</>
      },
      {
        path: NAV_LINKS.SELF_MANAGEMENT,
        element: <>{NAV_LINKS.SELF_MANAGEMENT}</>
      },
    ]
  },
])

export default Router