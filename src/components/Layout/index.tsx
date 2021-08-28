import React, { FC } from 'react'
import Navbar from '../Navbar'
import Particles from 'react-particles-js'
import { particleConfig } from '@constants/particleConfig'

const Layout: FC = ({ children }) => {
  return (
    <>
      <div className="bg-[#161d20] font-body min-h-screen w-full flex flex-col items-center px-6 md:px-10 xl:px-16">
        <Particles params={particleConfig} />
        <Navbar />
        <div className="w-full overflow-hidden">{children}</div>
      </div>
    </>
  )
}

export default Layout
