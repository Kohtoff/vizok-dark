import Link from 'next/link';
import React from 'react';
import { Icon } from '../ui/Icon';
import Logo from '../ui/Logo';

type Props = {};

const Header = (props: Props) => {
  const user = false;
  return (
    <header className='grid items-center grid-cols-3 py-6 px-5'>
      <div></div>
      <Logo size='small' />
      <div className='flex items-center justify-self-end'>
        {!user && (
        <div className='bg-deepBlack p-4 rounded-full bg-opacity-20'>
          <Link href='/auth/signin'>
            <Icon className='w-[24px]' name='login' />
          </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
