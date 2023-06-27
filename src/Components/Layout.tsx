import { Outlet, useMatches } from 'react-router'
import { useUserStore } from '../Utils/Stores'
import LoginPage from '../Pages/LoginPage'
import { Toaster } from '../shadcn-ui/components/ui/toaster'
import { UserNav } from '../shadcn-ui/components/examples/user-nav'
import NavBar from './NavBar'

const Layout = () => {
  const wipeUsers = useUserStore((state) => state.wipeUsers)
  const logOut = useUserStore((state) => state.logOut)
  const { currentUser } = useUserStore()
  const match = (useMatches()[1]?.handle as { name: string }) ?? { name: '' }

  const basicLayout = (
    <div className="flex h-screen w-screen flex-row items-stretch justify-start ">
      <aside className="w-16 border-r">
        <NavBar />
        <button className="text-white hover:text-black" onClick={wipeUsers}>
          wipeUsers
        </button>
        <br />
        <button className="text-white hover:text-black" onClick={logOut}>
          logOut
        </button>
      </aside>
      <main className="bg-re flex flex-auto flex-col justify-start ">
        <header className="border-b">
          <div className="flex h-16 items-center px-4">
            {/*<MainNav className="mx-6" />*/}
            <h2 className="text-3xl font-bold tracking-tight">{match.name}</h2>
            <div className="ml-auto flex items-center space-x-4">
              <UserNav />
            </div>
          </div>
        </header>
        <section className="flex-auto ">
          <Outlet />
          <Toaster />
        </section>
      </main>
    </div>
  )

  return currentUser ? basicLayout : <LoginPage />
}
export default Layout
