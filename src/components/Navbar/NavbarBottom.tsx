import React, { FC, useState } from 'react'

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

export default NavbarBottom
