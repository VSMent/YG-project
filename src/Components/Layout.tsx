import { Outlet } from 'react-router'
import { useUserStore } from '../Utils/Stores'
import LoginPage from '../Pages/LoginPage'
import NavBar from './NavBar'
import { Toaster } from './shadcn-ui/components/Toast/toaster'

const Layout = () => {
  const needFooter = true
  const wipeUsers = useUserStore((state) => state.wipeUsers)
  const logOut = useUserStore((state) => state.logOut)
  const { currentUser } = useUserStore()

  const basicLayout = (
    <>
      <header className="absolute inset-x-0 top-0 h-16 bg-gray-300">
        <button onClick={wipeUsers}>wipeUsers</button>{' '}
        <button onClick={logOut}>logOut</button>
      </header>
      <aside className="absolute bottom-0 left-0 top-16 w-[4.5rem]">
        <NavBar />
      </aside>
      <main
        className={`absolute left-[4.5rem] right-0 top-16 ${
          needFooter ? 'bottom-16' : 'bottom-0'
        } bg-amber-100`}
      >
        <Outlet />
        <Toaster />
      </main>
      {needFooter && (
        <footer className="absolute bottom-0 left-[4.5rem] right-0 h-16 bg-blue-300"></footer>
      )}
    </>
  )

  return currentUser ? basicLayout : <LoginPage />
}
export default Layout
