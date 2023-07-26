import { createBrowserRouter } from 'react-router-dom'
import React from 'react'
import { NAV_LINKS } from '../data/constants'
import LoginPage from './LoginPage'
import ErrorPage from './ErrorPage'
import Layout from './Layout'
import MainPage from './MainPage'
import EmployeesPage from './EmployeesPage'
import CommunicationPage from './CommunicationPage'
import PersonnelPage from './PersonnelPage'
import ProductionPage from './ProductionPage'
import FinancesPage from './FinancesPage'
import ClientsPage from './ClientsPage'

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
          element: <EmployeesPage />,
        },
        {
          path: NAV_LINKS.CLIENTS.to,
          handle: { name: NAV_LINKS.CLIENTS.name },
          element: <ClientsPage />,
        },
        {
          path: NAV_LINKS.PERSONNEL.to,
          handle: { name: NAV_LINKS.PERSONNEL.name },
          element: <PersonnelPage />,
        },
        {
          path: NAV_LINKS.FINANCES.to,
          handle: { name: NAV_LINKS.FINANCES.name },
          element: <FinancesPage />,
        },
        {
          path: NAV_LINKS.PRODUCTION.to,
          handle: { name: NAV_LINKS.PRODUCTION.name },
          element: <ProductionPage />,
        },
        {
          path: NAV_LINKS.COMMUNICATION.to,
          handle: { name: NAV_LINKS.COMMUNICATION.name },
          element: <CommunicationPage />,
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
