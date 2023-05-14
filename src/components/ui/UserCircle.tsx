import { logout } from '@/ducks/auth.ducks';
import store from '@/store/store';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Dropdown, { DropdownItem } from './Dropdown';
import { Icon } from './Icon';



type Props = {};

type User = {
  username: string;
  avatar?: string;
};

const dropdownItems: DropdownItem[] = [
  {
    title: 'Profile',
    href: '/profile',
    icon: 'user'
  },
  {
    title: "Settings",
    href: '/settings',
    icon: 'settings'
  },
  {
    title: 'Logout',
    href: '/logout',
    icon: 'logout',
    handler: () => {
      store.dispatch(logout())
    }
  },
];

const UserCircle = (props: Props) => {
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const user: User = {
    // avatar: 'https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg'
    username: 'lodoss',
  };
  return user ? (
    <div className='relative'>
      <div  onClick={() => setDropdownOpen(!isDropdownOpen)} className='bg-deepBlack p-4 rounded-full bg-opacity-20'>
        {user.avatar ? (
          <Image src={user.avatar} alt='user avatar' width={24} height={24} quality={10} />
        ) : (
          user.username.at(0)?.toUpperCase()
        )}
      </div>
      <Dropdown
        className='bg-deepBlack z-50'
        items={dropdownItems}
        open={isDropdownOpen}
        setOpen={() => setDropdownOpen(!isDropdownOpen)}
      />
    </div>
  ) : (
    <div className='bg-deepBlack p-4 rounded-full bg-opacity-20'>
      <Link href='/auth/signin'>
        <Icon className='w-[24px]' name='login' />
      </Link>
    </div>
  );
};

export default UserCircle;
