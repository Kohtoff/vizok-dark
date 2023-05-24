import SignInForm from '@/modules/auth/ui/SignInForm/SignInForm';
import { NextPage } from 'next';
import React from 'react';

export default function SigninPage() {
  return (
      <div className='flex flex-col h-[100vh] px-[24px]'>
        <SignInForm />
      </div>
  );
};
SigninPage.getLayout = (page: NextPage) => page;
