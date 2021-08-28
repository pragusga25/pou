import React from 'react'
import Lottie from 'react-lottie'
import loader from '@assets/json/loader.json'
import { defaultOptions } from '@constants/defaultOptions'
import { useWindowSize } from '@hooks/useWindowSize'

const Loader: React.FC = () => {
  const { width } = useWindowSize()

  let size = 250

  if (width) {
    if (width > 1500) {
      size = 600
    } else if (width > 1200) {
      size = 500
    } else if (width > 1000) {
      size = 450
    } else if (width > 800) {
      size = 400
    } else if (width > 500) {
      size = 300
    }
  }

  return (
    <div className="bg-[#161d20] font-quotes flex-col min-h-screen w-full flex justify-center items-center">
      <Lottie options={{ ...defaultOptions, animationData: loader, loop: true }} width={size} height={size} />
      <div className="text-[#03dac6] text-base text-center md:text-xl xl:text-2xl px-4 md:px-8 xl:px-14">
        <p>I'm always loading my brain with new ways of looking at something - Tony Robbins</p>
      </div>
    </div>
  )
}

export default Loader
