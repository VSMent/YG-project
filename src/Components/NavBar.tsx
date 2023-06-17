import { NAV_LINKS } from '../data/constants'
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
import NavBarLink from './NavBarLink'

const NavBar = () => {
  return (
    <>
      <div className="p-1">
        <NavBarLink to={NAV_LINKS.MAIN} icon={<Home />} name="Main" />
        <NavBarLink
          to={NAV_LINKS.EMPLOYEES}
          icon={<Users />}
          name="Employees"
        />
        <NavBarLink
          to={NAV_LINKS.CLIENTS}
          icon={<Briefcase />}
          name="Clients"
        />
        <NavBarLink
          to={NAV_LINKS.PERSONNEL}
          icon={<UserSquare />}
          name="Personnel"
        />
        <NavBarLink
          to={NAV_LINKS.FINANCES}
          icon={<CircleDollarSign />}
          name="Finances"
        />
        <NavBarLink
          to={NAV_LINKS.PRODUCTION}
          icon={<Factory />}
          name="Production"
        />
        <NavBarLink
          to={NAV_LINKS.COMMUNICATION}
          icon={<MessagesSquare />}
          name="Communication"
        />
        <NavBarLink
          to={NAV_LINKS.SELF_MANAGEMENT}
          icon={<PersonStanding />}
          name="Self-management"
        />
      </div>
    </>
  )
}

export default NavBar
