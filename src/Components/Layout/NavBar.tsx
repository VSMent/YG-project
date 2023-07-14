import {
  Briefcase,
  CircleDollarSign,
  Factory,
  Home,
  MessagesSquare,
  PersonStanding,
  Users,
  UserSquare,
} from 'lucide-react'
import { NAV_LINKS } from '../../data/constants'
import NavBarLink from './NavBarLink'

const NavBar = () => {
  return (
    <>
      <div className="p-1">
        <NavBarLink to={NAV_LINKS.MAIN.to} icon={<Home />} name="Main" />
        <NavBarLink
          to={NAV_LINKS.EMPLOYEES.to}
          icon={<Users />}
          name="Employees"
        />
        <NavBarLink
          to={NAV_LINKS.CLIENTS.to}
          icon={<Briefcase />}
          name="Clients"
        />
        <NavBarLink
          to={NAV_LINKS.PERSONNEL.to}
          icon={<UserSquare />}
          name="Personnel"
        />
        <NavBarLink
          to={NAV_LINKS.FINANCES.to}
          icon={<CircleDollarSign />}
          name="Finances"
        />
        <NavBarLink
          to={NAV_LINKS.PRODUCTION.to}
          icon={<Factory />}
          name="Production"
        />
        <NavBarLink
          to={NAV_LINKS.COMMUNICATION.to}
          icon={<MessagesSquare />}
          name="Communication"
        />
        <NavBarLink
          to={NAV_LINKS.SELF_MANAGEMENT.to}
          icon={<PersonStanding />}
          name="Self-management"
        />
      </div>
    </>
  )
}

export default NavBar
