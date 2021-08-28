import { navbarMenu } from '@constants/navbarMenu'
import React, { FC } from 'react'

import { Link, NavLink } from 'react-router-dom'

import NavbarBottom from './NavbarBottom'

const Navbar: FC = () => {
  return (
    <>
      <nav className="w-full h-16 z-50 text-white flex justify-between items-center fixed px-6 md:px-10 xl:px-16">
        <Link to="/">
          <div className="cursor-pointer font-logo text-[#03dac6]">PRAGUSGA</div>
        </Link>
        <div className="gap-x-6 font-bold text-base md:text-lg hidden md:flex">
          {navbarMenu.map(({ name, id, path }) => (
            <NavLink
              exact
              to={path}
              activeStyle={{
                color: '#03dac6',
              }}
              key={id}
              className="flex justify-center items-center"
            >
              <div className="cursor-pointer uppercase">{name}</div>
            </NavLink>
          ))}
        </div>
      </nav>
      {/* <NavbarBottom /> */}
    </>
  )
}

export default Navbar
