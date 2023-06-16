import { Outlet } from 'react-router'
import NavBar from './NavBar'

const Layout = () => {
  return <>
    <header></header>
    <aside><NavBar/></aside>
    <main>
      <Outlet/>
    </main>
    <footer></footer>
  </>
}

export default Layout