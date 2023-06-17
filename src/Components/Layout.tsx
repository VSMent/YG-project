import { Outlet } from 'react-router'
import NavBar from './NavBar'
import { Toaster } from './shadcn-ui/components/Toast/toaster'

const Layout = () => {
  const needFooter = true
  return (
    <>
      <header className="absolute inset-x-0 top-0 h-16 bg-amber-800"></header>
      <aside className="absolute bottom-0 left-0 top-16 w-24 bg-teal-200">
        <NavBar />
      </aside>
      <main
        className={`absolute left-24 right-0 top-16 ${
          needFooter ? 'bottom-16' : 'bottom-0'
        } bg-indigo-500`}
      >
        <Outlet />
        <Toaster />
      </main>
      {needFooter && (
        <footer className="absolute bottom-0 left-24 right-0 h-16 bg-rose-500"></footer>
      )}
    </>
  )
}

export default Layout
