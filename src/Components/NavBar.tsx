import { NavLink } from 'react-router-dom'
import { NAV_LINKS } from '../data/constants'
import styles from '../styles/NavBar.module.sass'

const NavBar = () => {
  return <>
    <ul className={styles.navUl}>
      <li><NavLink to={NAV_LINKS.MAIN}>Main</NavLink></li>
      <li><NavLink to={NAV_LINKS.EMPLOYEES}>Employees</NavLink></li>
      <li><NavLink to={NAV_LINKS.CLIENTS}>Clients</NavLink></li>
      <li><NavLink to={NAV_LINKS.PERSONNEL}>Personnel</NavLink></li>
      <li><NavLink to={NAV_LINKS.FINANCES}>Finances</NavLink></li>
      <li><NavLink to={NAV_LINKS.PRODUCTION}>Production</NavLink></li>
      <li><NavLink to={NAV_LINKS.COMMUNICATION}>Communication</NavLink></li>
      <li><NavLink to={NAV_LINKS.SELF_MANAGEMENT}>Self-management</NavLink></li>
    </ul>
  </>
}

export default NavBar