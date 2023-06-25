import { useLocation, useRouteError } from 'react-router'

const ErrorPage = () => {
  const error = useRouteError()
  console.error('Error happened', error)

  const location = useLocation()
  console.log('location', location.pathname)

  return (
    <>
      <h1>Error</h1>
    </>
  )
}

export default ErrorPage
