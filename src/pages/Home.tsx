import { defaultOptions } from '@constants/defaultOptions'
import React, { FC } from 'react'
import Lottie from 'react-lottie'
import coder from '@assets/json/coder.json'
import { useWindowSize } from '@hooks/useWindowSize'
import Typewriter from 'typewriter-effect'
import { strings } from '@constants/words'

const HomePage: FC = () => {
  const { width } = useWindowSize()

  let size = 200

  if (width) {
    if (width > 1500) {
      size = 600
    } else if (width > 1000) {
      size = 450
    } else if (width > 800) {
      size = 350
    } else if (width > 500) {
      size = 300
    }
  }

  return (
    <div className="text-white flex flex-col items-center h-full">
      <div className="flex flex-col md:flex-row items-center justify-center h-screen ">
        <div className="text-3xl lg:text-4xl xl:text-6xl mb-4 md:mr-32 md:mb-0">
          <p>Hello There!</p>
          <p className="mt-4">
            I'm <span className="text-[#03dac6] font-bold"> Taufik Pragusga </span>
          </p>
          <div className="text-[#03dac6] font-serif mt-4 md:mt-10">
            <Typewriter
              options={{
                strings,
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </div>
        </div>
        <div>
          <Lottie options={{ ...defaultOptions, animationData: coder, loop: true }} height={size} width={size} />
        </div>
      </div>
    </div>
  )
}

export default HomePage
