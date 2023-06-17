import { NavLink } from 'react-router-dom'
import { ReactElement, cloneElement } from 'react'

const NavBarLink = ({ to, icon, name }: NavBarLinkProps) => {
  const Icon = cloneElement(icon, { className: 'h-full w-full' })

  return (
    <>
      <NavLink
        to={to}
        className="mb-1 flex aspect-square w-full items-center justify-center rounded-xl bg-red-400 text-center"
      >
        {/*<div className="">{(icon.props = { color: 'pink' })}</div>*/}
        <div className="h-1/2">{Icon}</div>
        {/*{name}*/}
      </NavLink>
    </>
  )
}

type NavBarLinkProps = {
  to: string
  icon: ReactElement
  name: string
}

export default NavBarLink
