import { navbarMenu } from '@constants/navbarMenu'
import React, { FC, useState } from 'react'

const NavbarBottom: FC = () => {
  const [open, setOpen] = useState<boolean>(false)

  const circle = 'flex md:hidden justify-center items-center rounded-full  w-12 h-12 bg-[#03dac6]'
  return (
    <>
      <div className={circle + ' bottom-8 fixed right-6 z-20'}>
        <div
          id="hamburger"
          className={`shadow-2xl drop-shadow-2xl ${open ? 'open' : ''}`}
          onClick={() => setOpen(prev => !prev)}
        >
          <svg width="50" height="50" viewBox="0 0 100 100">
            <path
              className="line line1"
              d="M 20,35 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path className="line line2" d="M 20,50 H 70" />
            <path
              className="line line3"
              d="M 20,65 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </div>
      </div>
      <div
        className={`fixed overflow-hidden transition-all delay-100 duration-1000 bottom-24 right-6 z-20 flex flex-col gap-y-4 md:hidden ${
          open ? 'h-60' : 'h-0'
        }`}
      >
        {navbarMenu.map(({ id, Icon }, i) => (
          <div
            key={id}
            className={circle + ` delay-100 transition-all duration-700 bottom-${i * 8} ${!open && 'translate-y-52'}`}
          >
            <Icon color="white" />
          </div>
        ))}
      </div>
    </>
  )
}

export default NavbarBottom
