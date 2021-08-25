import React, { FC } from 'react'
import Navbar from './Navbar'
// #202040
const Layout: FC = ({ children }) => {
  return (
    <div className="bg-[#121212] min-h-screen w-full flex flex-col items-center px-6 md:px-10 xl:px-16">
      <Navbar />
      <div className="w-full overflow-hidden">{children}</div>
    </div>
  )
}

export default Layout
