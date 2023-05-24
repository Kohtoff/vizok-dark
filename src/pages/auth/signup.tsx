import SignUpForm from '@/modules/auth/ui/SignUpForm/SingUpForm'
import { NextPage } from 'next'
import React from 'react'

type Props = {}

const SignupPage = (props: Props) => {
  return (
    <>
      <div className='flex flex-col h-[100vh] pt-[100px] px-[24px]'>
        <SignUpForm />
      </div>
    </>
  )
}

SignupPage.getLayout = (page: NextPage) => page;
export default SignupPage;
