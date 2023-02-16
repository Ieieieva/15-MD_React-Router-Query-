import { Outlet, NavLink } from "react-router-dom"
import './Layout.css'

export const Layout = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar__list">
          <li>
            <NavLink 
              to="/"
              className="navbar__item">
                Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="characters"
              className="navbar__item">
                Characters
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="about"
              className="navbar__item">
                About
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}