import { defaultOptions } from '@constants/defaultOptions'
import React, { FC } from 'react'
import Lottie from 'react-lottie'
import coder from '@assets/json/coder.json'

const HomePage: FC = () => {
  return (
    <div>
      <Lottie options={{ ...defaultOptions, animationData: coder, loop: true }} height={400} width={400} />
    </div>
  )
}

export default HomePage
