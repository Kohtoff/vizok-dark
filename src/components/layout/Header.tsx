import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Icon } from '../ui/Icon';
import Logo from '../ui/Logo';
import UserCircle from '../ui/UserCircle';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className='grid items-center grid-cols-3 py-6 px-5'>
      <div></div>
      <Logo size='small' />
      <div className='flex items-center justify-self-end'>
        <UserCircle />
      </div>
    </header>
  );
};

export default Header;
