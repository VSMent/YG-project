import { NavLink } from 'react-router-dom'
import { ReactElement } from 'react'

const NavBarLink = ({ to, icon, name }: NavBarLinkProps) => {
  return (
    <>
      <NavLink to={to} className="inline-block aspect-square w-full p-12">
        {icon}
        {name}
      </NavLink>
      <div className="p-2 pt-4">test</div>
    </>
  )
}

type NavBarLinkProps = {
  to: string
  icon: ReactElement
  name: string
}

export default NavBarLink
