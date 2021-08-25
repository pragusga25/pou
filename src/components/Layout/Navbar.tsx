import { iconStyles, navbarMenu } from '@constants/navbarMenu'
import React, { FC, useState } from 'react'
import menuData from '@assets/json/menu.json'
import Lottie from 'react-lottie'
import { Link, NavLink } from 'react-router-dom'
import { defaultOptions } from '@constants/defaultOptions'

const NavbarBottom: FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <>
      <div
        className={`absolute right-6 bottom-16 z-10  ${
          open ? 'scale-100 h-96 w-32' : 'scale-0 h-0 w-0'
        } transition-all`}
        style={{
          backgroundColor: '#fbb034',
          backgroundImage: ' linear-gradient(315deg, #fbb034 0%, #ffdd00 74%)',
        }}
      >
        <div className="relative"></div>
      </div>
      <div className="absolute bottom-4 right-6 z-20">
        <div id="nav-menu" className={open ? 'open' : ''} onClick={() => setOpen(prev => !prev)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  )
}

const Navbar: FC = () => {
  return (
    <>
      <nav className="w-full h-16  text-[#03dac6] flex justify-between items-center">
        <Link to="/">
          <div className="cursor-pointer">PRAGUSGA</div>
        </Link>
        <div className="gap-x-6 font-bold text-base md:text-lg hidden md:flex">
          {navbarMenu.map(({ name, id, path }) => (
            <NavLink
              exact
              to={path}
              activeStyle={{
                color: '#bb86fc',
              }}
              key={id}
              className="flex justify-center items-center"
            >
              <div className="cursor-pointer uppercase">{name}</div>
            </NavLink>
          ))}
        </div>
      </nav>
      <NavbarBottom />
    </>
  )
}

export default Navbar
