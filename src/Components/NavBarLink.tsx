import { NavLink } from 'react-router-dom'
import { ReactElement, cloneElement } from 'react'

const NavBarLink = ({ to, icon, name }: NavBarLinkProps) => {
  const Icon = cloneElement(icon, { className: 'h-full w-full' })

  return (
    <div className="group relative transition-all ease-in">
      <NavLink
        to={to}
        className={
          'mb-1 flex aspect-square w-full items-center justify-center rounded-xl text-center text-gray-400 ' +
          'duration-200 last:mb-0 group-hover:text-black group-hover:shadow-md'
        }
      >
        <div className="h-1/2">{Icon}</div>
      </NavLink>
      <div
        className={
          'invisible absolute bottom-4 left-20 z-[1] inline-block w-40 rounded-xl bg-white p-2 text-center ' +
          'text-black opacity-0 duration-200 delay-0 ' +
          'group-hover:visible group-hover:opacity-100 group-hover:duration-1000 group-hover:delay-1000'
        }
      >
        {name}
      </div>
    </div>
  )
}

type NavBarLinkProps = {
  to: string
  icon: ReactElement
  name: string
}

export default NavBarLink
