import Button from '@/components/ui/Button';
import Logo from '@/components/ui/Logo';
import React, { PropsWithChildren } from 'react';

type Props = {
  title: string;
  onSubmit: () => void;
};

const AuthForm = ({ title, children, onSubmit }: PropsWithChildren<Props>) => {
  return (
    <>
      <Logo />
      <form onSubmit={onSubmit}>
        <h2 className='text-center'>{title}</h2>
        <div className='mt-[20px] mb-[30px] flex flex-col gap-[20px]'>{children}</div>
      </form>
    </>
  );
};

type ExternalAuthProps = {};
const ExternalAuth = () => {
  return (
    <div className='mt-6 space-y-[30px] xl:space-y-[30px] lg:space-y-[50px]'>
      <div className='flex items-center justify-center'>
        <hr className='grow text-darkGray' />
        <span className='text-sm bg-transparent px-2 text-gray'>OR</span>
        <hr className='grow text-darkGray' />
      </div>

      <div className='flex flex-col justify-center gap-[20px]'>
        <Button variant='filled' className='' color='black' icon='apple'>
          Auth with Apple
        </Button>
        <Button variant='filled' color='black' icon='google'>
          Auth with Google
        </Button>
      </div>
    </div>
  );
};
AuthForm.ExternalAuth = ExternalAuth;

type FooterProps = {};
const Footer = ({ children }: PropsWithChildren<FooterProps>) => {
  return <div className='mt-[100px] gap-1 text-center text-gray flex flex-col'>{children}</div>;
};
AuthForm.Footer = Footer;

export default AuthForm;
