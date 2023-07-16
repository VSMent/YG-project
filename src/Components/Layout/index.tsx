import { Outlet, useMatches } from 'react-router'
import LoginPage from '../LoginPage'
import NavBar from './NavBar'
import { useChatStore, useUserStore } from '@utils/Stores'
import { Toaster } from '@sh/components/ui/toaster'
import { UserNav } from '@sh/components/examples/user-nav'

const Layout = () => {
  const { wipeUsers, logOut } = useUserStore()
  const { wipeChats } = useChatStore()
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
        <br />
        <button className="text-white hover:text-black" onClick={wipeChats}>
          wipeChats
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
