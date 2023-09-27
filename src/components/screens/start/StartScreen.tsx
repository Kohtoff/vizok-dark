import Lodaer from '@/components/ui/Lodaer'
import Logo from '@/components/ui/Logo'
import { NextPage } from 'next'
import React from 'react'

type Props = {}

const StartScreen = (props: Props) => {
  return (
    <div className='h-[100vh] flex-center'>
      <Logo />
      <Lodaer className="mt-[100px]" />
      <small className="text-gray mt-[20px]">Just small preporations for you {"<3"}</small>
      {/* <span className='absolute bottom-6'>Powered by @kohtoff</span> */}
    </div>
  )
}

export default StartScreen
