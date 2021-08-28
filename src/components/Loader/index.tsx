import React from 'react'
import Lottie from 'react-lottie'
import loader from '@assets/json/loader.json'
import { defaultOptions } from '@constants/defaultOptions'

const Loader: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <Lottie options={{ ...defaultOptions, animationData: loader }} width={500} height={500} />
    </div>
  )
}

export default Loader
